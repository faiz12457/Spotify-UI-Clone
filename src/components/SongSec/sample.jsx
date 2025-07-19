import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

function NetflixCarousel({ title }) {
  const [index, setIndex] = useState(0);
  const [imgPerPage, setImgPerPage] = useState(5);
  const [isResetting, setIsResetting] = useState(false);
  const padding = 5;
  const totalImages = 25;
  const totalPages = Math.ceil(totalImages / imgPerPage);

  useEffect(() => {
    if (index === totalPages) {
      const timer = setTimeout(() => {
        setIsResetting(true);
        setIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [index, totalPages]);

  useEffect(() => {
    if (isResetting) {
      setIsResetting(false);
    }
  }, [isResetting]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setImgPerPage(2);
      } else if (width < 768) {
        setImgPerPage(3);
      } else if (width < 1100) {
        setImgPerPage(4);
      } else {
        setImgPerPage(5);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick(action) {
    if (action === "left") {
      setIndex(index === 0 ? totalPages - 1 : index - 1);
    } else {
      //setIndex(index === totalPages - 1 ? 0 : index + 1);
      setIndex((prev) => prev + 1);
    }
  }

  const displayPage = index % totalPages;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between px-9">
        <div className="text-[#FFFFFF] text-xs lg:text-[1.2rem] md:[text-1.rem]   sm:[.9rem] font-medium">
          {title}
        </div>
        <ul className="list-none flex gap-0.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <li
              key={idx}
              className={`opacity-70 w-[12px] h-0.5 ${
                idx === displayPage ? "bg-white" : "bg-[#141414]"
              }`}
            ></li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden w-full flex justify-center">
        <Arrow
          handleClick={handleClick}
          action="left"
          className={`rounded-tr-sm rounded-br-sm ${
            index === 0 ? "invisible" : "flex"
          }`}
        >
          &#10092;
        </Arrow>
        <motion.div
          animate={{
            x: `-${index * 100}%`,
          }}
          transition={{
            duration: isResetting ? 0 : 0.5,
            ease: "easeInOut",
          }}
          className={`flex  mx-1  `}
          style={{ width: `100%` }}
        >
          {Array.from({ length: totalImages + imgPerPage }).map((_, idx) => {
            const realIdx = idx % totalImages;
            return (
              <img
                style={{ width: `calc(100%/${imgPerPage})` }}
                className="p-1 rounded-[8px]  aspect-video   shrink-0  grow-0  object-cover  "
                key={idx}
                src={`./img${realIdx + 1}.png`}
              />
            );
          })}
        </motion.div>
        <Arrow
          handleClick={handleClick}
          action="right"
          className={"rounded-tl-sm rounded-bl-sm"}
        >
          &#10093;
        </Arrow>
      </div>
    </div>
  );
}

export default NetflixCarousel;

function Arrow({ children, className, action, handleClick }) {
  return (
    <button
      onClick={() => handleClick(action)}
      className={` grow-0 shrink-0 text-[3rem] group  text-white p-1 flex justify-center items-center my-1 cursor-pointer bg-[rgba(20,20,20,0.25)] hover:bg-[rgba(20,20,20,0.5)]  z-10 ${className}`}
    >
      <div className="group-hover:scale-110  group-hover:opacity-100 opacity-0 transition">
        {children}
      </div>
    </button>
  );
}
