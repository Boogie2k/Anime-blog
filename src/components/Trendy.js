import React from "react";
import image1 from "../Photos/Rectangle 39.png";
import image2 from "../Photos/Rectangle 42.png";

const Trendy = () => {
  return (
    <section className="trendy">
      <h4>New and Trendy</h4>
      <div className="underline">
        <div></div>
      </div>{" "}
      <br />
      <article>
        <div>
          <img src={image1} alt="" />{" "}
          <article>
            <p>Fantasy · 1 Month Ago </p>

            <h4>Attack On Titans</h4>

            <p>
              The CSS Grid Layout Module offers a grid-based layout system, with
              rows and columns, making it easier to design web pages without
              having to use floats and positioning.
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
          <article>
            {" "}
            <p>Fantasy · 1 Month Ago </p>
            <h4>Attack On Titans</h4>
            <p>
              The CSS Grid Layout Module offers a grid-based layout system, with
              rows and columns, making it easier to design web pages without
              having to use floats and positioning.
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
          <img src={image2} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Trendy;
