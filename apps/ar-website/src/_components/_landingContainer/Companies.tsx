
import React, { useState, useEffect } from "react";
import bark from "/companies/bark.svg";
import betterIdea from "/companies/betterIdea.svg";
import ao from "/companies/ao.svg";
import arweave from "/companies/arweave.svg";

const Companies: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
    console.log(loaded);
  }, []);

  return (
    <section className="flex lg:gap-12 py-3 px-4 md:px-0 items-center justify-center">
      <a href="https://ao.arweave.dev/"
      target="_blank">
        <img
          src={ao}
          alt="AO"
          width={100}
          height={100}
          className="self-center place-self-center transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
        xl:w-[120px] xl:h-[120px] 
        md:w-[90px] md:h-[90px]
        w-[75px] h-[75px]"
        />
      </a>
      <a href="https://www.arweave.org/" target="_blank">
        <img
          src={arweave}
          alt="Arweave"
          width={220}
          height={220}
          className="self-center place-self-center transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
        xl:w-[240px] xl:h-[120px] 
        w-[180px] h-[90px]"
        />
      </a>
      <a href="https://ide.betteridea.dev/" target="_blank">
        <img
          src={betterIdea}
          alt="Better Idea"
          width={220}
          height={220}
          className="self-center place-self-center transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
        xl:w-[240px] xl:h-[120px]
        w-[150px] h-[90px]"
        />
      </a>
      <a href="https://bark.arweave.dev/" target="_blank">
        <img
          src={bark}
          alt="Bark"
          width={100}
          height={100}
          className="self-center place-self-center transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
        xl:w-[120px] xl:h-[120px] 
        md:w-[75px] md:h-[75px]
        w-[60px] h-[60px]"
        />
      </a>
    </section>
  );
};

export default Companies;
