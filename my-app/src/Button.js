import React, { PropTypes } from "react";

function Button({ children }, { color }) {
  return <button style={{ background: color }}>{children}</button>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.any.isRequired
};

Button.contextTypes = {
  color: React.PropTypes.string
};
