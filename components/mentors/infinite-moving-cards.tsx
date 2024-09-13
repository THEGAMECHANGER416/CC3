"use client";

import { cn } from "@/utils/lib";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/TeamSection/MemberTilt";
import "./style.css";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    linkedin: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone items to create the loop effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setAnimationProperties();
    }
  }, []);

  function setAnimationProperties() {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      const animationDuration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

      containerRef.current.style.setProperty(
        "--animation-duration",
        animationDuration
      );
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  }

  return (
    <div className="slider-container">
      <div className="feature-container">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="feature-box">
            <Card member={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
