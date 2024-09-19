import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import llama from "../../../public/quests/llama.svg";
import llamaSmall from "../../../public/quests/llamaSmall.svg";
import Image from 'next/image';
import { BsArrowUpRight } from "react-icons/bs";

const QuestForm: React.FC = () => {
  const [twitterLink, setTwitterLink] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [processId, setProcessId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  const SERVER_URL = 'https://test-w9xq.onrender.com/save-data';
  // const SERVER_URL = 'http://localhost:4000/save-data';

  const handleTwitterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTwitterLink(e.target.value);
  };

  const handleWalletChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotification('sec');
    setCountdown(45);

    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          twitterLink,
          walletAddress,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setApiResponse(data.apiResponse);
      setProcessId(data.processId);

      setTwitterLink('');
      setWalletAddress('');
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setNotification('Error submitting the data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (countdown && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }

    if (countdown === 0) {
      setNotification(null);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown]);

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="lg:w-[791px] h-[540px] relative lg:h-[400px] bg-[#e4e6dd] rounded-xl shadow-inner-strong p-8">
        <div className="lg:text-3xl font-bold font-raleway lg:leading-[28.91px] lg:tracking-widest h-[42.13px] text-[#45512a] text-2xl capitalize leading-tight tracking-wider">Submit your Mascot ideas now !!</div>
        <div className="w-full h-[0px] border border-[#45512a]/40 mb-4 mt-10 lg:mt-0"></div>
        <div>
          <ul className="list-disc pl-5 font-semibold text-[#45512A] pb-4">
            <li>Top 5 engaging tweets will receive <span className='text-[#D16D1B] font-jetbrains'>1000 $ORBT</span> Points each.</li>
            <li>Rest of the participants will share a pool of <span className='text-[#D16D1B] font-jetbrains'>3000 $ORBT</span> Points.</li>
          </ul>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3'>
            <div className="flex flex-col gap-2">
              <label className="text-[#45512a] text-md lg:text-xl font-medium font-raleway leading-tight">Your Tweet Link</label>
              <input
                type="text"
                value={twitterLink}
                onChange={handleTwitterChange}
                className="w-full lg:w-2/3 h-[29px] py-4 px-2 bg-[#45512a]/20 rounded border border-[#e1e3e6]"
                placeholder=""
                disabled={loading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#45512a] text-md lg:text-xl font-medium font-raleway leading-tight">Your Arweave Wallet Address</label>
              <input
                type="text"
                value={walletAddress}
                onChange={handleWalletChange}
                className="w-full lg:w-2/3 z-10 h-[29px] py-4 px-2 bg-[#45512a]/20 rounded border border-[#e1e3e6]"
                placeholder=""
                disabled={loading}
              />
            </div>
          </div>
          <button
            type="submit"
            className="min-w-24 max-w-28 px-2 py-0.5 bg-[#45512a] cursor-pointer hover:scale-95 transition-all rounded border border-[#e1e3e6] text-white"
            disabled={loading || !twitterLink || !walletAddress}
          >
            {loading ? <div className='flex items-center justify-center gap-2'>
              {countdown !== null && <span className="">{countdown}</span>}
              {notification}
            </div> : 'Submit'}
          </button>
        </div>
        <Image src={llamaSmall} className='absolute bottom-0 right-0 lg:hidden' alt='llama' />
        <Image src={llama} className='absolute bottom-0 right-0 hidden lg:flex' alt='llama' />
      </form>

      {processId && (
        <div className="fixed z-20 bottom-4 right-4 bg-[#45512a] text-[#e4e6dd] p-4 rounded shadow-lg">
          <p>Process created successfully!</p>
          <a
            href={`https://bazar.arweave.net/#/asset/${processId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex items-center gap-1"
          >
            View Atomic Asset <BsArrowUpRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default QuestForm;