import React, { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "motion/react";

function Carousel({ cardPerPage = 5, totalSongs = 15, scrollBy = 3 }) {
  const [index, setIndex] = useState(0);
  const totalPages = Math.ceil(totalSongs / cardPerPage);
  const maxIndex = totalSongs - cardPerPage;

  function handleNext() {
    setIndex((prev) => {
      const next = prev + scrollBy;
      return next <= maxIndex ? next : maxIndex;
    });
  }

  function handlePrev() {
    setIndex((prev) => {
      const next = prev - scrollBy;
      return next >= 0 ? next : 0;
    });
  }

  return (
    <div className="relative px-2 w-full   flex-col justify-center overflow-hidden  ">
      <div className=" p-3 flex justify-between">
        <a className="text-2xl font-bold text-white cursor-pointer hover:underline">
          Trending Songs
        </a>
        <a className="text-[14px] text-[#B3B3B3] hover:underline cursor-pointer font-bold">
          Show all
        </a>
      </div>
      <motion.div
        animate={{ x: `-${index * (100 / cardPerPage)}%` }}
        transition={{ type: "tween", duration: 0.5 }}
        className="flex gap-1  w-full "
      >
        {Array.from({ length: totalSongs }).map((_, i) => (
          <CarouselCard cardPerPage={cardPerPage} key={i} idx={i} />
        ))}
      </motion.div>

      <Arrow
        icon={<IoIosArrowForward />}
        isDisabled={index >= maxIndex}
        handleClick={handleNext}
        position={"right"}
        maxIndex={maxIndex}
      />
      <Arrow
        icon={<IoIosArrowBack />}
        handleClick={handlePrev}
        position={"left"}
        maxIndex={maxIndex}
        isDisabled={index == 0}
      />
    </div>
  );
}

export default Carousel;

function CarouselCard({ cardPerPage, idx }) {
  return (
    <div
      style={{
        width: `calc((100% - ${cardPerPage} * 0.25rem) / ${cardPerPage})`,
      }}
      className="h-fit  flex-col justify-center
          text-white shrink-0  p-3  hover:bg-[#1f1f1f] rounded-[8px] cursor-pointer"
    >
      <img
        src={`img${idx + 1}.jpg`}
        className="rounded w-full h-[140px] object-cover"
      />

      <p className="text-white font-medium mt-2">Sahiba</p>
      <a className="text-[14px] text-[#B3B3B3]">Aditiya Rikhari</a>
    </div>
  );
}

function Arrow({ icon, position, handleClick, maxIndex, isDisabled }) {
  return (
    !isDisabled && (
      <button
        disabled={isDisabled}
        onClick={handleClick}
        className={`size-8 absolute ${
          position === "left" ? "left-0" : "right-0"
        } 
        top-1/2 bg-[#1F1F1F] text-[#B3B3B3] rounded-full 
        flex justify-center items-center -translate-y-1/2  cursor-pointer `}
      >
        {icon}
      </button>
    )
  );
}
