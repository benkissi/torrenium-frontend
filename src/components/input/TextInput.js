import React, { useState } from "react";

import { Input, Wrapper, Inner, Icon, Label } from "./input-styles";

function TextInput({
  placeholder = "Add text here",
  tip,
  icon,
  name,
  onInputChange,
  value,
  type = "text",
  validate,
  isError,
  errorMessage,
}) {
  const [isFocused, setFocuseState] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    const { value } = event.target;
    onInputChange(event);
    setInputValue(value);
  };

  const handleOnblur = (event) => {
    validate(event);
    setFocuseState(false);
  };

  const isEmpty = !!!inputValue.length;

  return (
    <Wrapper>
      <Inner isError={isError}>
        <Label show={isFocused || !isEmpty} isError={isError}>
          {placeholder}
        </Label>
        <Input
          placeholder={isFocused ? "" : placeholder}
          name={name}
          onChange={handleOnChange}
          onFocus={() => setFocuseState(true)}
          type={type}
          value={value}
          onBlur={handleOnblur}
        />
        {type === "password" ? "" : <Icon icon={icon} />}
      </Inner>

      {isError ? (
        <p className="input-error">{errorMessage}</p>
      ) : tip ? (
        <p className="tips">{tip}</p>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default TextInput;
