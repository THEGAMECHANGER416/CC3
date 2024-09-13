import React from "react";
import teamData2 from "./team2"; // Import team data
import "../../styles/team.css"; // Import your custom CSS if needed
import { InfiniteMovingCards } from "../mentors/infinite-moving-cards";

const Mentors: React.FC = () => {
  const { mentors } = teamData2;

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <InfiniteMovingCards items={mentors} speed="fast" />
    </div>
  );
};

export default Mentors;
