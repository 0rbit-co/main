import { brandDarkBg, brandLightBg } from "../../_utils/colors";

const Hamburger = ({ isOpen }: any) => {
  return (
    <ul className="grid grid-flow-row gap-1 py-1">
      <li
        className={`py-[1.2px] px-3 ${
          isOpen ? brandLightBg : brandDarkBg
        } w-fit rounded-full`}
      ></li>
      <li
        className={`py-[1.2px] px-3 ${
          isOpen ? brandLightBg : brandDarkBg
        } w-fit rounded-full`}
      ></li>
      <li
        className={`py-[1.2px] px-3 ${
          isOpen ? brandLightBg : brandDarkBg
        } w-fit rounded-full`}
      ></li>
    </ul>
  );
};

export default Hamburger;
