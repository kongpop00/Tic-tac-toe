import { Route, Routes } from "react-router-dom";

import Home from "./view/Home";
import Game from "./view/Game";
import { GameProvider } from "./gameContext/GameContext";
import Gamedinamix from "./gameContext/gamedinamix";
function App() {
  return (
    <GameProvider>
      <Routes>
        <Route path="/dsfsdf" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Gamedinamix/>} />
      </Routes>
     
    </GameProvider>
  );
}

export default App;
