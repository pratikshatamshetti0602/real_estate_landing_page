import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";

const Review = () => {
  return (
    <div className="min-h-400vh flex flex-col justify-center lg:px-32 px-2  mt-0 bg-gradient-to-r from-[#812c2c] to-[#985050]  ">
      <h1 className="font-semibold text-white text-xl mt-5 ml-2">
        App Exclusive Properties
      </h1>
      <p className="font-regular text-sm text-white mt-0 mb-4 ml-2">
        New Properties Available only on the App
      </p>
      
      <div className="flex flex-row absolute-right mb-2 mt-4 gap-4 mr-0">
        <ReviewCard img={img1} title="Residential Plots" />
        <ReviewCard img={img2} title="Residential Plots" />
        {/* Add more ReviewCard components as needed */}
      </div>
    </div>
  );
};

export default Review;
