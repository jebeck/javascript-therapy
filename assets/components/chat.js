import React, { PureComponent } from "react";

const container = {
  width: "100%",
  height: "32rem",
  display: "flex",
  flexDirection: "column"
};

const form = {
  width: "100%",
  maxHeight: "6rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "baseline"
};

const button = {
  borderRadius: "0.25rem",
  padding: "0.25rem 1rem"
};

const chatLog = {
  textAlign: "left",
  width: "80%",
  maxHeight: "26rem",
  margin: "0 auto",
  overflowY: "scroll"
};

const chatLine = {
  margin: "0.25rem"
};

function* chatterer() {
  // opening the conversation
  yield String.fromCodePoint(0x1F643);
  while (true) {
    // ongoing call-and-response
    const msg = yield String.fromCodePoint(0x1F4A9);
    if (msg.search(/bye/i) !== -1) {
      break;
    }
  }
  // closing the conversation
  return String.fromCodePoint(0x1F44B);
}

class Chat extends PureComponent {
  constructor(props) {
    super(props);

    this.it = props.generator();

    this.state = {
      convo: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        convo: [
          ...this.state.convo,
          this.it.next().value
        ]
      });
    }, 500);
  }

  componentDidUpdate() {
    this.chat.scrollTop = this.chat.scrollHeight;
  }

  handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const msg = this.input.value;
    this.setState(({
      convo: [
        ...this.state.convo,
        msg
      ]
    }));
    setTimeout(() => {
      this.setState({
        convo: [
          ...this.state.convo,
          this.it.next(msg).value
        ]
      });
    }, 500);
    this.input.value = "";
  }

  render() {
    return (
      <div style={container}>
        <form onSubmit={this.handleSubmit} style={form}>
          <label style={{ padding: "0.5rem" }}>
            Chat with the bot:&nbsp;
            <input type="text" id="chat" ref={(input) => { this.input = input; }} style={{ padding: "0.25rem" }} />
          </label>
          <button style={button} type="submit">Send</button>
        </form>
        <div ref={(chat) => { this.chat = chat; }} style={chatLog}>
          {this.state.convo.map(
            (msg, i) => (
              <p className={this.props.logClassName} key={i} style={chatLine}>{msg}</p>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Chat;
