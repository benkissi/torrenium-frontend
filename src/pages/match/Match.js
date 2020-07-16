import React, { useContext, useState } from "react";
import { Wrapper, Results, Empty } from "./MatchStyles";
import TextInput from "../../components/input";
import Button from "../../components/button";
import Tag from "../../components/tag";
import ClipLoader from "react-spinners/ClipLoader";

import { findMatchingJobs } from "../../utils/api";
import { AppContext } from "../../store/store";

import { APP_TYPES } from "../../store/types";

function MatchingJobs(props) {
  const [state, setState] = useState({
    username: "",
  });

  const { store, dispatchStore } = useContext(AppContext);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setState((prevState) => {
      return {
        username: value,
      };
    });
  };

  const handleButtonClick = async () => {
    dispatchStore({ type: APP_TYPES.SET_LOADING_STATE, payload: true });
    try {
      const data = await findMatchingJobs(state.username, store.user.token);
      if (data) {
        dispatchStore({ type: APP_TYPES.SET_MATCHING_JOBS, payload: data });
      }
      dispatchStore({ type: APP_TYPES.SET_LOADING_STATE, payload: false });
    } catch (error) {
      dispatchStore({ type: APP_TYPES.SET_LOADING_STATE, payload: false });
    }
  };

  const profile = store.matchingJobs && store.matchingJobs.bio.person.picture;
  const userStrengths = store.matchingJobs && store.matchingJobs.bio.strengths;

  return (
    <Wrapper>
      <h3>Find Opportunities that you match</h3>
      <div className="search-box">
        <TextInput
          placeholder="Type any Torre username"
          name="search"
          onInputChange={handleInputChange}
          type="text"
          value={state.username}
        />
        <Button text="SEARCH" click={handleButtonClick} bgColor="#CDDC39" />
      </div>
      {store.loading ? (
        <Empty>
          <ClipLoader
          size={150}
          color={"#123abc"}
          loading={store.loading}
        />
        </Empty>
        
      ) : store.matchingJobs ? (
        <Results>
          <div className="bio-summary">
            <div className="profile-pic">
              <img src={profile} />
            </div>
            <h4>Your Strengths</h4>
            <div className="strengths">
              {userStrengths
                ? userStrengths.map((strength, index) => (
                    <Tag bgColor="#90ee90">{strength.name}</Tag>
                  ))
                : ""}
            </div>
          </div>
          <div className="table-container"></div>
        </Results>
      ) : <Empty>No Data Yet</Empty>}
    </Wrapper>
  );
}

export default MatchingJobs;
