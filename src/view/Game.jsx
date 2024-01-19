import React, { useEffect, useState } from "react";
import "../component/game.css";
import { useGameContext } from "../gameContext/GameContext";
import { usefilterconditionWinContext } from "../gameContext/filterConditionWinGame";

const Game = () => {
  const { Draw, data } = useGameContext();
  const { times } = usefilterconditionWinContext();
 

  const colorVariants = {
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
  };
  

  return (
    <div className="bg-[url(public/bg-game.png)] w-full h-[100vh] flex flex-col items-center justify-center md:justify-start bg-center bg-cover ">
      <div
        className={` grid ${colorVariants[times]} max-w-7xl w-[350px] h-[350px] md:w-[750px] md:h-[750px] mt-[40px]  gap-3`}
      >
        {data.map((e, i) => {
          return (
            <div key={i}>
              <div onClick={() => Draw(i)} className="box">
                <div className={`text ${e === "X" ? "textX" : "textO"}`}>
                  {e}
                </div>
              </div>
            </div>
          );
        })}

       
      </div>
      <div className="flex flex-col md:flex-row md:gap-[200px] lg:gap-[260px] ">
        <div className="player player-1 w-[180px] border-2 mt-[20px] flex justify-center items-center font-[500] text-[25px] h-[50px] md:h-[60px] bg-[#121213] rounded-[20px] text-white">
          Player 1 : X
        </div>
        <div className="player playper-2 w-[180px] border-2 mt-[20px] flex justify-center items-center font-[500] text-[25px] h-[50px] md:h-[60px] bg-[#121213] rounded-[20px] text-white">
          Player 2 : O
        </div>
      </div>
    </div>
  );
};

export default Game;
