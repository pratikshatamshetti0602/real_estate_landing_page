import React from "react";
import ProductCard from "../layouts/ProductCard";
import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";
import { FaArrowRight } from "react-icons/fa";


const Product = () => {
  return (
<div className="h-[500px]  flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r bg-red-500 to-red-100 transparent-all">
      <h1 className="font-semibold text-white text-xl mt-0 ">
        Home Related Services
      </h1>
      <p className="font-regular rounded-md text-sm text-white mt-0 mb-0">
        Win up-to 3% in Reward
      </p>
      
      <div className="flex justify-center flex-row absolute-right mb-4 gap-10 mr-0">
        <ProductCard
          title="Pay on Credit"
          paragraph="Pay your rent with Credit Card"
        />
        <ProductCard
          title="Personal Loan"
          paragraph="Get instant loans upto 20 Lakhs"
        />
      </div> 
     


     
      <div className=" flex mb-4 justify-between bg-white"></div>
      
      <div className="flex justify-between gap-4  bg-white">
        <ProductCard
          title="Line of Credit"
          paragraph=""
          borderClass="border-gray-300 border-solid border-2 rounded-md  ml-2"
          image={img1}
        />
        <ProductCard
          title="Milestone Premium"
          paragraph=""
          borderClass="border-gray-300 border-solid border-2 rounded-md   "
          image={img2}
        />
        <ProductCard
          title="Home Interiors"
          paragraph=""
          borderClass="border-gray-400 border-solid border-2 rounded-full mr-2"
          image={img3}
        />

      </div>
      <div className="flex  items-center mt-4 underline">
        <h2 className="font-semibold text-lg">Explore All Services ( +7 More )</h2>
        <FaArrowRight className="text-xl ml-2" />
      </div>
      


    </div>
  );
};

export default Product;