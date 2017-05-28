export default function* chatterer() {
  // opening the conversation
  yield "🙃";
  while (true) {
    // ongoing call-and-response
    const msg = yield "💩";
    if (msg.search(/bye/) !== -1) {
      break;
    }
  }
  // closing the conversation
  return "👋";
};
