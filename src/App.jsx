import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Banner from "./components/Banner"
import GetStarted from "./components/GetStarted"
import Contribute from "./components/Contribute"
import StayUpdated from "./components/StayUpdated"

function App() {

  return (
    < >
   <div className="bg-blue-950">
      <Navbar />
      <Hero />
      <Banner />
      <GetStarted />
      <Contribute />
      <StayUpdated />
   </div>

    </>
  )
}

export default App
