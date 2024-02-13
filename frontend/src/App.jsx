import { TopBar } from "./components/TopBar"
import { MidSection } from "./components/MidSection"
import { SocialSection } from "./components/SocialSection"
import { WhatIdo } from "./components/WhatIdo"

function App() {

  return (
    <div className="bg-black min-h-screen font-serif">
      <TopBar></TopBar>
      <MidSection></MidSection>
      <SocialSection></SocialSection>
      <WhatIdo></WhatIdo>
    </div>
  )
}

export default App
