import "@rainbow-me/rainbowkit/styles.css" ;
import "./globals.css";
import { WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { createClient } from "viem";
import { mainnet, goerli } from 'viem/chains';




//Chains we are going to support
//"Connectors" for these chains
//wagmiclient

const {chains, provider} = configureChains(
  [mainnet, goerli], 
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "dblog",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
         <Component {...pageProps} />         
      </RainbowKitProvider>
    </WagmiConfig>   
  );
};

export default MyApp
