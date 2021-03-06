import React from "react";
import { Wrapper, Head } from "./JobStyles";

function Job(props) {
  return (
    <Wrapper onClick={() => props.click(props.id, props.match)}>
      <div className="pic">
        <img src={props.pic} />
      </div>
      <div className="details">
        <h4>{props.title}</h4>
        {
            props.match?<p className="match">Matches your skill</p>:""
        }
        <div className="footer">
          <div>{props.type}</div>
          <div>{props.remote ? "Remote" : "Not remote"}</div>
          <div>{props.status}</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Job;
