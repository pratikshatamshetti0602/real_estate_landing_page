import React from "react";
import Button from "../layouts/Button";
import Shapes from "../layouts/Shapes";



import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div className="min-h-140vh flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-40 px-10 gap-7 bg-[#ff8d8d]">
      <div className="w-full lg:w-2/4 space-y-2 mt-20 mb-2 lg:mt-0">
        <h1 className="font-semibold text-white text-2xl lg:text-3xl text-center  leading-tight">
          MILESTONO.COM
        </h1>
        <p className="text-center font-medium text-white text-1xl">
          Properties to Buy in your City
        </p>
        <div className="flex justify-center" >
          <div className="flex flex-row absolute-right gap-6 mr-4 ">
            <Button title="Real-Estate" />
            <Button title="Services" />
          </div>
        </div>
        {/* Boxes with horizontal scrolling */}
        <div className="flex justify-center mt-2" >
          <div className="flex flex-row absolute-right mt-2 gap-3 mr-2">
            <Shapes title="Buy" />
            <Shapes title="Rent" />
            <Shapes title="Commercial" />
            <Shapes title="Plots" />
            <Shapes title="Pg" />
          </div>
        </div> 
        <div className="rounded-full h-30 w-0 absolute top-1/4 right-2 z-0 bg-gradient-to-br from-white to-transparent"></div>

        <br/> 
        
          {/* Add more boxes as needed */}

         {/* Searchbar */}
         <div className="relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search Here.."
                className="border border-gray-300 rounded-full py-2 px-6 md:px-16 focus:outline-none w-full"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full">
                <AiOutlineSearch />
              </button>
            </div>
          </div>

        <br/>
        {/* End of Searchbar */}

        { /* Owner Free div tag is here*/ }
        <div className="w-full h-10  mb-8flex items-center justify-center gap-2">
          <h1 className="w-full text-sm text-center text-white -mb-0 font-medium bg-[rgba(108,108,108,0.5)] p-3 rounded">Are You Property Owner? then post it</h1>
        </div>

        
      </div>

      
    </div>
  );
};

export default Home;



{/*
      <div className="rounded-full h-20 w-20 absolute top-20 right-1 z-0 bg-gradient-to-br from-white to-transparent"></div>


 <div className="min-h-60vh flex  items-center justify-center lg:px-10 px-5 bg-white">
      <h1 className="font-semibold text-left text-sm lg:mt-14 mt-6 mb-4">
        Milestono is better on App
      </h1>

      <div className="rounded-full h-40 w-40   absolute bottom=1/3 right-1  z-0 bg-gradient-to-br from-white to-transparent"></div>
      <div className="rounded-full h-20 w-20 absolute bottom-1/2 right-1 z-0 bg-gradient-to-br from-white to-transparent"></div>

        <div className="flex flex-col gap-10">

<div className="relative">
        <img src={img} alt="img" /> */
      }
