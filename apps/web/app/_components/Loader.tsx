import loader from "../../public/loader.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
        <Image src={loader} alt="Loading..." width={200} height={200} />
    </div>
  );
};

export default Loader;