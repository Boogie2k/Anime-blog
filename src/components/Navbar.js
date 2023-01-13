import React from "react";
import logo from "../Photos/Logo.png";
import { useReducer } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let obje = {
    home: false,
    connect: true,
    signup: true,
    login: true,
  };
  let reducer = (state, action) => {
    switch (action.type) {
      /*  case "ACTION":
        return {}; */

      case "HOME":
        return {
          ...state,
          home: false,
          connect: true,
          signup: true,
          login: true,
        };

      case "CONNECT":
        return {
          ...state,
          home: true,
          connect: false,
          signup: true,
          login: true,
        };

      case "SIGNUP":
        return {
          ...state,
          home: true,
          connect: true,
          signup: false,
          login: true,
        };
      case "LOGIN":
        return {
          ...state,
          home: true,
          connect: true,
          signup: true,
          login: false,
        };

      default:
        return state;
    }
  };
  /* 
  function handleClick() {
    dispatch({ type: "ACTION", color: "red" });
  }
 */

  function handleClicks() {
    dispatch({ type: "CONNECT" });
  }
  const [state, dispatch] = useReducer(
    reducer,
    /*  color: "blue", */

    obje
  );

  return (
    <nav>
      <img src={logo} alt="" />

      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              dispatch({ type: "HOME" });
            }}
            style={{
              borderBottom: state.home ? "initial" : "3px solid black",
            }}
          >
            Home
          </Link>
        </li>
        <li
          onClick={handleClicks}
          style={{
            borderBottom: state.connect ? "initial" : "3px solid black",
          }}
        >
          <a href="#">Connect</a>
        </li>

        <li
          style={{
            background: "black",
            color: "white",
            width: "86px",
            height: " 27px",
          }}
        >
          <Link
            to="/signup"
            onClick={() => {
              dispatch({ type: "SIGNUP" });
            }}
            style={{
              background: "black",
              color: "white",
              width: "860px",
              height: " 27px",

              borderBottom: state.signup ? "initial" : "3px solid black",
            }}
          >
            Sign up
          </Link>
        </li>

        <li
          onClick={() => {
            dispatch({ type: "LOGIN" });
          }}
          style={{
            borderBottom: state.login ? "initial" : "3px solid black",
          }}
        >
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
