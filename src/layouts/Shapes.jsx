import React from "react";

const Shapes = (props) => {
  return (
    <div>
      <shapes className="px-3 py-1 font-bold text-white bg-[rgba(108,108,108,0.5)] hover:text-[#fafafa] transition-all ">
        {props.title}
      </shapes>
    </div>
  );
};

export default Shapes;
