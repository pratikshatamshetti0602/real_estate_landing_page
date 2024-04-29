import React from "react";

const About = () => {
  return (
    <div className="max-w-screen w-full absolute min-h-60vh flex items-center justify-center lg:px-10 px-5 bg-white">
      <h1 className="font-semibold text-left text-sm lg:mt-14 mt-6 mb-4">
        Use Milestono App
      </h1>
      <br/>
      <p className="ml-1 text-center flex-row text-xs text-gray-500">1Cr+ <br/> Downloads </p>

      <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-5">
        <div className="w-full lg:w-2/4 p-1 ml-6 space-y-2">
          <div className="bg-red-300 border border-gray rounded-md p-3 text-white">
            Use The App
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
