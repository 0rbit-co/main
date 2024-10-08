import React from "react";
import { PrismLoader } from "../";
import { useCodeStore } from "@/app/_store/store";
import CodeBlock from "./CodeBlock";
import {
  brandSecondaryBg,
  brandSecondaryBorder,
  brandSecondaryText,
} from "@/app/_utils/colors";
import Image from "next/image";

const NewsFeed = () => {
  const step1 =
    '_0RBIT = "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ"\n_0RBT_TOKEN = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"\n\nURL = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"\nFEE_AMOUNT = "1000000000000" -- 1 $0RBT\nNEWS = NEWS or {}';

  // const step2 =
  //   'TOKEN_PRICES = TOKEN_PRICES or {\n\tBTC = {\n\t\tcoingecko_id = "bitcoin",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t},\n\tETH = {\n\t\tcoingecko_id = "ethereum",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t},\n\tSOL = {\n\t\tcoingecko_id = "solana",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t}\n}\nID_TOKEN = ID_TOKEN or {\n\tbitcoin = "BTC",\n\tethereum = "ETH",\n\tsolana = "SOL"\n}\nLOGS = LOGS or {}';
  const step21 =
    'local json = require("json")\n\nHandlers.add(\n\t"GetNews",\n\tHandlers.utils.hasMatchingTag("Action", "Get-News"), \n\tfunction(msg)\n\t\tlocal news = json.encode(NEWS)\n\t\tHandlers.utils.reply(news)(msg)\n\tend\n)';
  const step22 =
    'Handlers.add(\n\t"FetchNews",\n\tHandlers.utils.hasMatchingTag("Action", "Fetch-News"),\n\tfunction()\n\t\tSend({\n\t\t\tTarget = _0RBT_TOKEN,\n\t\t\tAction = "Transfer",\n\t\t\tRecipient = _0RBIT,\n\t\t\tQuantity = FEE_AMOUNT,\n\t\t\t["X-Url"] = URL,\n\t\t\t["X-Action"] = "Get-Real-Data"\n\t\t})\n\t\tprint(Colors.green .. "GET Request sent to the 0rbit process.")\n\tend\n)';
  const step23 =
    'local json = require("json")\n\nHandlers.add(\n\t"ReceiveData",\n\tHandlers.utils.hasMatchingTag("Action", "Receive-Response"), \n\tfunction(msg)\n\t\tlocal res = json.decode(msg.Data)\n\t\tlocal articles;\n\t\tlocal article;\n\t\tif res.status == "ok" then\n\t\t\tarticles = res.articles;\n\t\t\tfor k, v in pairs(articles) do\n\t\t\t\tarticle =\n\t\t\t\t{\n\t\t\t\t\ttitle = v.title,\n\t\t\t\t\tdescription = v.description,\n\t\t\t\t\turl = v.url\n\t\t\t\t}\n\t\t\t\ttable.insert(NEWS, article)\n\t\t\tend\n\t\t\tprint("News Updated")\n\t\telse\n\t\t\tprint("Error in fetching news")\n\t\tend\n\tend\n)';
  const step3 =
    'Send({Target="BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc", Action="Balance"})';
  const step4 = 'Send({ Target = ao.id, Action="Fetch-News"})';
  const step5 = "NEWS";
  const checkInbox = "Inbox[#Inbox].Data";
  const setCurCode = useCodeStore((state) => state.changeCode);
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[42vh] overflow-scroll min-w-full flex flex-col gap-6">
      {" "}
      <div
        className={`${brandSecondaryBorder} border-[1px] px-[12px] py-[3px] rounded-lg bg-[#eb8f4479]
        flex flex-row gap-2 text-[13.5px]`}
      >
        {/* <Image src="/warn.jpg" alt="" height={30} width={30} /> */}
        <h2>
          Make sure the Process ID displayed on the right has atleast 1{" "}
          <span className=" font-[Regular]">$0RBT</span>. Learn how to add <span className=" font-[Regular]">$0RBT</span> to
          your wallet{" "}
          <a
            href="https://docs.0rbit.co/protocol/token/add-to-wallet"
            className="underline hover:underline-offset-[3px]"
          >
            here
          </a>
          .
        </h2>
      </div>
      {/* step1 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {" "}
          {">"} Step 1: Create variables!
        </h4>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          For <span className="font-[Regular] text-[13.5px]">0rbit's</span>{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            Process Id
          </span>
          ,{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            api URL
          </span>{" "}
          and to store incoming Data
        </p>
        <div className="flex flex-col items-center justify-center gap-[6px] min-w-full">
          <CodeBlock step={step1} />
          <div
            onClick={() => {
              tryItHandler(step1);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
      {/* Step2 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 2: Create Handlers
        </h4>
        {/* step 21 */}
        {/* <p className="text-[13.5px] leading-3 font-medium">Get News Handler</p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step21} />
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step21);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          The{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            GetNews
          </span>{" "}
          handler returns returns the news data from the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            NEWS
          </span>{" "}
          table and is called when a process wants the latest news.
        </p> */}
        {/* step22 */}
        <p className="text-[13.5px] leading-3 font-medium mt-5">
          Fetch News Handler
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step22} />
          <div
            onClick={() => {
              tryItHandler(step22);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          The{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            FetchNews
          </span>{" "}
          handler fetches the news from the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            URL
          </span>{" "}
          using <span className="font-[Regular] text-[13.5px]">0rbit's</span>{" "}
          Get-Real-Data handler and updates the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            NEWS
          </span>{" "}
          table.
        </p>
        {/* step23 */}
        <p className="text-[13.5px] leading-3 font-medium mt-5">
          Receive Data Handler
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step23} />
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step23);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          The{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            ReceiveData
          </span>{" "}
          handler is called when the{" "}
          <span className="font-[Regular] text-[13.5px]">0rbit</span> process
          sends the fetched data to the process.
        </p>
      </div>
      {/* step3 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 3: Fund your process
        </h4>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Transfer some{" "}
          <span className="font-[Regular] text-[13.5px]">$0RBT</span> to your
          processID. You can check how much{" "}
          <span className="font-[Regular] text-[13.5px]">$0RBT</span> you have
          using the following command:
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step3} />
          <div
            onClick={() => {
              tryItHandler(step3);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Wait a few seconds for the response and check your inbox using the
          below command to see your balance.
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={checkInbox} />
          <div
            onClick={() => {
              tryItHandler(checkInbox);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
      {/* step5 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 4: Fetch the News
        </h4>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step4} />
          <div
            onClick={() => {
              tryItHandler(step4);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
      {/* step6 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 5: Check the News
        </h4>
        <p className="text-[12px]">
          Make sure to wait 6-9 seconds for the response before executing below
          command.
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step5} />
          <div
            onClick={() => {
              tryItHandler(step5);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
