'use client';

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";

const bounceAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};


export default function ScrollIndicator() {

    const [orientation, setOrientation] = useState(true);

    return (
      <motion.div animate={bounceAnimation} className="fixed bottom-5 w-full flex justify-center items-center z-">
        <Image 
          src={orientation ? "/graphics/scrollindicator.svg" : "/graphics/scrollindicator-rot.svg"}
          alt="scroll-indicator" 
          width={50} 
          height={50} 
          onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" })}
          onMouseOver={() => setOrientation(false)}
          onMouseOut={() => setOrientation(true)}
        />
      </motion.div>
    );
}