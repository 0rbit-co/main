import { Footer } from "../_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "0rbit | Quests",
  description: "Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL.",
};

const BlockExplorerLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}<Footer /></>;
};

export default BlockExplorerLayout;