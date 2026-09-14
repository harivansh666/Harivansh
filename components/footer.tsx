"use client";
import React from "react";
import Container from "./container";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <Container className="pb-10">
      <footer className="my-8 flex flex-col items-center gap-4">
        <Signature />
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-foreground/40 text-center text-sm text-balance">
            Built by yours truly.
          </p>
        </div>
      </footer>
    </Container>
  );
};

const Signature = () => {
  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 120"
      className="mx-auto h-8"
    >
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive"
        fontSize="72"
        stroke="currentColor"
        strokeWidth={1.5}
        fill="currentColor"
        strokeDasharray="1000"
        initial={{
          strokeDashoffset: 1000,
          fillOpacity: 0,
        }}
        whileInView={{
          strokeDashoffset: 0,
          fillOpacity: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          strokeDashoffset: { duration: 3, ease: "easeInOut" },
          fillOpacity: { duration: 1, delay: 2.5, ease: "easeInOut" },
        }}
      >
        Harivansh
      </motion.text>
    </motion.svg>
  );
};
