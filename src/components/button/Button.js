import React from "react";

import { Button } from "./button-styles";

function ButtonComp({
  bgColor = "#296efa",
  text = "Button text here",
  disabled,
  click,
}) {
  return (
    <Button bgColor={bgColor} disabled={disabled} onClick={click}>
      {text}
    </Button>
  );
}

export default ButtonComp;
