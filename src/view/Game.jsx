import React, { useEffect, useState } from "react";
import "../component/game.css";
import { useGameContext } from "../gameContext/GameContext";
import { usefilterconditionWinContext } from "../gameContext/filterConditionWinGame";
import {  useNavigate } from "react-router-dom";
const Game = () => {

  
  const { Draw, data ,gameWinX , gameWinO } = useGameContext();
  const { times } = usefilterconditionWinContext();
  const [win , setwin]=useState(false)
  const navigate = useNavigate();
  const handleBack = ()=>{
    navigate('/')
    window.location.reload();
  }
  
  
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
  useEffect(()=>{
  
   console.log('=========================gameX',gameWinX);
   console.log('=========================gameO',gameWinO);
 },[gameWinX,gameWinO])
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
      <button onClick={handleBack} className="  absolute left-[100px] top-[100px] w-[80px] h-[80px] rounded-full bg-[#8d5ed8d3] hover:bg-[#9f90b6ee] ">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 m-[auto] font-[600] text-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="bg">kdsdsfks;lk</div>
    </div>
  );
};

export default Game;
