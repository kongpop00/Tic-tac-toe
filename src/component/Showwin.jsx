import { React, useEffect } from "react";
import { useGameContext } from "../gameContext/GameContext";
import "./game.css";
const Showwin = () => {
  const { gameWinX, gameWinO, player, handleBack, handlePlayagain, gametie } =
    useGameContext();

  //const [textwin, setTextwin] = useState("");
  let gamestie = "";
  let textwin = "";
  let cruurentwin = ""

  if (gametie) {
    if (!gameWinO && !gameWinX) {
      gamestie = "tie";
    }
  }

  if (player == "twoPlayer") {
    if (gameWinX) {
      textwin = "PLAYER 1 WINNER ";
      cruurentwin='X'
    }
    if (gameWinO) {
      textwin = "PLAYER 2 WINNER ";
      cruurentwin='O'
    }
  }

  if (player == "botPlayer") {
    if (gameWinX) {
      textwin = "PLAYER 1 WINNER ";
      cruurentwin='X'
    }
    if (gameWinO) {
      textwin = "BOT WINNER";
      cruurentwin='O'
    }
  }

  if (gamestie == "tie") {
    cruurentwin='XO'
    textwin = "DRAW!";
  }

  const stylebutton =
    "  text-[30px] p-[5px] w-[100%]   md:w-[70%] lg:w-[60%] bg-[#2b194d67] rounded-[14px] border-[1px]";

  useEffect(() => {
    console.log("hellow ============game win gametie", gametie);
  }, []);
  return (
    <div className= " bg-[#000000d2] absolute w-[100%] h-[100%] top-0 flex z-40 font-semibold">
      <div className="box4 bg-[#120c25cb] relative w-[70%] h-[60%] lg:h-[50%]  lg:mt-[150px] xl:w-[50%] xl:h-[60%] m-auto flex  justify-center">
        <div className="text-[40px] text-white font-mono font-[600] w-[70%]">
          <div className="w-[100% ]  w-[100%]  flex flex-col h-[150px]  items-center gap-5">
          
          <div className={`text-[70px] md:text-[100px] lg:text-[120px] mt-[50px] ${cruurentwin=="X" ?'textX': 'textO'} `}> {cruurentwin}</div> 
          <div className="text-[30px] md:text-[50px] md:p-[20px] xl:text-[70px]"> {textwin}</div> 
        
            <button
              onClick={handleBack}
              className={`${stylebutton} hover:bg-[#462249dc]   hover:scale-110`}
            >
              Home
            </button>
            <button
              onClick={handlePlayagain}
              className={`  ${stylebutton} hover:bg-[#462249dc]   hover:scale-110`}
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
