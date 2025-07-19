import React from 'react'
import { motion } from "motion/react"
function Preview() {
  return (
      <div className="px-2 pb-2">
      <div
        style={{
          background: "linear-gradient(to right, #af2896, #509bf5)",
        }}
        className="w-full h-16 px-4 flex justify-between items-center "
      >
        <div>
          <p className="font-bold text-white text-[14px]">Preview of Spotify</p>
          <p className="text-white text-[16px] font-medium">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed
          </p>
        </div>

        <SignUp />
      </div>
    </div>
  )
}

export default Preview

function SignUp() {
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
      className="w-[140px] cursor-pointer font-bold h-12 bg-white rounded-4xl"
    >
      Sign up free
    </motion.button>
  );
}
