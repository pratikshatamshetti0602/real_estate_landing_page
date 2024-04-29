import React from "react";
import house from "../assets/img/house.png";
import MenuCard from "../layouts/MenuCard";
import Property from "../layouts/Property";

import { FaFlag } from "react-icons/fa";
const Menu = () => {
  return (
    <div className=" min-h-200vh flex flex-col justify-center lg:px-32 px-5 bg-white ">
      <h1 className=" font-medium  text-xl mt-3 mb-2">
       <FaFlag className="inline-block mr-2" /> Popular Landmarks
      </h1>
      <div className="w-full flex justify-center rounded-lg overflow-x-auto" >
          <div className="flex flex-nowrap width-full text-sm">
            
            <Property title=" Red Fort" />
            <div className="mr-2"></div>
            <Property title="   India Gate" />
            <div className="mr-2"></div>
            <Property title=" TajMahal" />
            <div className="mr-2"></div>
          </div>
        </div>
        <br/>
      < div className="w-full lg:w-1/3 bg-slate-100 p-3">
          <div className="  bg-blue-200  pb-2 mt-2 ml-2 mr-2 ">
          <h2 className="text-xl text-center font-bold">Zero Brokerage Properties</h2>
            <MenuCard img={house} paragraph="Upgrade to Premium and get access to Zero Brokerage Properties"/>
          </div>
          
          
          {/* Add your new container content here */}
            <div className="bg-blue-200 w-full pb-2  mt-4 ml-2 mr-2">
              <h2 className="text-medium text-center font-semibold mb-0">Post Your Property</h2>
            </div>
        
      </div>
      
      

      
      </div>
  );
};

export default Menu;

//flex-row absolute-right gap-3 mr-2



