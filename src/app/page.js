import "@rainbow-me/rainbowkit/styles.css" ;
import "../app/globals.css";
import Navbar from './Components/Navbar';
import { configureChains } from "wagmi";

//Chains we are going to support
//"Connectors" for these chains
//wagmiclient

const {chains, provider} = configureChains

export default function Home() {
  return (
    <main> 

      <Navbar/>
    </main>
  )
}
