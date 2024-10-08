

import React from "react";
import { brandDarkBg, brandDarkBorder, brandLightBg, brandLightText, brandSecondaryText } from "../../_utils/colors";

interface QuestProps {
  qname: string;
  imag: string;
  info: string;
  repo: string;
  submission: string;
  pts: string;
  last: boolean;
}

const QuestCard: React.FC<QuestProps> = ({
  qname,
  imag,
  info,
  repo,
  submission,
  pts,
  last,
}) => {
  return (
    <div
      className={`rounded-xl ${brandDarkBorder} ${brandDarkBg} border-[0.3px] ${brandLightText}
      ${
        last ? "md:col-span-2 md:place-self-center md:w-[50%]" : ""
      } hover:translate-y-[-24px]
      flex flex-col items-center justify-center xl:gap-5 lg:gap-[15px] md:gap-[10.5px] gap-[7.5px] text-center lg:w-[100%]
      xl:p-4 md:p-3 p-3`}
    >
      <div
        className={`${brandLightBg} w-full flex items-center justify-center rounded-md 
        shadow-[inset_0px_3.14px_3.9px_0px_rgba(0,_0,_0,_0.25),inset_0px_-3.14px_3.9px_0px_RGBA(0,_0,_0,_0.25)] 
        `}
      >
        <img
          src={imag}
          alt={qname}
          width={120}
          height={120}
          className="p-3 
          xl:w-[120px] xl:h-[120px]
          lg:w-[90px] lg:h-[90px]
          md:w-[90px] md:h-[90px]
          w-[75px] h-[75px]"
        />
      </div>
      <h2
        className="text-center font-semibold pb-[2px] 
      xl:text-[27px] xl:leading-[27px] 
      md:text-[21px] md:leading-[24px] "
      >
        {qname}
      </h2>
      <div
        className=" text-center font-normal tracking-wide
      xl:max-w-[240px] xl:text-[15px] xl:leading-[18px]
      md:max-w-[195px] md:text-[12px] md:leading-[12px]
      max-w-[150px] text-[9px] leading-[9px]"
      >
        {info}
      </div>
      <div
        className={`${brandSecondaryText} flex flex-row gap-1 items-center justify-center`}
      >
        <a
          href={repo}
          target="_blank"
          className="text-[18px] hover:underline flex flex-row items-center justify-center gap-1"
        >
          <div
            className={` ${brandSecondaryText} text-center xl:text-[15px] md:text-[12px] text-[10.5px] font-semibold`}
          >
            Check out the Repo
          </div>
          <img
            width={8}
            height={8}
            src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/icons/arrSecondary.svg"
            alt="arrow"
          />
        </a>
      </div>
      <div
        className={`${brandSecondaryText} font-[Medium] flex flex-row items-center w-full xl:text-[15px] lg:text-[12px] text-[10.5px]`}
      >
        {submission && (
          <a
          target="_blank"
            href={submission}
            className="hover:underline font-bold w-full text-start"
          >
            Submit PR
          </a>
        )}
        <a
        target="_blank"
          href="https://www.ao.link/entity/BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"
          className={` tracking-tighter xl:text-[18px] lg:text-[12px] md:text-[10.5px] font-bold w-full text-right hover:underline`}
        >
          +{pts} $0RBT
        </a>
      </div>
    </div>
  );
};

export default QuestCard;
