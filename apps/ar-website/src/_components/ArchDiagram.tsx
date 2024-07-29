

import { useEffect, useState } from "react";
import "../_styles/arch.css";

const ArchDiagram = () => {
  const [css, setCss] = useState(true);
  useEffect(() => {
    if (css) {
      setTimeout(() => {
        setCss(!css);
      }, 8000);
    } else {
      setTimeout(() => {
        setCss(!css);
      }, 100);
    }
  }, [css]);

  return (
    <div
      className={` flex item-center justify-center
      xl:scale-[0.85] lg:scale-[0.66] md:scale-[0.45] scale-[0.40]
      xl:mr-[0] lg:mr-[-90px] md:mr-[-150px]
      md:mt-0 
      min-w-[740px] min-h-[311px] lg:my-12 my-3`}
    >
      <>
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to1234.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr1" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to1234.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr2" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to1234.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr3" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to1234.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr4" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr5" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr6" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr7" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/to5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "ltr8" : ""
          }`}
        />
      </>
      <>
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from1.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl1" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from2.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl2" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from3.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl3" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from4.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl4" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl5" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl6" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl7" : ""
          }`}
        />
        <img
          src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/from5678.svg"
          alt="req"
          width={30}
          height={30}
          className={`w-[30px] h-[30px] absolute opacity-0 z-10 ${
            css ? "rtl8" : ""
          }`}
        />
      </>
      <img
        src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/arch/arch.svg"
        alt="architechture"
        height={420}
        width={990}
        className={`absolute w-[738px]`}
      />
      <img
        alt="logo"
        height={90}
        width={90}
        className=""
        src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/logos/sqLight.svg"
      />

    </div>
  );
};

export default ArchDiagram;
