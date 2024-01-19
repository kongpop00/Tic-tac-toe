import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import Showboard from "../component/Showboard";
import "../component/game.css";
import { useGameContext } from "../gameContext/GameContext";
const Home = ({setTimes}) => {
 
  const color = 'boxindex'
  const box = 'box2'
  const hov = 'box3'
   const {setPlayer}=useGameContext()
  return (
    <div className="bg-[url(public/bghome.png)] w-fuul h-[100vh] bg-cover bg-center">
      <div className="max-w-7xl m-auto h-[100vh] p-[50px] flex flex-col items-center">
        <h1 className={`${box} text-[50px] sm:text-[70px] md:text-[80px] lg:text-[120px] font-[500] text-white w-[100%] text-center`}>
          Tic-Tac-Toe
        </h1>
        <Showboard setTimes={setTimes}/>

        {/*Button1*/}
        <div className=" mt-[20px] flex flex-col md:flex-row w-[100%] items-center justify-center gap-20">
            <Link to={'/game'}>
          <button className={`${color} bg-[#1a0b2e] w-[250px] h-[60px] rounded-[20px] flex  items-center justify-around px-[40px] hover:scale-125 ${hov}`}
            onClick={()=>setPlayer("botPlayer")}
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white"

            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="text-[20px] font-[600] text-white">VS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </button>
          </Link >
          {/*Button1*/}

          <Link to={'/game'}>
          <button className={`${color} bg-[#1a0b2e]  w-[250px] h-[60px] rounded-[20px]  flex  items-center justify-around  px-[40px] hover:scale-125 ${hov}`}
            onClick={()=>setPlayer("twoPlayer")}
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="text-[20px] font-[600] text-white">VS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Home;
