// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  Fill,
  Heading,
  // ListItem,
  // List,
  // Quote,
  Slide
  // Text
} from "spectacle";

import LiveTerminal from "../assets/liveterminal.js";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("xterm/dist/xterm.css");

const images = {
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
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={2} textColor="white">
            JavaScript therapy
          </Heading>
          <Heading size={3} textColor="secondary">(with generators!)</Heading>
        </Slide>
        <Slide>
          <LiveTerminal />
        </Slide>
      </Deck>
    );
  }
}
