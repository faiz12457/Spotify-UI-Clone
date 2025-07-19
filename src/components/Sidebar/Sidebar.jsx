import React from "react";
import { FaPlus } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { motion } from "motion/react";
function Sidebar() {
  return (
    <div className="w-[420px]  bg-[#121212] rounded-[12px]  pt-3 px-4  ">
      <div className="w-full h-[71px] bg-[#121212]">
        <div className="w-full flex justify-between items-center text-white ">
          <p className="font-bold">Your Library </p>
          <div className=" size-9 rounded-full hover:bg-[#1F1F1F] cursor-pointer flex justify-center items-center">
            <FaPlus className="text-zinc-400" size={22} />
          </div>
        </div>
      </div>

      <div className="w-full  h-[170px] pb-2 space-y-7 overflow-y-auto custom-scrollbar ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}

export default Sidebar;

function Card() {
  return (
    <div className="bg-[#1f1f1f] space-y-5 text-white px-5 pt-4 w-full h-[134px] rounded-[14px]">
      <div className="space-y-1">
        <p className="text-[1rem] font-bold">Create your first playlist</p>
        <p className="text-[14px] font-medium"> It's easy, we'll help you</p>
      </div>

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
        className="h-8 w-32 cursor-pointer flex justify-center items-center bg-white rounded-3xl text-black font-bold text-[14px]"
      >
        Create playlist
      </motion.button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full h-[202px]   flex  px-3 flex-col justify-evenly rounded">
      <div className="flex flex-wrap gap-4 w-[363px] ">
        <Button title="Legal" />
        <Button title="Safe & Privacy Center" />
        <Button title="Privicy Policy" />
        <Button title="Cookies" />
        <Button title="About Ads" />
        <Button title="Accessablity" />
      </div>
      <LanguageButton />
    </footer>
  );
}

function Button({ title = "Legal" }) {
  return (
    <button className="text-[#B3B3B3] cursor-pointer text-xs">{title}</button>
  );
}

function LanguageButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 1,
      }}
      className="flex w-[100px] cursor-pointer text-white text-[14px] px-4 py-4 justify-center items-center gap-2 font-bold h-8 rounded-3xl border border-[#2a2a2a] "
    >
      <span>
        <TbWorld className="text-white" size={22} />
      </span>{" "}
      English
    </motion.button>
  );
}
