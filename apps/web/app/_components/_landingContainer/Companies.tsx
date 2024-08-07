"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import bark from "../../../public/companies/bark.svg";
import betterIdea from "../../../public/companies/betterIdea.svg";
import ao from "../../../public/companies/ao.svg";
import arweave from "../../../public/companies/arweave.svg";
import outcome from "../../../public/companies/outcome.svg";
import decentraMind from "../../../public/companies/decentraMind.svg";
import community from "../../../public/companies/community-labs.svg";
import onairos from "../../../public/companies/onairos.svg";
import typr from "../../../public/companies/typr.svg";
import astro from "../../../public/companies/astro.svg";

const Companies: React.FC = () => {
  const logos = [
    { src: bark, alt: "logo_acme", width: 56, height: 56 },
    { src: betterIdea, alt: "logo_apex", width: 140, height: 140 },
    { src: ao, alt: "logo_celestial", width: 56, height: 56 },
    { src: arweave, alt: "logo_echo", width: 140, height: 140 },
    { src: outcome, alt: "logo_pulse", width: 140, height: 140 },
    { src: decentraMind, alt: "logo_quantum", width: 140, height: 140 },
    { src: community, alt: "logo_community", width: 140, height: 140 },
    { src: onairos, alt: "logo_onairos", width: 140, height: 140 },
    { src: typr, alt: "logo_typr", width: 72, height: 72 },
    { src: bark, alt: "logo_acme", width: 56, height: 56 },
    { src: betterIdea, alt: "logo_apex", width: 140, height: 140 },
    { src: ao, alt: "logo_celestial", width: 56, height: 56 },
    { src: arweave, alt: "logo_echo", width: 140, height: 140 },
    { src: outcome, alt: "logo_pulse", width: 140, height: 140 },
    { src: decentraMind, alt: "logo_quantum", width: 140, height: 140 },
    { src: community, alt: "logo_community", width: 140, height: 140 },
    { src: onairos, alt: "logo_onairos", width: 140, height: 140 },
    { src: typr, alt: "logo_typr", width: 72, height: 72 },
    { src: bark, alt: "logo_acme", width: 56, height: 56 },
    { src: betterIdea, alt: "logo_apex", width: 140, height: 140 },
    { src: ao, alt: "logo_celestial", width: 56, height: 56 },
    { src: arweave, alt: "logo_echo", width: 140, height: 140 },
    { src: outcome, alt: "logo_pulse", width: 140, height: 140 },
    { src: decentraMind, alt: "logo_quantum", width: 140, height: 140 },
    { src: community, alt: "logo_community", width: 140, height: 140 },
    { src: onairos, alt: "logo_onairos", width: 140, height: 140 },
    { src: typr, alt: "logo_typr", width: 72, height: 72 },
    { src: astro, alt: "astro", width: 100, height: 100 },
  ];

  return (
    <section className="flex lg:gap-12 py-3 pb-20 px-4 md:px-0 items-center justify-center">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-[300px] lg:w-[1200px]">
          <motion.div
            className="flex gap-14 flex-none items-center justify-center"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: logos.length * 5,
                ease: "linear",
              },
            }}
            style={{ width: `calc(200% + ${logos.length * 56}px)` }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            ))}
          </motion.div>
        </div>
    </section>
  );
};

export default Companies;
