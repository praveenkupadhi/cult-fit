import "./App.css";
// import { Home } from "./components/homePage/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { CultCenter } from "./components/cult/CultCenter";
import { Gyms } from "./components/cult/Gyms";
import { OnlinePT } from "./components/cult/OnlinePT";
import { CultSport } from "./components/cult/CultSport";
import { LuxuryGyms } from "./components/cult/LuxuryGyms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cult/gym" element={<CultCenter />} />
        <Route path="/cult/cult-pass" element={<Gyms />} />
        <Route path="/cult/online-personal-training" element={<OnlinePT />} />
        <Route path="/store/gear" element={<CultSport />} />
        <Route path="/cult/othergyms" element={<LuxuryGyms />} />
      </Routes>
    </div>
  );
}

export default App;
