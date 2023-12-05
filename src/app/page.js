import "@rainbow-me/rainbowkit/styles.css" 
import styles from'../app/page.module.css'
import Navbar from './Components/Navbar'
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main> 
       <ConnectButton />
      <Navbar/>
    </main>
  )
}
