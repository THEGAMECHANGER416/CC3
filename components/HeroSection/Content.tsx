import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const Content: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("Devfolio SDK loaded and button initialized");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  const h1Variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "easeIn",
        duration: 1.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="content md:mt-24 mt-4 max-w-[400px] m-auto text-center flex flex-col justify-center items-center space-y-4 md:p-4 p-5"
      initial="hidden"
      animate="visible"
      variants={h1Variants}
    >
      <div>
        <motion.div className="" variants={childVariants} animate="visible">
          <motion.div
            variants={childVariants}
            className="md:text-3xl text-2xl text-white tracking-wider font-logo font-extrabold m-1 mb-2"
          >
            Code Cubicle 3.0
          </motion.div>
        </motion.div>
        <motion.p
          variants={childVariants}
          animate="visible"
          className="text-white max-w-[360px] font-poppins m-auto md:mt-4 mt-2 md:text-md"
        >
          Delhi’s Largest Coding Community brings you the 3rd edition of the Code Cubicle, the best coding experience in the town.
        </motion.p>
      </div>
      <motion.div
      >
      <div
          className="apply-button"
          data-hackathon-slug="code-cubicle-3"
          data-button-theme="dark"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </motion.div>
        
      <motion.div className="text-md text-white">
        <CountdownTimer />
      </motion.div>
    </motion.div>
  );
};

export default Content;
