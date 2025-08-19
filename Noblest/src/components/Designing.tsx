import React from "react";

import img1 from "../../public/Vector 1.png";
import img2 from "../../public/Vector 2.png";
import img3 from "../../public/Vector 3.png";
import img4 from "../../public/Vector 4.png";
import img5 from "../../public/Vector 5.png";

const Designing: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative w-[700px] h-[400px] fixed">
          {/* 1 - Vertical bar */}
          <img
            src={img1}
            alt="vector 1"
            className="h-[450px] absolute left-0 top-0 w-auto"
          />

          {/* 2 - Diagonal */}
          <img
            src={img2}
            alt="vector 2"
            className="absolute left-[100px] top-[100px] h-[350px] w-auto"
          />

          {/* 3 - Middle rectangle */}
          <img
            src={img3}
            alt="vector 3"
            className="absolute left-[280px] bottom-20 h-[350px] w-auto"
          />

          {/* 4 - Top half circle */}
          <img
            src={img4}
            alt="vector 4"
            className="absolute left-[420px] bottom-[180px] h-[250px] w-auto"
          />

          {/* 5 - Bottom half circle */}
          <img
            src={img5}
            alt="vector 5"
            className="absolute left-[420px] top-[210px] h-[250px] w-auto"
          />
        </div>
      </div>
      {/* Second Part */}
      <div className="my-[180px] mx-4 md:mx-10">
        {/* 1 - Left Image | Right Text */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-auto overflow-hidden">
            <img
              src={img1}
              alt="Vector 1"
              className="w-full h-auto md:h-[400px] object-cover"
            />
          </div>
          <div className="w-[400px] mt-6 md:mt-0 md:mr-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-serif font-light">PERSONAL DEV</h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit dolor quae corporis...
            </p>
          </div>
        </div>

        {/* 2 - Right Image | Left Text */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="relative w-full md:w-auto overflow-hidden">
            <img
              src={img2}
              alt="Vector 2"
              className="w-full h-auto md:h-[400px] object-cover"
            />
          </div>
          <div className="w-[400px] mt-6 md:mt-0 md:mr-6 text-center md:text-right">
            <h2 className="text-2xl md:text-4xl font-serif font-light">HEALTH</h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit dolor quae corporis...
            </p>
          </div>
        </div>

        {/* 3 - Left Image | Right Text */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-auto overflow-hidden">
            <img
              src={img3}
              alt="Vector 3"
              className="w-full h-auto md:h-[400px] object-cover"
            />
          </div>
          <div className="w-[400px] mt-6 md:mt-0 md:mr-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-serif font-light">SPIRITUALITY</h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit dolor quae corporis...
            </p>
          </div>
        </div>

        {/* 4 - Right Image | Left Text */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="relative w-full md:w-auto overflow-hidden">
            <img
              src={img4}
              alt="Vector 4"
              className="w-full h-auto md:h-[400px] object-cover"
            />
          </div>
          <div className="w-[400px] mt-6 md:mt-0 md:mr-6 text-center md:text-right">
            <h2 className="text-2xl md:text-4xl font-serif font-light">RELATIONSHIP</h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit dolor quae corporis...
            </p>
          </div>
        </div>

        {/* 5 - Left Image | Right Text */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-[300px] mt-6 md:mt-0 md:mr-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-serif font-light">FINANCE</h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit dolor quae corporis...
            </p>
          </div>
          <div className="relative w-full md:w-auto overflow-hidden">
            <img
              src={img5}
              alt="Vector 5"
              className="w-full h-auto md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>




    </>
  );
};

export default Designing;