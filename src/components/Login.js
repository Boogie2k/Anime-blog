import React from "react";

const Signup = () => {
  return (
    <form className="signup-form">
      <div>
        {" "}
        <span>Name</span> <input type="text" placeholder="Enter your name" />{" "}
      </div>

      <div>
        {" "}
        <span>Password</span>{" "}
        <input type="text" placeholder="Enter your password" />{" "}
      </div>

      <button> Log in</button>
    </form>
  );
};

export default Signup;
