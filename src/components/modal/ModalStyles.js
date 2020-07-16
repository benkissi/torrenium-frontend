import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  min-width: 40%;
  min-height: 70%;
  max-width: 40%;
  max-height: 70%;
  background-color: white;
  border-radius: 4px;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow: scroll;

  .button {
    margin-top: auto;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;

  .match-status {
    width: 20%;
    background-color: #cddc39;
    font-weight: bold;
    text-align: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: 15px 0;
  }
`;
