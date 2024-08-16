import loader from "../../public/loader.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen pl-6 pt-12">
        <Image src={loader} alt="Loading..." width={120} height={120} />
    </div>
  );
};

export default Loader;