import React, { useState, useEffect } from "react";

import { Wrapper, Inner, Head, Details } from "./ModalStyles";
import Button from "../button";

function Modal(props) {
  const [state, setState] = useState({
    reason: "",
    responsibility: "",
    requirements: "",
    career: "",
  });

  useEffect(() => {
    const reason = props.details.find((desc) => desc.code === "reason");
    const responsibility = props.details.find(
      (desc) => desc.code === "responsibilities"
    );
    const requirements = props.details.find(
      (desc) => desc.code === "requirements"
    );
    const career = props.details.find((desc) => desc.code === "career-path");

    setState(() => {
      return {
        reason: reason ? reason.content : "",
        responsibility: responsibility ? responsibility.content : "",
        requirements: requirements ? requirements.content : "",
        career: career ? career.content : "",
      };
    });
  }, [props]);

  return (
    <Wrapper>
      <Inner>
        <Head>
          <div className="title">{props.title}</div>
          {props.match ? <div className="match-status">A match</div> : ""}
        </Head>
        <Details>
          {state.reason ? (
            <div className="reason">
              <strong>Reason:</strong>
              {state.reason}
            </div>
          ) : (
            ""
          )}
          {state.responsibility ? (
            <div className="resp">
              <strong>Responsibility</strong>:{state.responsibility}
            </div>
          ) : (
            ""
          )}
          {state.requirements ? (
            <div className="req">
              <strong>Requirements:</strong>
              {state.requirements}
            </div>
          ) : (
            ""
          )}
          {state.carrer ? (
            <div className="career">
              <strong>Carrer:</strong>
              {state.career}
            </div>
          ) : (
            ""
          )}
        </Details>
        <div className="button">
          <Button text="close" click={() => props.close()} bgColor="#CDDC39" />
        </div>
      </Inner>
    </Wrapper>
  );
}

export default Modal;
