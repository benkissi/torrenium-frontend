import React from "react";
import { Wrapper, Head } from "./JobStyles";

function Job(props) {
  console.log("org", props.pic);
  return (
    <Wrapper>
      <div className="pic">
        <img src={props.pic} />
      </div>
      <div className="details">
            <h4>{props.title}</h4>
            <p>{props.type}</p>
      </div>
    </Wrapper>
  );
}

export default Job;
