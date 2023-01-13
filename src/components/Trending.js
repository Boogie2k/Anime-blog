import React from "react";
import image1 from "../Photos/trend1.png";
import image2 from "../Photos/trend2.png";
import image3 from "../Photos/trend3.png";

import image11 from "../Photos/Rectangle 39.png";
import image22 from "../Photos/trend2.png";
import image33 from "../Photos/trend3.png";

import { useReducer } from "react";
import { Link } from "react-router-dom";
const Trending = () => {
  let obj = {
    slideOne: true,
    slideTwo: false,
    slideThree: false,
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case "RIGHT_ONE":
        return { ...state, slideOne: false, slideTwo: true };
      case "LEFT_ONE":
        return { ...state, slideOne: true, slideTwo: false };
    }
  };

  const [state, dispatch] = useReducer(reducer, obj);

  return (
    <section className="trending">
      <section>
        <h4>Now Trending</h4>
        <article>
          <svg
            style={{ opacity: state.slideOne ? "0.3" : "initial" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              dispatch({ type: "LEFT_ONE" });
            }}
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>{" "}
          <svg
            style={{ opacity: state.slideTwo ? "0.3" : "initial" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
            onClick={() => {
              dispatch({ type: "RIGHT_ONE" });
            }}
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>{" "}
        </article>
      </section>
      <div className="underline">
        <div style={{ width: state.slideOne ? "5%" : "50%" }}></div>
      </div>{" "}
      {state.slideOne && (
        <article>
          <div>
            <img src={image1} alt="" />
            <article>
              <p>Fantasy · 1 Month Ago </p>

              <h4>Attack On Titans</h4>

              <p>
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without having to use floats and positioning.
              </p>

              <p>
                12 Min Read{" "}
                <span>
                  {/*  <Link to="/blog"> */} Read Full{" "}
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_110)">
                      <path
                        d="M6.53906 14.7229H23.1957"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 19.4819L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 9.96387L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_110">
                        <rect
                          width="28.5542"
                          height="28.5542"
                          fill="white"
                          transform="translate(0.590332 0.445786)"
                        />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  {/*     </Link> */}
                </span>
              </p>
            </article>
          </div>

          <div>
            <img src={image2} alt="" />
            <article>
              <p>Fantasy · 1 Month Ago </p>

              <h4>Attack On Titans</h4>

              <p>
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without having to use floats and positioning.
              </p>

              <p>
                12 Min Read{" "}
                <span>
                  Read Full{" "}
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_110)">
                      <path
                        d="M6.53906 14.7229H23.1957"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 19.4819L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 9.96387L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_110">
                        <rect
                          width="28.5542"
                          height="28.5542"
                          fill="white"
                          transform="translate(0.590332 0.445786)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </article>
          </div>

          <div>
            <img src={image3} alt="" />
            <article>
              <p>Fantasy · 1 Month Ago </p>

              <h4>Attack On Titans</h4>

              <p>
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without having to use floats and positioning.
              </p>

              <p>
                12 Min Read{" "}
                <span>
                  Read Full{" "}
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_110)">
                      <path
                        d="M6.53906 14.7229H23.1957"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 19.4819L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 9.96387L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_110">
                        <rect
                          width="28.5542"
                          height="28.5542"
                          fill="white"
                          transform="translate(0.590332 0.445786)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </article>
          </div>
        </article>
      )}
      {state.slideTwo && (
        <article>
          {" "}
          <div>
            <img src={image2} alt="" />
            <article>
              <p>Fantasy · 1 Month Ago </p>

              <h4>Attack On Titans</h4>

              <p>
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without having to use floats and positioning.
              </p>

              <p>
                12 Min Read{" "}
                <span>
                  Read Full{" "}
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_110)">
                      <path
                        d="M6.53906 14.7229H23.1957"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 19.4819L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 9.96387L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_110">
                        <rect
                          width="28.5542"
                          height="28.5542"
                          fill="white"
                          transform="translate(0.590332 0.445786)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </article>
          </div>
          <div>
            <img src={image3} alt="" />
            <article>
              <p>Fantasy · 1 Month Ago </p>

              <h4>Attack On Titans</h4>

              <p>
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without having to use floats and positioning.
              </p>

              <p>
                12 Min Read{" "}
                <span>
                  Read Full{" "}
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_110)">
                      <path
                        d="M6.53906 14.7229H23.1957"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 19.4819L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 9.96387L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_110">
                        <rect
                          width="28.5542"
                          height="28.5542"
                          fill="white"
                          transform="translate(0.590332 0.445786)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </article>
          </div>
          <div>
            <img src={image1} alt="" />
            <article>
              <p>Fantasy · 1 Month Ago </p>

              <h4>Attack On Titans</h4>

              <p>
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without having to use floats and positioning.
              </p>

              <p>
                12 Min Read{" "}
                <span>
                  Read Full{" "}
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_110)">
                      <path
                        d="M6.53906 14.7229H23.1957"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 19.4819L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4368 9.96387L23.1958 14.7229"
                        stroke="#313131"
                        stroke-width="1.78464"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_110">
                        <rect
                          width="28.5542"
                          height="28.5542"
                          fill="white"
                          transform="translate(0.590332 0.445786)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </article>
          </div>
        </article>
      )}
    </section>
  );
};

export default Trending;
