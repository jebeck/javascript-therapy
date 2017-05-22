module.exports = function* pb(name) {
  const resp = yield `Hi, ${name}!`;
  if (resp) {
    yield resp;
    yield String.fromCodePoint(0x1F4A9);
  }
}
