import React, { PropTypes, PureComponent } from "react";

/* global Terminal */

export default class extends PureComponent {
  static propTypes = {
    port: PropTypes.number.isRequired
  };

  static defaultProps = {
    port: 8010
  };

  componentDidMount() {
    const { port } = this.props;
    const term = new Terminal();
    const protocol = (location.protocol === "https:") ? "wss://" : "ws://";
    const socketURL = `${protocol}${location.hostname}:${port}/websocket`;
    const sock = new WebSocket(socketURL);
    sock.addEventListener("open", () => {
      term.terminadoAttach(sock, true, true);
      term.clear();
    });
    term.open(document.getElementById("terminal-container"), false);
    term.fit();
  }

  render() {
    return (
      <div id="terminal-container" style={{ height: "500px" }} />
    );
  }
}
