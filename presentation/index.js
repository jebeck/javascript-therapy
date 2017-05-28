import { Context, Node } from "react-mathjax";
// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  // Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";

import Chat from "../assets/components/chat.js";
import chatterer from "../assets/chatGenerators/chatterbot1.js";
import elizaMaker from "../assets/chatGenerators/eliza/";
const eliza = elizaMaker();
import ReplIt from "../assets/components/replit.js";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const cursor = {
  show: false,
  blink: false,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};

const TERMINAL_PROMPT = (<div style={{ color: "cyan" }}>deepthought:~ rebel$ node</div>);

const images = {
  amazed: require("../assets/img/amazed.gif"),
  babel: require("../assets/img/babel.png"),
  es6Features: require("../assets/img/es6_features.png"),
  gollum: require("../assets/img/gollum.gif"),
  jgl: require("../assets/img/JGL.png"),
  longList: require("../assets/img/long_list.gif"),
  mdn: require("../assets/img/MDN_generator.png"),
  prettier: require("../assets/img/prettier.svg"),
  scullyEyeroll: require("../assets/img/scully_eyeroll.gif"),
  tiredPuppy: require("../assets/img/tired_puppy.gif"),
  troubleTyping: require("../assets/img/trouble_typing.gif"),
  whiningNotAngsting: require("../assets/img/whining_not_angsting.gif"),
  yo: require("../assets/img/yo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#56137A", // dark purple
  secondary: "#15C66B", // light green
  tertiary: "#044725", // dark green
  quartenary: "#850BC6", // bright purple
  white: "white"
}, {
  primary: "Eczar",
  secondary: "Lato"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress="number" transition={["fade"]} transitionDuration={350} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={2} textColor="white">
            JavaScript therapy
          </Heading>
          <Heading size={3} textColor="secondary">(with generators!)</Heading>
        </Slide>
        <Slide bgColor="tertiary" padding={0} transition={["slide"]}>
          <Context>
            <div>
              <Node>
                {"[\\![ἀν]\\!]^{g,w} = "}
              </Node>
              <Node>
                {`\\lambda p_{\\langle st \\rangle}.\\lambda q_{\\langle st \\rangle}.
                \\lambda s \\leq w [(\\forall s^\\prime \\in M:p(s^\\prime) = 1)
                \\exists s^{\\prime\\prime} [s^\\prime < s^{\\prime\\prime}\\, \\& \\; q(s^{\\prime\\prime}) = 1]]`}
              </Node>
            </div>
          </Context>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <BlockQuote>
            <Quote
              textColor="secondary"
            >
              <span dangerouslySetInnerHTML={{ __html: "καὶ ἐ<span style=\"color: white;\">ὰν</span> ἴσοις ἴσα προστεθῇ, τὰ ὅλα ἐστὶν ἴσα." }} />
            </Quote>
            <Cite textColor="secondary">
              <Link
                href="http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0085%3Abook%3D1%3Atype%3DCN%3Anumber%3D2"
                target="_blank"
                textColor="secondary"
              >
                Euclid 1.CN.2
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <BlockQuote>
            <Quote textColor="secondary">If equals are added to equals, the results are equal.</Quote>
            <Cite textColor="secondary">
              <Link
                href="http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0086%3Abook%3D1%3Atype%3DCN%3Anumber%3D2"
                target="_blank"
                textColor="secondary"
              >
                Euclid 1.CN.2
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="tertiary">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/euclid.example")}
            textSize="1.75rem"
          />
        </Slide>
        <Slide bgColor="tertiary" padding={0} transition={["slide"]}>
          <Context>
            <div>
              <Node>
                {"[\\![ἀν]\\!]^{g,w} = "}
              </Node>
              <Node>
                {`\\lambda p_{\\langle st \\rangle}.\\lambda q_{\\langle st \\rangle}.
                \\lambda s \\leq w [(\\forall s^\\prime \\in M:p(s^\\prime) = 1)
                \\exists s^{\\prime\\prime} [s^\\prime < s^{\\prime\\prime}\\, \\& \\; q(s^{\\prime\\prime}) = 1]]`}
              </Node>
            </div>
          </Context>
        </Slide>
        <Slide transition={["slide"]}>
          <Image src={images.jgl} width={900}/>
        </Slide>
        <Slide bgColor="primary" transition={["slide"]}>
          <Code bgColor="rgba(255,255,255,0.625)" padding={25} textColor="quartenary" textSize="4em">{"¯\\_(ツ)_/¯"}</Code>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading fit size={2}>✨ diversity is good ✨</Heading>
          <Appear>
            <Heading fit lineHeight={2} size={2} textColor="white">
              <div>
                <span>🤑 for </span>
                <Link
                  href="http://www.mckinsey.com/business-functions/organization/our-insights/why-diversity-matters"
                  target="_blank"
                  textColor="quartenary"
                >
                  the bottom line
                </Link>
                <span> too 🤑</span>
              </div>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading fit size={2}>what I do now</Heading>
          <Layout>
            <Appear>
              <Fill>
                <svg width="210.989010989" height="200" viewBox="0 0 96 91">
                  <rect x="0" y="0" width="96" height="91" fill="#D0D0D0" rx="3" ry="3"/>
                  <g transform="scale(0.75) translate(15,15)">
                    <clipPath id="clip">
                      <path d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"/>
                    </clipPath>
                    <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="7" y1="64" x2="50" y2="107">
                      <stop offset="0" stopColor="#f9a03c"/>
                      <stop offset="1" stopColor="#f7974e"/>
                    </linearGradient>
                    <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="2" y1="-2" x2="87" y2="84">
                      <stop offset="0" stopColor="#f26d58"/>
                      <stop offset="1" stopColor="#f9a03c"/>
                    </linearGradient>
                    <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="45" y1="-10" x2="108" y2="53">
                      <stop offset="0" stopColor="#b84e51"/>
                      <stop offset="1" stopColor="#f68e48"/>
                    </linearGradient>
                    <g clipPath="url(#clip)">
                      <path d="M-100,-102m-27,0v300h300z" fill="url(#gradient-1)"/>
                      <path d="M-100,-102m27,0h300v300z" fill="url(#gradient-3)"/>
                      <path d="M-100,-102l300,300" fill="none" stroke="url(#gradient-2)" strokeWidth="40"/>
                    </g>
                  </g>
                </svg>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <svg width="200px" height="200px" viewBox="0 0 600 600">
                  <rect x="0" y="0" width="600" height="600" fill="#D0D0D0" rx="18" ry="18"/>
                  <circle fill="#00D8FF" cx="299.529" cy="299.628" r="50.167"/>
                  <path fill="none" stroke="#00D8FF" strokeWidth="24" strokeMiterlimit="10" d={`M299.529,197.628
                    c67.356,0,129.928,9.665,177.107,25.907c56.844,19.569,91.794,49.233,91.794,76.093c0,27.991-37.041,59.503-98.083,79.728
                    c-46.151,15.291-106.879,23.272-170.818,23.272c-65.554,0-127.63-7.492-174.29-23.441c-59.046-20.182-94.611-52.103-94.611-79.559
                    c0-26.642,33.37-56.076,89.415-75.616C167.398,207.503,231.515,197.628,299.529,197.628z`}
                  />
                  <path fill="none" stroke="#00D8FF" strokeWidth="24" strokeMiterlimit="10" d={`M210.736,248.922
                    c33.649-58.348,73.281-107.724,110.92-140.48c45.35-39.466,88.507-54.923,111.775-41.505
                    c24.248,13.983,33.042,61.814,20.067,124.796c-9.81,47.618-33.234,104.212-65.176,159.601
                    c-32.749,56.788-70.25,106.819-107.377,139.272c-46.981,41.068-92.4,55.929-116.185,42.213
                    c-23.079-13.31-31.906-56.921-20.834-115.233C153.281,368.316,176.758,307.841,210.736,248.922z`}
                  />
                  <path fill="none" stroke="#00D8FF" strokeWidth="24" strokeMiterlimit="10" d={`M210.821,351.482
                    c-33.746-58.292-56.731-117.287-66.312-166.255c-11.544-58.999-3.382-104.109,19.864-117.566
                    c24.224-14.024,70.055,2.244,118.14,44.94c36.356,32.28,73.688,80.837,105.723,136.173c32.844,56.733,57.461,114.209,67.036,162.582
                    c12.117,61.213,2.309,107.984-21.453,121.74c-23.057,13.348-65.249-0.784-110.239-39.499
                    C285.567,460.886,244.898,410.344,210.821,351.482z`}
                  />
                </svg>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <svg width="200px" height="200px" viewBox="0 0 100 100">
                  <rect x="0" y="0" width="100" height="100" fill="#D0D0D0" rx="3" ry="3"/>
                  <g fill="#764ABC">
                    <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"/>
                    <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"/>
                    <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/>
                  </g>
                </svg>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
            TODO: React (+ Redux) @ Tidepool timeline slide
          </Code>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Layout>
            <Fill>
              <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
                redux-thunk
              </Code>
            </Fill>
            <Fill>
              <Text textColor="white">vs.</Text>
            </Fill>
            <Fill>
              <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
                redux-saga
              </Code>
            </Fill>
          </Layout>
        </Slide>
        <Slide align="center flex-start" bgImage={images.tiredPuppy}>
          <Heading fit size={1} textColor="quartenary">JavaScript fatigue</Heading>
        </Slide>
        <Slide align="center flex-end" bgImage={images.gollum}>
          <Heading fit size={1} textColor="secondary">JavaScript fatigue</Heading>
        </Slide>
        <Slide align="center flex-end" bgImage={images.scullyEyeroll}>
          <Heading fit size={2} textColor="white">...JavaScript fatigue??</Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Image src={images.whiningNotAngsting} width={800}/>
        </Slide>
        <Slide bgColor="primary" transition={["slide"]}>
          <Heading size={1} textColor="secondary">new language features</Heading>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading size={2} textSize="4rem">`const` vs. `let`</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/const_vs_let.example")}
            textSize="1.25em"
          />
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading size={2} textSize="4rem">computed property names</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/computed_property_names.example")}
            textSize="2em"
          />
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading size={2} textSize="4rem">fat arrow functions</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/fat_arrow_fns.example")}
            textSize="1.05em"
          />
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading size={2} textSize="4rem">destructuring assignment</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/destructuring.example")}
            textSize="1.625em"
          />
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Image src={images.es6Features}/>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Image src={images.longList} width={800}/>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Text fit lineHeight={2} textColor="secondary">JavaScript itself is changing...</Text>
          <Text fit textColor="secondary">🛠️ and the tools are changing too 🛠️</Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Image src={images.babel} width={900}/>
        </Slide>
        <Slide bgColor="tertiary">
          <svg width="750" height="379.7176909649" viewBox="0 0 498.39 252.33">
            <title>Flow logo</title>
            <g>
              <path fill="#ffca20" opacity=".7" d="M224.74 109l-84.11-84.1h84.11z" />
              <path fill="#ffca20" opacity=".7" d="M81.72 0h47.68l36.44 36.43H81.72z" />
              <path fill="#ffcf39" opacity=".9" d="M84.45 84.12L.34 0h101.13v84.11zm73.89 84.1l84.11 84.11h-84.11z" />
              <path fill="#ffe490" opacity=".7" d="M101.47 168.23l-84.1-84.12h84.11v84.11zm90.58-42.57L125 58.57h67.08zm7.84 118.84l-76.28-76.27h76.28z" />
              <path fill="#fcbc7c" opacity=".9" d="M101.47 67l-67-67h67z" />
              <path fill="#f9a040" opacity=".8" d="M123.95 168.22l84.11 84.11h-84.11z" />
              <path fill="#f9a040" opacity=".7" d="M209.08 201.8l-84-84h84z" />
              <path fill="#ffcf39" opacity=".9" d="M125 58.57l83.09 83.09H125z" />
              <path fill="#ffc737" opacity=".7" d="M101.47 252L0 150.51h101.47V252z" />
            </g>
            <path fill="#eee" d="M311.18 108.38h19.55v4.78h-19.55v50.77h-5.55v-50.77h-11.12v-4.78h11.11v-9.33q0-7.78 4.33-12.28t12.22-4.5q6 0 9 3l-1.56 4.44a10.21 10.21 0 0 0-7-2.44q-5.44 0-8.44 3.17t-3 9.17zm31.11 42.1q0 5.11 1.61 7.22t5.39 2.11a15.55 15.55 0 0 0 7.33-1.56l-.78 5.33a17.29 17.29 0 0 1-7.33 1.44q-6 0-8.89-3.39T336.73 151V82.83h5.55zM405.78 115q7.05 7.72 7.06 21.17t-7.05 21.16q-7.07 7.67-19.38 7.67T367 157.32q-7-7.72-7-21.16t7-21.16q7.05-7.7 19.41-7.7t19.37 7.7zm-34.71 3.5q-5.55 6.44-5.55 17.66t5.55 17.66q5.55 6.44 15.33 6.44t15.33-6.44q5.55-6.44 5.55-17.66t-5.55-17.66q-5.56-6.5-15.34-6.5t-15.34 6.46zm127.33-10.09l-19 55.55h-5.58l-17.55-48.55-17.11 48.55h-5.56l-19-55.55h6.22l15.55 49 17.33-49h5.58l17.2 49 15.69-49z" />
          </svg>
        </Slide>
        <Slide bgColor="tertiary">
          <Image src={images.prettier} width={900}/>
        </Slide>
        <Slide bgColor="primary" transition={["slide"]}>
          <Code bgColor="rgba(255,255,255,0.625)" padding={25} textColor="quartenary" textSize="4em">{"¯\\_(ツ)_/¯"}</Code>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} textColor="secondary">Meet ELIZA: 👩‍⚕️</Heading>
          <Appear>
            <div>
              <Layout>
                <Text textColor="secondary" textSize="4rem">Created: 1964–1966</Text>
              </Layout>
              <Layout>
                <Text textColor="secondary" textSize="4rem">@ MIT AI</Text>
              </Layout>
              <Layout>
                <Text textColor="secondary" textSize="4rem">by Joseph Weizenbaum</Text>
              </Layout>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
            TODO: Eliza convo slide
          </Code>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">✨ the cure for ✨</Heading>
          <Heading fit lineHeight={2} size={1} textColor="white">😫 JavaScript fatigue 😫</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">✨ my cure for ✨</Heading>
          <Heading fit lineHeight={2} size={1} textColor="white">😫 JavaScript fatigue 😫</Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <div style={{ fontSize: "6.75rem", fontWeight: "bold" }}>
            <span>play with your </span>
            <S type="strikethrough" textColor="tertiary">🍱&nbsp;food&nbsp;🍲</S>
            <span>&nbsp;</span>
            <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="6.75rem">code</Code>
          </div>
        </Slide>
        <Slide>
          <Heading fit size={2}>👟 the learning journey 👟</Heading>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Image src={images.mdn} width={900}/>
        </Slide>
        <Slide bgColor="tertiary">
          <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
            TODO: desert #1
          </Code>
        </Slide>
        <Slide bgColor="tertiary">
          <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
            TODO: desert #2
          </Code>
        </Slide>
        <Slide bgColor="tertiary">
          <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
            TODO: desert #3
          </Code>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading textColor="quartenary">hard</Heading>
          <Heading lineHeight={2} size={1}>😰 😰 😰</Heading>
          <Heading textColor="quartenary">work</Heading>
        </Slide>
        <Slide>
          <Heading fit size={1} textColor="white">generators</Heading>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading lineHeight={1.25} size={3} textColor="quartenary">(more precisely)</Heading>
          <Heading lineHeight={1.25} size={2} textColor="secondary">generator functions</Heading>
          <Heading lineHeight={1.25} size={2} textColor="secondary">vs.</Heading>
          <Heading lineHeight={1.25} size={2} textColor="secondary">generator( object)s</Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading fit size={1} textColor="white">syntax</Heading>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading size={2} textSize="4rem">non-arrow functions</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/non_arrow_fn.example")}
            textSize="1.5em"
          />
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Image src={images.yo} width={900}/>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>two things</Heading>
          <Appear>
            <Text lineHeight={1.25} textSize="5rem" textAlign="left" textColor="white">1) the <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="5rem">*</Code></Text>
          </Appear>
          <Appear>
            <Text lineHeight={1.25} textSize="5rem" textAlign="left" textColor="white">2) <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="5rem">yield</Code></Text>
          </Appear>
          <Appear>
            <Text lineHeight={1.25} textSize="5rem" textAlign="left" textColor="white">3) profit! 🤑</Text>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>the <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="5.88rem">*</Code></Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/yo_generator.example")}
            textSize="1.5em"
          />
          <ReplIt href="https://repl.it/IJuc/latest"/>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>the <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="5.88rem">*</Code></Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/yo2_generator.example")}
            textSize="1.5em"
          />
          <ReplIt href="https://repl.it/IJuh/latest"/>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Heading size={2}>🕵️‍♂️ an anonymous generator fn 🕵️‍♀️</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/anon_generator.example")}
            textSize="1.25em"
          />
          <ReplIt href="https://repl.it/IJuk/latest"/>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading lineHeight={2} size={2}>and now: <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="5.88rem">yield</Code></Heading>
          <Appear>
            <Heading size={3} textColor="white">just a fancy <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary" textSize="4.9rem">return</Code>??</Heading>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>three things</Heading>
          <List textColor="white">
            <Appear>
              <ListItem>returns a value</ListItem>
            </Appear>
            <Appear>
              <ListItem>accepts a value</ListItem>
            </Appear>
            <Appear>
              <ListItem><S type="bold">pauses</S> the generator function</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>#1: returns a value</Heading>
          <Heading size={3} textColor="white">(via the iterator protocol)</Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/using_generator.example")}
          ranges={[{
            loc: [0, 0],
            title: "generator objects are iterators"
          }, {
            loc: [0, 3]
          }, {
            loc: [3, 4]
          }, {
            loc: [4, 5]
          }]}
        />
        <Slide bgColor="tertiary" style={{ fontSize: "3rem" }}>
          <Heading size={2}>generator objects are iterators</Heading>
          <Terminal
            output={[
              TERMINAL_PROMPT,
              <Typist cursor={cursor} key={1}>const it = yo('Rebels');</Typist>,
              <Typist cursor={cursor} key={2}>console.log(it.next());</Typist>,
              <div key={3} style={{ color: "yellow" }}>{"{ value: 'Yo, Rebels', done: false }"}</div>,
              <Typist cursor={cursor} key={4}>console.log(it.next());</Typist>,
              <div key={5} style={{ color: "yellow" }}>{"{ value: undefined, done: true }"}</div>
            ]}
            showFirstEntry
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>#2: accepts a value</Heading>
        </Slide>
        <Slide>
          <Heading fit size={1} textColor="white">concurrency</Heading>
          <Heading size={2}>in JavaScript</Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading fit size={2}>external concurrency</Heading>
          <List>
            <Appear>
              <ListItem>AJAX</ListItem>
            </Appear>
            <Appear>
              <ListItem>Web Workers</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" transition={["slide"]}>
          <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">
            TODO: side-by-side CodePanes illustrating Web Worker message-passing API
          </Code>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/basic_yield.example")}
          ranges={[{
            loc: [0, 0],
            title: "yield accepting a value"
          }, {
            loc: [1, 2]
          }, {
            loc: [2, 6]
          }]}
        />
        <Slide bgColor="tertiary" style={{ fontSize: "3rem" }}>
          <Heading size={2}>no value given</Heading>
          <Terminal
            output={[
              TERMINAL_PROMPT,
              <Typist cursor={cursor} key={1}>const it1 = pb('Rebels');</Typist>,
              <Typist cursor={cursor} key={2}>console.log(it1.next().value);</Typist>,
              <div key={3} style={{ color: "yellow" }}>Hi, Rebels!</div>,
              <Typist cursor={cursor} key={4}>console.log(it1.next());</Typist>,
              <div key={5} style={{ color: "yellow" }}>{"{ value: undefined, done: true }"}</div>
            ]}
            showFirstEntry
          />
          <ReplIt href="https://repl.it/IUte/latest" />
        </Slide>
        <Slide bgColor="tertiary" style={{ fontSize: "3rem" }}>
          <Heading size={2}>value given!</Heading>
          <Terminal
            output={[
              TERMINAL_PROMPT,
              <Typist cursor={cursor} key={6}>const it2 = pb('Rebels');</Typist>,
              <Typist cursor={cursor} key={7}>console.log(it2.next().value);</Typist>,
              <div key={8} style={{ color: "yellow" }}>Hi, Rebels!</div>,
              <Typist cursor={cursor} key={9}>console.log(it2.next('Hi').value);</Typist>,
              <div key={10} style={{ color: "yellow" }}>Hi</div>,
              <Typist cursor={cursor} key={11}>console.log(it2.next().value);</Typist>,
              <div key={12} style={{ color: "yellow" }}>💩 // RUDE!</div>,
              <Typist cursor={cursor} key={13}>console.log(it2.next());</Typist>,
              <div key={14} style={{ color: "yellow" }}>{"{ value: undefined, done: true }"}</div>
            ]}
            showFirstEntry
          />
          <ReplIt href="https://repl.it/IVVg/latest" />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>#3: pauses the generator function</Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Image src={images.amazed} width={700}/>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/run_to_completion.example")}
          ranges={[{
            loc: [0, 0],
            title: "run to completion"
          }, {
            loc: [0, 5]
          }, {
            loc: [6, 7]
          }]}
        />
        <Slide bgColor="tertiary" style={{ fontSize: "3rem" }} transition={["slide"]}>
          <Heading size={2}>run to completion</Heading>
          <Terminal
            output={[
              TERMINAL_PROMPT,
              <Typist key={1} cursor={cursor}>wisdom();</Typist>,
              <div key={2}>
                <div style={{ color: "yellow" }}>
                  There's always
                </div>
                <div style={{ color: "yellow" }}>
                  💰 💸 💰 💸 💰
                </div>
                <div style={{ color: "yellow" }}>
                  in the 🍌 stand.
                </div>
              </div>
            ]}
            showFirstEntry
          />
          <ReplIt href="https://repl.it/IVVm/latest" />
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/yielding_pausing.example")}
          ranges={[{
            loc: [0, 0],
            title: "yielding is pausing"
          }, {
            loc: [1, 2],
            title: "yes, really"
          }, {
            loc: [0, 5]
          }]}
        />
        <Slide bgColor="tertiary">
          <Image src={images.troubleTyping} width={850} />
          <Text lineHeight={1.5} textColor="secondary">A Tom Hanks in the wild trying to type a <Code bgColor="rgba(255,255,255,0.625)" textColor="quartenary">while (true)</Code> loop</Text>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/while_true.example")}
          ranges={[{
            loc: [0, 0],
            title: "the proof"
          }, {
            loc: [0, 7]
          }, {
            loc: [9, 17]
          }]}
        />
        <Slide bgColor="tertiary">
          <ComponentPlayground
            code={require("raw-loader!../assets/code/WhileTrue.playground")}
          />
          <ReplIt href="https://repl.it/IVVu/latest" />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={2}>three things</Heading>
          <List textColor="white">
            <Appear>
              <ListItem>returns a value</ListItem>
            </Appear>
            <Appear>
              <ListItem>accepts a value</ListItem>
            </Appear>
            <Appear>
              <ListItem><S type="bold">pauses</S> the generator function</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>what are generators good for?</Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Layout>
            <Appear>
              <Fill>
                <Heading bgColor="white" lineHeight={2} size={3}>fn*</Heading>
                <Text lineHeight={2} textSize="6rem">👻</Text>
              </Fill>
            </Appear>
            <Fill/>
            <Appear>
              <Fill>
                <Heading bgColor="black" lineHeight={2} size={3} textColor="white">main</Heading>
                <Text lineHeight={2} textSize="6rem">😎</Text>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/chatterbot_1.example")}
          ranges={[{
            loc: [0, 0],
            title: "chatterbot #1"
          }, {
            loc: [1, 3]
          }, {
            loc: [4, 6]
          }, {
            loc: [10, 12]
          }, {
            loc: [6, 9]
          }]}
        />
        <Slide bgColor="tertiary">
          <Layout>
            <Fill>
              <Chat generator={chatterer} />
            </Fill>
          </Layout>
          <ReplIt href="https://repl.it/IVXv/latest" />
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Chat generator={eliza} />
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
