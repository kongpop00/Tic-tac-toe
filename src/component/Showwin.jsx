import { React, useEffect, useState } from "react";
import { useGameContext } from "../gameContext/GameContext";
import "./game.css";
const Showwin = () => {
  const { gameWinX, gameWinO, player, handleBack, handlePlayagain, gametie } =
    useGameContext();

  //const [textwin, setTextwin] = useState("");
  let gamestie = "";
  let textwin = "";

  if (gametie) {
    if (!gameWinO && !gameWinX) {
      gamestie = "tie";
    }
  }

  if (player == "twoPlayer") {
    if (gameWinX) {
      textwin = "Player 1 win XXXXX";
    }
    if (gameWinO) {
      textwin = "Player2 win OOOOOO";
    }
  }

  if (player == "botPlayer") {
    if (gameWinX) {
      textwin = "Player 1 win XXXXX";
    }
    if (gameWinO) {
      textwin = "BOT Win===========";
    }
  }

  if (gamestie == "tie") {
    textwin = "tie=====================";
  }

  const stylebutton =
    "  text-[30px] w-[80%] h-[100%] bg-[#2b194d67] rounded-[14px] border-[1px]";

  useEffect(() => {
    console.log("hellow ============game win gametie", gametie);
  }, []);
  return (
    <div className="bg-[#000000ad] absolute w-[100%] h-[100%] top-0 flex z-40">
      <div className="bg-[#120c25cb] relative w-[40%] h-[40%] m-auto flex justify-center items-center">
        <div className="text-[40px] text-white font-mono font-[600] ">
          <div className="w-[100% ]  w-[100%]  flex flex-col h-[150px] mt-[30px] items-center gap-5">
            {textwin}
            <button
              onClick={handleBack}
              className={`${stylebutton} hover:bg-[#462249dc] hover:scale-110`}
            >
              Home
            </button>
            <button
              onClick={handlePlayagain}
              className={`  ${stylebutton} hover:bg-[#462249dc] hover:scale-110`}
            >
              Playa gain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showwin;
