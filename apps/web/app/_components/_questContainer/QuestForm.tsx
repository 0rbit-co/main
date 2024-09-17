import { useState, ChangeEvent, FormEvent } from 'react';
import llama from "../../../public/quests/llama.svg"
import llamaSmall from "../../../public/quests/llamaSmall.svg"
import Image from 'next/image';

const QuestForm: React.FC = () => {
  const [twitterLink, setTwitterLink] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const SERVER_URL = 'https://test-w9xq.onrender.com/save-data';

  const handleTwitterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTwitterLink(e.target.value);
  };

  const handleWalletChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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

      setTwitterLink('');
      setWalletAddress('');
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="lg:w-[791px] h-[450px] relative lg:h-[361px] bg-[#e4e6dd] rounded-xl shadow-inner-strong p-8">
        <div className="lg:text-3xl font-bold font-raleway lg:leading-[28.91px] lg:tracking-widest h-[42.13px] text-[#45512a] text-2xl capitalize leading-tight tracking-wider">Submit your Mascot ideas now !!</div>
        <div className="w-full h-[0px] border border-[#45512a]/40 mb-4 mt-10 lg:mt-0"></div>
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
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        <Image src={llamaSmall} className='absolute bottom-0 right-0 lg:hidden' alt='llama' />
        <Image src={llama} className='absolute bottom-0 right-0 hidden lg:flex' alt='llama' />

      </form>

      {/* {apiResponse && (
                <div className="mt-6 bg-gray-100 p-4 rounded">
                    <h3 className="text-lg mb-2">API Response:</h3>
                    <pre className="whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
                </div>
            )} */}
    </div>
  );
};

export default QuestForm;