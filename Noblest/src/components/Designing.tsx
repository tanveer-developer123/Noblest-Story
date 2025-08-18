import React from "react";

import img1 from "../../public/Vector 1.png";
import img2 from "../../public/Vector 2.png";
import img3 from "../../public/Vector 3.png";
import img4 from "../../public/Vector 4.png";
import img5 from "../../public/Vector 5.png";

const Designing: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="relative w-[700px] h-[400px]">
        {/* 1 - Vertical bar */}
        <img
          src={img1}
          alt="vector 1"
          className="h-[480px] absolute left-0 top-0 w-auto"
        />

        {/* 2 - Diagonal */}
        <img
          src={img2}
          alt="vector 2"
          className="absolute left-[120px] top-[120px] h-full w-auto"
        />

        {/* 3 - Middle rectangle */}
        <img
          src={img3}
          alt="vector 3"
          className="absolute left-[320px] bottom-10 h-full w-auto"
        />

        {/* 4 - Top half circle */}
        <img
          src={img4}
          alt="vector 4"
          className="absolute left-[480px] top-[-40px] h-[250px] w-auto"
        />

        {/* 5 - Bottom half circle */}
        <img
          src={img5}
          alt="vector 5"
          className="absolute left-[480px] bottom-[-120px] h-[250px] w-auto"
        />
      </div> 
    </div>
  );
};

export default Designing;