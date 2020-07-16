import React, { useReducer, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/button";
import { formReducer } from "../../store/reducers";
import { FORM_TYPES, APP_TYPES } from "../../store/types";
import { AppContext } from "../../store/store";
import { signinUser, signupUser } from "../../utils/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Wrapper, Form } from "./AuthStyles";

import { isEmail } from "../../utils/validations";

function Auth(props) {
  const INITIAL_STATE = {
    email: "",
    password: "",
    name: "",
    repeatPassword: "",
    emailError: false,
    emailErrorMessage: "",
    passwordError: false,
    passwordErrorMessage: "",
    repeatPasswordError: false,
    repeatPasswordErrorMessage: "",
    nameError: "",
    nameErrorMessage: "",
    type: "signin",
    loggedIn: false,
    isError: false,
  };
  let history = useHistory();
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { store, dispatchStore } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: FORM_TYPES.SET_LOGIN, payload: store.loggedIn });
  }, [store]);

  useEffect(() => {
    if(state.loggedIn){
      history.push("/match")
    }
  }, [state])

  const handleInputChange = (event) => {
    const { name: key, value } = event.target;
    dispatch({
      type: FORM_TYPES.UPDATE_INPUTS,
      payload: {
        key,
        value,
      },
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const inputValue = state[name];
    if (name === "email") {
      isEmail(inputValue)
        ? dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "emailError",
              status: false,
              emailErrorMessage: "",
              isError: false,
            },
          })
        : dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "emailError",
              status: true,
              emailErrorMessage: "Please enter a valid email address",
              isError: true,
            },
          });
    } else if (name === "name") {
      state.name.length > 2
        ? dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "nameError",
              status: false,
              nameErrorMessage: "",
              isError: false,
            },
          })
        : dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "nameError",
              status: true,
              nameErrorMessage: "Name should not be less than 3 characters",
              isError: true,
            },
          });
    } else if (name === "password") {
      state.password.length > 7
        ? dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "passwordError",
              status: false,
              passwordErrorMessage: "",
              isError: false,
            },
          })
        : dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "passwordError",
              status: true,
              passwordErrorMessage:
                "Password should not be less than 8 characters",
              isError: true,
            },
          });
    } else if (name === "repeatPassword") {
      state.password == state.repeatPassword
        ? dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "repeatPasswordError",
              status: false,
              repeatPasswordErrorMessage: "",
              isError: false,
            },
          })
        : dispatch({
            type: FORM_TYPES.SET_INPUT_ERROR,
            payload: {
              key: "repeatPasswordError",
              status: true,
              repeatPasswordErrorMessage: "Passwords do not match",
              isError: true,
            },
          });
    }
  };
  const handleClick = async () => {
    if (state.isError) {
      console.log("Fix form errors");
      return;
    }

    if (state.type === "signin") {
      try {
        const user = await signinUser(state.email, state.password);
        if (user) {
          dispatchStore({
            type: APP_TYPES.SET_LOGIN,
            payload: { status: true, data: user },
          });
        }
      } catch (error) {
        toast.error("user not found", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    if (state.type === "signup") {
      if (state.repeatPassword !== state.password) {
        toast.error("passwords do not match", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      try {
        const user = await signupUser(state.email, state.password);
        if (user) {
          dispatchStore({
            type: APP_TYPES.SET_LOGIN,
            payload: { status: true, data: user },
          });
        }
      } catch (error) {
        toast.error("something went wrong, try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const handleAuthChange = () => {
    dispatch({
      type: FORM_TYPES.SET_AUTH_TYPE,
      payload: state.type === "signin" ? "signup" : "signin",
    });
  };

  const buttonText = state.type === "signin" ? "Sign In" : "Sign up";
  const activateButton =
    state.type === "signin"
      ? !state.isError && state.email && state.password
      : !state.isError && state.email && state.password && state.repeatPassword;
  return (
    <Wrapper>
      <ToastContainer />
      <Form>
        <h3>{state.type === "signin" ? "Sign in" : "Sign up"} to Torrenium</h3>
        <div className="form-control">
          <TextInput
            placeholder="Your email"
            name="email"
            onInputChange={handleInputChange}
            type="email"
            value={state.email}
            validate={handleBlur}
            isError={state.emailError}
            errorMessage={state.emailErrorMessage}
          />
        </div>
        <div className="form-control">
          <TextInput
            placeholder="Your password"
            name="password"
            onInputChange={handleInputChange}
            type="password"
            value={state.password}
            validate={handleBlur}
            isError={state.passwordError}
            errorMessage={state.passwordErrorMessage}
          />
        </div>
        {state.type === "signup" ? (
          <div className="form-control">
            <TextInput
              placeholder="Repeat password"
              name="repeatPassword"
              onInputChange={handleInputChange}
              type="password"
              value={state.repeatPassword}
              validate={handleBlur}
              isError={state.repeatPasswordError}
              errorMessage={state.repeatPasswordErrorMessage}
            />
          </div>
        ) : (
          ""
        )}
        <div className="form-control-button">
          <Button
            disabled={!activateButton}
            text={buttonText}
            click={handleClick}
            bgColor="#CDDC39"
          />
        </div>
        <div className="info">
          <p>
            Don't have an account?{" "}
            <span className="sign-up" onClick={handleAuthChange}>
              {state.type === "signin" ? "Sign up" : "Sign In"}
            </span>
          </p>
        </div>
      </Form>
    </Wrapper>
  );
}

export default Auth;
