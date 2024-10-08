import { Footer } from "./_components";

const not_found = () => {
  return (
    <div className="relative min-w-full min-h-screen">
      <div className="bg-[#e3e5de] w-[100vw] min-h-screen text-black flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-10 lg:pt-6">
          <div className="text-center text-orange text-[87.13px] lg:text-[163.36px] font-medium font-[Regular] leading-[102.56px]">
            404
          </div>
          <div className="text-center font-semibold text-blackOlive text-[22px] lg:text-[26px]">
            <div>We’re sorry , the page you are </div>
            <div>looking for does’nt exist.</div>
          </div>
          <a href="/" target="_blank">
            <button className="text-white bg-[#2E3421] px-4 py-1 rounded-full font-semibold">
              Go Home
            </button>
          </a>
          <img src="https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/error/error.svg" width={600} height={600} alt="404" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default not_found;