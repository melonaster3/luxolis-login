import React, { useState } from "react";
import "./style.css";
import { PopUp } from "./Popup/";
import { DummyPassword, DummyUserName, validateCredentials } from "../helper";
export function MainLayout(props) {
  const nextPage = props.nextPage;

  //Declare all states
  const [password, setPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [id, setID] = useState("");
  const [error, setError] = useState({
    password: false,
    combination: false,
    id: false,
  });

  //Close function for wrong password Modal
  const handleClose = () => {
    setShowPasswordModal(false);
    setError((prevState) => ({
      ...prevState,
      password: false,
    }));
  };

  //Open function for wrong password Modal
  const handleOpen = () => {
    setShowPasswordModal(true);
    setError((prevState) => ({
      ...prevState,
      password: true,
    }));
  };

  return (
    <>
      {
        //Only show if password is wrong
        showPasswordModal && (
          <div className="modal-container">
            <PopUp handleOpen={handleOpen} handleClose={handleClose} />
          </div>
        )
      }
      <div className="Main">
        <div>
          <img className="cart" src={"/cart.svg"} alt="Cart" />
        </div>
        <div className="inputsUserName">
          <img className="inputIcon" src={"/user.svg"} alt="user" />
          <input
            autocomplete="one-time-code"
            className="styleInput"
            onChange={(e) => {
              setID(e.target.value);
            }}
            placeholder="USERNAME"
          ></input>
        </div>
        <div className="inputsPassword">
          <img className="inputIcon" src={"/lock.svg"} alt="lock" />
          <input
            autocomplete="one-time-code"
            className="styleInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="PASSWORD"
          ></input>
        </div>
        {error.combination === true && (
          <div className="errorMessage">
            <p>Wrong Combination</p>
          </div>
        )}
        <div className="buttons">
          <button
            onClick={() => {
              validateCredentials(
                password,
                id,
                DummyPassword,
                DummyUserName,
                setError,
                nextPage,
                handleOpen
              );
            }}
            className="login"
          >
            LOGIN
          </button>
        </div>
        <div className="forgotLine">
          <p>Forgot password?</p>
        </div>
      </div>
    </>
  );
}
