import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#eee" : props.bgColor)};
`;
