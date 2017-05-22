import React from "react";
import { Link, S } from "spectacle";

const ReplIt = (props) => {
  const { href } = props;
  return (
    <Link
      href={href}
      style={{ position: "absolute", bottom: "-20px", left: "40px" }}
      target="_blank"
      textColor="secondary"
    >
      <S type="underline">try on repl.it</S>
    </Link>
  );
};

ReplIt.propTypes = {
  href: React.PropTypes.string.isRequired
};

export default ReplIt;
