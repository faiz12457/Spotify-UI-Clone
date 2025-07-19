import React from "react";
import Carousel from "./Carousel";

function Songs() {
  return (
    <div className="w-full pt-4 h-[455px]  bg-[#121212] space-y-3 rounded-[14px] overflow-y-auto custom-scrollbar">
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default Songs;
