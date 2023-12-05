import "@rainbow-me/rainbowkit/styles.css" ;
import "../styles/globals.css";
import { chain, WagmiConfig, configureChains } from "wagmi";
import { publicProvider} from "wagni/providers/public";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { createClient } from "viem";

//Chains we are going to support
//"Connectors" for these chains
//wagmiclient

const {chains, provider} = configureChains([
  chain.mainnet, chain.sepolia
], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "dblog",
  chains,
});

const wagmiclient = createClient({
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
}

export default MyApp
