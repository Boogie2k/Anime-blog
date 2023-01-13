import React from "react";

const Signup = () => {
  return (
    <form className="signup-form">
      <div>
        {" "}
        <span>Name</span> <input type="text" placeholder="Enter your email" />{" "}
      </div>

      <div>
        {" "}
        <span>Email </span> <input type="text" placeholder="Enter your email" />{" "}
      </div>
      <div>
        {" "}
        <span>Password</span>{" "}
        <input type="text" placeholder="Enter your email" />{" "}
      </div>

      <button> Sign up </button>
    </form>
  );
};

export default Signup;
