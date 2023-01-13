import React from "react";
import intersect from "../Photos/Intersect.png";
import { useReducer } from "react";

const Hero = () => {
  let obje = {
    comedy: true,
    actions: false,
    drama: true,
    military: true,
    fantasy: true,
  };
  let reducer = (state, action) => {
    switch (action.type) {
      /*  case "ACTION":
        return {}; */

      case "COMEDY":
        return {
          ...state,
          comedy: false,
          actions: true,
          drama: true,
          military: true,
          fantasy: true,
        };

      case "ACTION":
        return {
          ...state,
          actions: false,
          comedy: true,

          drama: true,
          military: true,
          fantasy: true,
        };

      case "DRAMA":
        return {
          ...state,
          drama: false,
          comedy: true,
          actions: true,

          military: true,
          fantasy: true,
        };
      case "MILITARY":
        return {
          ...state,
          military: false,
          comedy: true,
          actions: true,
          drama: true,

          fantasy: true,
        };
      case "FANTASY":
        return {
          ...state,
          fantasy: false,
          comedy: true,
          actions: true,
          drama: true,
          military: true,
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
    dispatch({ type: "COMEDY" });
  }
  const [state, dispatch] = useReducer(
    reducer,
    /*  color: "blue", */

    obje
  );
  return (
    <section className="hero">
      <div>
        <h4>Welcome to Gates</h4>
        <p>
          Get the latest news on your favourite mangas, anime and manhwa around
          the world!
        </p>

        <article>
          <button>Suscribe</button>
          <input type="text" placeholder="enter your email" />
        </article>
      </div>

      <img src={intersect} alt="" />

      <section>
        <ul>
          <li
            style={{ listStyle: state.actions ? "none" : "circle" }}
            onClick={() => {
              dispatch({ type: "ACTION" });
            }}
          >
            Action
          </li>
          <li
            onClick={handleClicks}
            style={{ listStyle: state.comedy ? "none" : "circle" }}
          >
            {" "}
            comedy
          </li>
          <li
            style={{ listStyle: state.drama ? "none" : "circle" }}
            onClick={() => {
              dispatch({ type: "DRAMA" });
            }}
          >
            drama
          </li>
          <li
            style={{ listStyle: state.military ? "none" : "circle" }}
            onClick={() => {
              dispatch({ type: "MILITARY" });
            }}
          >
            military
          </li>
          <li
            style={{ listStyle: state.fantasy ? "none" : "circle" }}
            onClick={() => {
              dispatch({ type: "FANTASY" });
            }}
          >
            fantasy
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Hero;
