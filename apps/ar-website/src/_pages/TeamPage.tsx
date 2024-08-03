
import { Footer, Nav, TeamCard } from "../_components";
import { brandDarkText, brandSecondaryText } from "../_utils/colors";

const TeamPage = () => {
  return (
    <>
    <Nav/>
    <main
      className={`min-w-[100vw] lg:min-h-[93vh] min-h-[100vh] max-w-[1800px]
      flex flex-col items-center md:justify-center justify-between ${brandDarkText} 
      sm:px-[18px] px-[12px] pt-[9vh] lg:pb-[30px]`}
    >
      <h1
        className="uppercase tracking-wider font-medium leading-[51px]
      xl:text-[45px] text-[36px]"
      >
        Team
      </h1>
      <h3
        className="capitalize pb-6 tracking-wide text-center md:font-normal font-medium
      xl:text-[30px] md:text-[21px] text-[21px]"
      >
        Meet the amazing team behind{" "}
        <span className={`${brandSecondaryText} font-[Regular] tracking-wide`}>
          0rbit
        </span>
      </h3>
      <div className="lg:hidden grid grid-cols-2 md::gap-[30px] gap-[15px]">
        {" "}
        <TeamCard
          pname="megabyte"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/megabyte.png"
          github="https://github.com/megabyte0x"
          twitter="https://x.com/megabyte0x?t=WZYKcJAvN-CM7a6yU4lPNQ&s=09"
          info="Smart Contract Developer"
          last={false}
        />
        <TeamCard
          pname="lucifer"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/lucifer.png"
          github="https://github.com/Lucifer0x17"
          twitter="https://x.com/Lucifer0x17?t=fH5LRms3xy2hSPLJbNubaA&s=09"
          info="Backend and Infrastructure"
          last={false}
        />
      </div>
      <div
        className=" 
      lg:hidden
      grid grid-cols-3 md:gap-[30px] gap-[15px]
      items-center justify-center pb-[30px]"
      >
        <TeamCard
          pname="manishi"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/manishi.png"
          dribble="https://dribbble.com/0xManishi"
          twitter="https://x.com/0xManishi?t=FKn7XBJwlIXwJR-f4KGkzw&s=09"
          info="Designer"
          last={false}
        />
        <div className="lg:block hidden place-self-center">
          <TeamCard
            pname="megabyte"
            imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/megabyte.png"
            github="https://github.com/megabyte0x"
            twitter="https://x.com/megabyte0x?t=WZYKcJAvN-CM7a6yU4lPNQ&s=09"
            info="Smart Contract Developer"
            last={false}
          />
        </div>
        <TeamCard
          pname="lilith"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/lilith.png"
          github="https://github.com/0xLPircy"
          twitter="https://x.com/0xLPircy?t=Ppkfa4HmoEsfPMEeYJCisw&s=09"
          info="Frontend Developer"
          last={false}
        />
        <div className="lg:block hidden place-self-center">
          <TeamCard
            pname="lucifer"
            imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/lucifer.png"
            github="https://github.com/Lucifer0x17"
            twitter="https://x.com/Lucifer0x17?t=fH5LRms3xy2hSPLJbNubaA&s=09"
            info="Backend and Infrastructure"
            last={false}
          />
        </div>
        <TeamCard
          pname="sarthak"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/sarthak.png"
          github="https://github.com/Not-Sarthak"
          twitter="https://x.com/0xSarthak13?t=nvsUz9hxhq2hQO25wr8Rtw&s=09"
          info="Frontend Developer"
          last={true}
        />
      </div>
      <div
        className=" 
      xl:gap-6 
      lg:gap-[12px] lg:flex lg:flex-row
      hidden
      items-center justify-center"
      >
        <TeamCard
          pname="manishi"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/manishi.png"
          dribble="https://dribbble.com/0xManishi"
          twitter="https://x.com/0xManishi?t=FKn7XBJwlIXwJR-f4KGkzw&s=09"
          info="Designer"
          last={false}
        />
        <TeamCard
          pname="megabyte"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/megabyte.png"
          github="https://github.com/megabyte0x"
          twitter="https://x.com/megabyte0x?t=WZYKcJAvN-CM7a6yU4lPNQ&s=09"
          info="Smart Contract Developer"
          last={false}
        />
        <TeamCard
          pname="lilith"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/lilith.png"
          github="https://github.com/0xLPircy"
          twitter="https://x.com/0xLPircy?t=Ppkfa4HmoEsfPMEeYJCisw&s=09"
          info="Frontend Developer"
          last={false}
        />
        <TeamCard
          pname="lucifer"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/lucifer.png"
          github="https://github.com/Lucifer0x17"
          twitter="https://x.com/Lucifer0x17?t=fH5LRms3xy2hSPLJbNubaA&s=09"
          info="Backend and Infrastructure"
          last={false}
        />
        <TeamCard
          pname="sarthak"
          imag = "https://gfv7gmd2lhlcbm3hfxv4f6k4xhf325ibxo67juh3b2hnoakhfvoq.arweave.net/MWvzMHpZ1iCzZy3rwvlcucu9dQG7vfTQ-w6O1wFHLV0/team/sarthak.png"
          github="https://github.com/Not-Sarthak"
          twitter="https://x.com/0xSarthak13?t=nvsUz9hxhq2hQO25wr8Rtw&s=09"
          info="Frontend Developer"
          last={true}
        />
      </div>
      <Footer />
    </main>
    </>
  );
};

export default TeamPage;
