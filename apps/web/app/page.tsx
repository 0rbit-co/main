// import Image from "next/image";
// import {
//   Architechture,
//   Companies,
//   Features,
//   Footer,
//   Hero,
//   Stats,
//   VideoContainer,
// } from "./_components";
// import CTABtn from "./_components/_landingContainer/CTABtn";
// import CardsContainerCustom from "./_components/_landingContainer/CardsContainerCustom";
// import { brandDarkText, brandLightBg } from "./_utils/colors";
// import loader from "../public/loader.svg";

// export const Loader = () => {
//   return (
//     <div className="flex items-center justify-center h-screen w-screen">
//       <Image src={loader} alt="Loading..." width={100} height={100} />
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <main
//       className={`flex flex-col items-center justify-between 
//       ${brandLightBg} ${brandDarkText} w-full justify-center`}
//     >
//       <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
//         <Hero />
//       </section>
//       <section className="snap h-screen flex flex-col items-center justify-center md:pt-9 md:py-0 pb-12 pt-6">
//         <Architechture />
//         <CTABtn />
//       </section>
//       <section className="snap min-h-screen h-[100vh] max-w-[100vw] flex flex-col items-center justify-center md:pt-20 md:pb-20">
//         <Features />
//       </section>
//       {/* <section className="snap md:pt-28 pt-20 flex flex-col items-center md:gap-28 gap-12"> */}
//       <section className="snap flex flex-col items-center md:gap-20 gap-6 md:pt-28 pt-12">
//         <Stats />
//         <CardsContainerCustom />
//       </section>
//       <section className="snap flex flex-col items-center md:gap-28 gap-6 md:pt-24 pt-12">
//         <VideoContainer />
//         <Companies />
//       </section>
//       {/* </section> */}
//       <div className="snap w-full flex items-end justify-center">
//         <Footer />
//       </div>
//     </main>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import {
  Architechture,
  Companies,
  Features,
  Footer,
  Hero,
  Stats,
  VideoContainer,
} from "./_components";
import CTABtn from "./_components/_landingContainer/CTABtn";
import CardsContainerCustom from "./_components/_landingContainer/CardsContainerCustom";
import { brandDarkText, brandLightBg } from "./_utils/colors";
import Loader from "./_components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main
      className={`flex flex-col items-center justify-between 
      ${brandLightBg} ${brandDarkText} w-full justify-center`}
    >
      <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
        <Hero />
      </section>
      <section className="snap h-screen flex flex-col items-center justify-center md:pt-9 md:py-0 pb-12 pt-6">
        <Architechture />
        <CTABtn />
      </section>
      <section className="snap min-h-screen h-[100vh] max-w-[100vw] flex flex-col items-center justify-center md:pt-20 md:pb-20">
        <Features />
      </section>
      <section className="snap flex flex-col items-center md:gap-20 gap-6 md:pt-28 pt-12">
        <Stats />
        <CardsContainerCustom />
      </section>
      <section className="snap flex flex-col items-center md:gap-28 gap-6 md:pt-24 pt-12">
        <VideoContainer />
        <Companies />
      </section>
      <div className="snap w-full flex items-end justify-center">
        <Footer />
      </div>
    </main>
  );
}
