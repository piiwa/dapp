import React from "react";
import Head from 'next/head';
import { NextPage } from "next"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { YieldTable } from "@/components/YieldTable";
import { LLAMA_API_URL } from "@/constants/env";
import axios from "axios";

const HomePage: NextPage = () => {
  const [mounted, setMounted] = React.useState(false);
	const { isConnected } = useAccount();
  const [yieldsData, setYieldsData] = React.useState(null);

  async function fetchAPYData() {
    try {

      const allPools = await axios.get(`${LLAMA_API_URL}/pools`)

      const providersAPYData = allPools.data.data.filter((d: any) => d.symbol === 'USDC' && d.chain === 'Ethereum' && d.poolMeta === null && d.apyBase !== null)
      setYieldsData(providersAPYData);

    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    setMounted(true);
    fetchAPYData();
  }, []);

	return (
		<>
      <Head>
        <title>DApp</title>
        <meta name="description" content="Web3 App description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
      <main className="container mx-auto max-w-[840px] pt-6 sm:pt-28 px-4">

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 text-center items-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#bdd0fb] to-[#4c82fb]">
              Trade Crypto<br/>with confidence
            </h1>
            <p className="text-sm sm:text-xl font-medium">Discover the best yield for your stable coins and switch providers seamlessly with our intuitive application.
              Explore competitive APY rates and make your deposits with ease. </p>
            <div className="mt-3 sm:mt-6">
              <ConnectButton />
            </div>
          </div>

          {mounted && isConnected &&
            <div className="bg-[#0d111c] rounded-xl p-5">
              {yieldsData ? <YieldTable yields={yieldsData} /> : <p className="text-center">Loading...</p>}
            </div>
          }
        </div>

      </main>
		</>
	);
};

export default HomePage;