import "@/styles/globals.scss";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { appInfo, useWagmi } from "@/services/wagmi";

function App({ Component, pageProps }: AppProps) {
  const { chains, wagmi } = useWagmi();

  return (
    <WagmiConfig client={wagmi}>
      <RainbowKitProvider appInfo={appInfo} chains={chains} modalSize="compact">
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
