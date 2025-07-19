import React from "react";
import { GoHome } from "react-icons/go";
import { ImSpotify } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { HiArchiveBox } from "react-icons/hi2";
import { MdOutlineDownloading } from "react-icons/md";
import { motion } from "motion/react";

function Navbar() {
  return (
    <div className="h-16 w-full bg-[#000000] px-4 flex justify-between ">
      <LeftSec />
      <RightSec />
    </div>
  );
}

export default Navbar;

function SearchInput() {
  return (
    <div className="h-12 w-[474px] px-2 flex items-center border-none rounded-4xl border-2 bg-[#2A2A2A]">
      <div className="h-full flex justify-center items-center w-fit mr-3">
        <CiSearch className="text-zinc-300 font-medium " size={30} />
      </div>
      <input
        placeholder="What do you want to play?"
        className="text-zinc-300 placeholder:text-zinc-200 caret-white outline-none w-full"
      />

      <div className="border-l border-r-0  border-t-0 border-b-0 border-l-zinc-300  flex  pl-3 pr-1">
        <button>
          <HiArchiveBox size={25} color="white" />
        </button>
      </div>
    </div>
  );
}

function LeftSec({ size = 30 }) {
  return (
    <div className="flex">
      <div className="flex gap-2.5 h-full  items-center w-fit">
        <ImSpotify className="text-white" size={size} />
      </div>

      <div className="h-full flex items-center ml-6 gap-2 ">
        <div className="size-12 rounded-full bg-[#2A2A2A] flex justify-center items-center ">
          <GoHome className="text-zinc-300" size={size} />
        </div>
        <SearchInput />
      </div>
    </div>
  );
}
function RightSec() {
  return (
    <div className="w-[580px] flex justify-between items-center h-full">
      <div className="flex gap-3 ">
        <Button title="Premium" />
        <Button title="Support" />
        <Button title="Download" />
      </div>

      <div className="h-6 w-[1px] bg-white"></div>

      <div className="flex gap-4 justify-center items-center ">
        <div className="flex justify-center items-center gap-2">
          <MdOutlineDownloading className="text-zinc-300" size={22} />
          <Button title="Install App" />
        </div>
        <Button title="Sign up" />
        <LoginButton />
      </div>
    </div>
  );
}

function Button({ title = "Unavailable" }) {
  return (
    <div>
      <motion.button
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.045,
          color: "white",
        }}
        whileTap={{
          scale: 0.97,
          color: "#B3B3B3",
        }}
        className="text-[#B3B3B3] cursor-pointer text-[15px] font-bold"
      >
        {title}
      </motion.button>
    </div>
  );
}

function LoginButton() {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.025,
        opacity: 0.9,
      }}
      whileTap={{
        scale: 0.97,
        opacity: 0.7,
      }}
      className="w-[108px] cursor-pointer font-bold h-12 bg-white rounded-4xl"
    >
      Log in
    </motion.button>
  );
}
