"use client";
import React from "react";
import Content from "./Content";
import Reveal from "./Reaveal";
// import "../../styles/background.css";
import "../../styles/hero.css";

export default function HeroSection() {
  return (
    <div className="mb-10 md:mb-36 gradient-background w-screen sm:scale-150 sm:mt-52 -mt-50">
      <div className="justify-center space-x-20 items-center flex flex-col-reverse md:flex-row custom-margin-div">
        <div className="">
          <Content />
        </div>
        <Reveal>
          <div className="heroContainer1 text-center">
            <img
              src="/assets/images/77.png"
              alt="Hero"
              width={320}
              height={320}
              className="object-contain -translate-x-[40px] md:-translate-x-[15px] -ml-30"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
