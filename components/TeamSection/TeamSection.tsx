"use client";

import React, { useEffect } from "react";
import teamData from "./team";
import "../../styles/team.css";
import "../../styles/team/background.css";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Card from "./MemberTilt";

function TeamSection() {
  const [showTeam, setShowTeam] = useState("organizer");
  const [animate, setAnimate] = useState(false);

  const handleClick = (team: string) => {
    setAnimate(true);
    setShowTeam(team);
  };


  return (
    <>
      <div className="mt-36 sm:mt-40 w-screen">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo mt-40">
          Organizing Team
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={showTeam}
            className="flex flex-wrap justify-center items-center pt-20 gap-10 sm:px-20 lg:px-40"
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
          >
            {showTeam === "organizer" ? (
              <>
                <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                  {teamData.organizers.map((member, index) =>
                    index == 7 ? null : (
                      <motion.div
                        key={`${member.key}`}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        className="sponsor_css rounded-2xl"
                      >
                        <Card member={member} />
                      </motion.div>
                    )
                  )}
                </div>
              </>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default TeamSection;
