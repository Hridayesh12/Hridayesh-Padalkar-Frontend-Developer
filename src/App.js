import Capsules from "./components/Capsules";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Rockets from "./components/Rockets";

export default function App() {
  return (
    <div className="h-[100%] bg-black text-white">
      <Navbar />
      <LandingPage />
      <div className="h-[7px] bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end"></div>
      <Capsules />
      <Rockets />
    </div>
  )
}