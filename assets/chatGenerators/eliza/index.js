/* Some code in this module is copied and/or ported from code downloadable at
 * http://www.masswerk.at/elizabot/ which includes the following license statement:
 * "'elizabot.js' is free software and provided 'as is'. It is distributed
 * in the hope that it will be useful, but without any warranty; without even the
 * implied warranty of merchantability or fitness for a particular purpose."
 */

/* eslint-disable no-plusplus */

const {
  elizaFinals,
  elizaInitials,
  elizaPosts,
  elizaPostTransforms,
  elizaPres,
  elizaSynons,
} = require('./data.js');

let {
  elizaKeywords,
  elizaQuits,
} = require('./data.js');

module.exports = function createElizaChat(chatId) {
  // parse data and convert it from canonical form to internal use
  // (1) produce synonym list
  const synPatterns = {};
  if (elizaSynons && typeof elizaSynons === 'object') {
    for (let i = 0; i < elizaSynons.length; ++i) {
      synPatterns[i] = `(${i}|${elizaSynons[i].join('|')})`;
    }
  }
  // (2) check for keywords or install empty structure to prevent any errors
  if (!elizaKeywords || !elizaKeywords.length) {
    elizaKeywords = [['###', 0, [['###', []]]]];
  }
  // (3) convert rules to regexps
  // expand synonyms and insert asterisk expressions for backtracking
  const sre = /@(\S+)/;
  const are = /(\S)\s*\*\s*(\S)/;
  const are1 = /^\s*\*\s*(\S)/;
  const are2 = /(\S)\s*\*\s*$/;
  const are3 = /^\s*\*\s*$/;
  const wsre = /\s+/g;
  for (let k = 0; k < elizaKeywords.length; ++k) {
    const rules = elizaKeywords[k][2];
    elizaKeywords[k][3] = k; // save original index for sorting
    for (let i = 0; i < rules.length; i++) {
      const r = rules[i];
      // check mem flag and store it as decomp's element 2
      if (r[0].charAt(0) === '$') {
        let ofs = 1;
        while (r[0].charAt[ofs] === ' ') ofs++;
        r[0] = r[0].substring(ofs);
        r[2] = true;
      } else {
        r[2] = false;
      }
      // expand synonyms (v.1.1: work around lambda function)
      let m = sre.exec(r[0]);
      while (m) {
        const sp = (synPatterns[m[1]]) ? synPatterns[m[1]] : m[1];
        r[0] = r[0].substring(0, m.index) + sp + r[0].substring(m.index + m[0].length);
        m = sre.exec(r[0]);
      }
      // expand asterisk expressions (v.1.1: work around lambda function)
      if (are3.test(r[0])) {
        r[0] = '\\s*(.*)\\s*';
      } else {
        m = are.exec(r[0]);
        if (m) {
          let lp = '';
          let rp = r[0];
          while (m) {
            lp += rp.substring(0, m.index + 1);
            if (m[1] !== ')') lp += '\\b';
            lp += '\\s*(.*)\\s*';
            if ((m[2] !== '(') && (m[2] !== '\\')) lp += '\\b';
            lp += m[2];
            rp = rp.substring(m.index + m[0].length);
            m = are.exec(rp);
          }
          r[0] = lp + rp;
        }
        m = are1.exec(r[0]);
        if (m) {
          let lp = '\\s*(.*)\\s*';
          if ((m[1] !== ')') && (m[1] !== '\\')) lp += '\\b';
          r[0] = lp + r[0].substring((m.index - 1) + m[0].length);
        }
        m = are2.exec(r[0]);
        if (m) {
          let lp = r[0].substring(0, m.index + 1);
          if (m[1] !== '(') lp += '\\b';
          r[0] = `${lp}\\s*(.*)\\s*`;
        }
      }
      // expand white space
      r[0] = r[0].replace(wsre, '\\s+');
      wsre.lastIndex = 0;
    }
  }
  // (4) now sort keywords by rank (highest first)
  elizaKeywords.sort((a, b) => {
    // sort by rank
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    // or by original index
    } else if (a[3] > b[3]) {
      return 1;
    } else if (a[3] < b[3]) {
      return -1;
    }
    return 0;
  });
  // (5) compose regexps and refs for pres and posts
  const pres = {};
  const posts = {};
  let preExp;
  let postExp;
  let sentence;
  if (elizaPres && elizaPres.length) {
    const a = [];
    for (let i = 0; i < elizaPres.length; i += 2) {
      a.push(elizaPres[i]);
      pres[elizaPres[i]] = elizaPres[i + 1];
    }
    preExp = new RegExp(`\\b(${a.join('|')})\\b`);
  } else {
    // default (should not match)
    preExp = /####/;
    pres['####'] = '####';
  }
  if (elizaPosts && elizaPosts.length) {
    const a = [];
    for (let i = 0; i < elizaPosts.length; i += 2) {
      a.push(elizaPosts[i]);
      posts[elizaPosts[i]] = elizaPosts[i + 1];
    }
    postExp = new RegExp(`\\b(${a.join('|')})\\b`);
  } else {
    // default (should not match)
    postExp = /####/;
    posts['####'] = '####';
  }
  // (6) check for elizaQuits and install default if missing
  if (!elizaQuits || !elizaQuits.length) {
    elizaQuits = [];
  }

  const lastchoice = [];
  for (let k = 0; k < elizaKeywords.length; ++k) {
    lastchoice[k] = [];
    const rules = elizaKeywords[k][2];
    for (let i = 0; i < rules.length; i++) {
      lastchoice[k][i] = -1;
    }
  }
  const mem = [];
  let quit = false;

  function sanitizeInput(input) {
    let sanitized = input || '';
    sanitized = sanitized.toLowerCase();
    sanitized = sanitized.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
    sanitized = sanitized.replace(/\s+-+\s+/g, '.');
    sanitized = sanitized.replace(/\s*[,.?!;]+\s*/g, '.');
    sanitized = sanitized.replace(/\s*\bbut\b\s*/g, '.');
    sanitized = sanitized.replace(/\s{2,}/g, ' ');
    return sanitized;
  }

  function getRuleIndexByKey(key) {
    for (let k = 0; k < elizaKeywords.length; ++k) {
      if (elizaKeywords[k][0] === key) {
        return k;
      }
    }
    return -1;
  }

  function postTransform(str) {
    let s = str;
    // final cleanings
    s = s.replace(/\s{2,}/g, ' ');
    s = s.replace(/\s+\./g, '.');
    if ((elizaPostTransforms) && (elizaPostTransforms.length)) {
      for (let i = 0; i < elizaPostTransforms.length; i += 2) {
        s = s.replace(elizaPostTransforms[i], elizaPostTransforms[i + 1]);
        elizaPostTransforms[i].lastIndex = 0;
      }
    }
    const re = /^([a-z])/;
    const m = re.exec(s);
    if (m) {
      s = m[0].toUpperCase() + s.substring(1);
    }
    return s;
  }

  function memSave(t) {
    mem.push(t);
  }

  function memGet() {
    if (mem.length) {
      const n = Math.floor(Math.random() * mem.length);
      const rpl = mem[n];
      for (let i = n + 1; i < mem.length; i++) {
        mem[i - 1] = mem[i];
      }
      mem.length--;
      return rpl;
    }
    return '';
  }

  function execRule(k) {
    const rule = elizaKeywords[k];
    const decomps = rule[2];
    const paramre = /\(([0-9]+)\)/;
    for (let i = 0; i < decomps.length; i++) {
      const m = sentence.match(decomps[i][0]);
      if (m !== null) {
        const reasmbs = decomps[i][1];
        const memflag = decomps[i][2];
        const ri = Math.floor(Math.random() * reasmbs.length);
        lastchoice[k][i] = ri;
        let rpl = reasmbs[ri];
        let ki;
        if (rpl.search('^goto ', 'i') === 0) {
          ki = getRuleIndexByKey(rpl.substring(5));
          if (ki >= 0) {
            return execRule(ki);
          }
        }
        // substitute positional params
        let m1 = paramre.exec(rpl);
        if (m1) {
          let lp = '';
          let rp = rpl;
          while (m1) {
            let param = m[parseInt(m1[1], 10)];
            // postprocess param
            let m2 = postExp.exec(param);
            if (m2) {
              let lp2 = '';
              let rp2 = param;
              while (m2) {
                lp2 += rp2.substring(0, m2.index) + posts[m2[1]];
                rp2 = rp2.substring(m2.index + m2[0].length);
                m2 = postExp.exec(rp2);
              }
              param = lp2 + rp2;
            }
            lp += rp.substring(0, m1.index) + param;
            rp = rp.substring(m1.index + m1[0].length);
            m1 = paramre.exec(rp);
          }
          rpl = lp + rp;
        }
        rpl = postTransform(rpl);
        if (memflag) {
          memSave(rpl);
        }
        return rpl;
      }
    }
    return '';
  }

  function getElizaText(i, input) {
    if (i === 0) {
      return elizaInitials[Math.floor(Math.random() * elizaInitials.length)];
    }
    const sanitizedParts = sanitizeInput(input).split('.');
    let rpl = '';
    // loop through the sentences
    for (let j = 0; j < sanitizedParts.length; ++j) {
      let part = sanitizedParts[j];
      if (part !== '') {
        // check for quit expression
        for (let k = 0; k < elizaQuits.length; k++) {
          if (elizaQuits[k] === part) {
            quit = true;
            return elizaFinals[Math.floor(Math.random() * elizaFinals.length)];
          }
        }
        // preprocess
        let m = preExp.exec(part);
        if (m) {
          let lp = '';
          let rp = part;
          while (m) {
            lp += rp.substring(0, m.index) + pres[m[1]];
            rp = rp.substring(m.index + m[0].length);
            m = preExp.exec(rp);
          }
          part = lp + rp;
        }
        sentence = part;
        // loop trough keywords
        for (let k = 0; k < elizaKeywords.length; ++k) {
          if (part.search(new RegExp(`\\b${elizaKeywords[k][0]}\\b`, 'i')) >= 0) {
            rpl = execRule(k);
          }
          if (rpl !== '') {
            return rpl.replace(' ?', '?');
          }
        }
      }
    }
    // nothing matched try mem
    rpl = memGet();
    // if nothing in mem, try xnone
    if (rpl === '') {
      sentence = ' ';
      const k = getRuleIndexByKey('xnone');
      if (k >= 0) {
        rpl = execRule(k);
      }
    }
    // return reply or default string
    return (rpl !== '') ? rpl.replace(' ?', '?') : 'I am at a loss for words.';
  }

  return function* elizaBot() {
    let i = 0;
    let input;
    // opening the conversation
    input = yield getElizaText(i);

    while (!quit) {
      ++i;
      input = yield getElizaText(i, input);
    }
  };
};
