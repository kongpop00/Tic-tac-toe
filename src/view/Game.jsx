import React, { useEffect } from "react";
import "../component/game.css";
import { useGameContext } from "../gameContext/GameContext";
import { usefilterconditionWinContext } from "../gameContext/filterConditionWinGame";
import Showwin from "../component/Showwin";


const Game = () => {

  
  const { Draw, data ,gameWinX , gameWinO ,handleBack ,gametie} = useGameContext();
  const { times } = usefilterconditionWinContext();
  

  

  const colorVariantsAndTextsize = {
    3: "grid-cols-3 gap-1 text-[100px] md:text-[200px]",
    4: "grid-cols-4 gap-1 text-[80px] md:text-[160px]",
    5: "grid-cols-5 gap-1 text-[60px] md:text-[140px]",
    6: "grid-cols-6  text-[50px]  md:text-[120px]",
    7: "grid-cols-7  text-[40px]  md:text-[100px]",
    8: "grid-cols-8   text-[30px]  md:text-[80px]",
    9: "grid-cols-9  text-[25px]  md:text-[80px]",
    10: "grid-cols-10   text-[20px]  md:text-[70px]",
  };

  
 

  

  useEffect(()=>{
  
   console.log('=========================gameX',gameWinX);
   console.log('=========================gameO',gameWinO);
   console.log('data',data);
  
 },[gameWinX,gameWinO,data])
  return (
    <div className="bg-[url(public/bg-game.png)] w-full h-[100vh] flex flex-col items-center justify-center md:justify-start bg-center bg-cover ">
      <div
        className={` grid ${colorVariantsAndTextsize[times]} max-w-7xl w-[370px] h-[370px] md:w-[750px] md:h-[750px] xl:w-[900px] xl:mt-[-20px] xl:h-[900px] mt-[10px] md:mt-[40px] `}
      >
        {data.map((e, i) => {
          return (
            <div key={i}>
              <div onClick={() => Draw(i)} className={`box rounded-[5px]  md:mt-[40px] `}>
                <div className={`text ${e === "X" ? `textX ${colorVariantsAndTextsize[times]} ` : `textO ${colorVariantsAndTextsize[times]}`}`}>
                  {e}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row md:gap-[200px] lg:gap-[260px] mt-[20px] md:mt-[40px] ">
        <div className="player player-1 w-[180px] border-2 mt-[20px] flex justify-center items-center font-[500] text-[25px] h-[50px] md:h-[60px] bg-[#121213] rounded-[20px] text-white">
          Player 1 : X
        </div>
        <div className="player playper-2 w-[180px] border-2 mt-[20px] flex justify-center items-center font-[500] text-[25px] h-[50px] md:h-[60px] bg-[#121213] rounded-[20px] text-white">
          Player 2 : O
        </div>
      </div>
      <button onClick={handleBack} className="  absolute top-[20px] left-[20px] w-[50px] h-[50px] lg:left-[30px] md:top-[20px] lg:top-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-[#8d5ed8d3] hover:bg-[#9f90b6ee] ">
        
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
       
     {gameWinO &&
      <Showwin/>
     }
     {gameWinX && 
     <Showwin/>
    }
   { gametie &&
     <Showwin/>
   }
         
    </div>
  );
};

export default Game;
