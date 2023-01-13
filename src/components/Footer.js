import React from "react";
import logo from "../Photos/Group 52.png";

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <article>
          <img src={logo} alt="" />
          <p>
            Gates is a blog that focuses on Japanese art and anime. They feature
            information on Otaku conventions and other anime topics. Hear from
            famous anime filmmakers and artists as well as plenty of news about
            the art of cartoon creation in the Japanese culture.
          </p>{" "}
        </article>

        <form>
          <button>Suscribe</button>
          <input type="text" placeholder="enter your email" />
        </form>
      </div>

      <hr />

      <p>@copyright 2021 Gates</p>
    </section>
  );
};

export default Footer;
