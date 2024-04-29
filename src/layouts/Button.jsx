import React from "react";

const Button = (props) => {
  // Declare buttonClass and initialize it based on the condition
  let buttonClass = "";
  if (props.title === "Delhi , ListProperty") {
    buttonClass = "rounded-full";
  }
  

  return (
    <div>
      <button className={`px-5 py-1 text-white  ml-0 mr-1 bg-[rgba(108,108,108,0.5)] transition-all ${buttonClass}`}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
