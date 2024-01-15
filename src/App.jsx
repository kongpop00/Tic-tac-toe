import { Route, Routes } from "react-router-dom";

import Home from "./view/Home";
import Game from "./view/Game";
import { GameProvider } from "./gameContext/GameContext";
import { FilterconditionWinProvider } from "./gameContext/filterConditionWinGame";

function App() {

  return (

    <FilterconditionWinProvider>
      <GameProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </GameProvider>
      </FilterconditionWinProvider >
  );
}

export default App;
