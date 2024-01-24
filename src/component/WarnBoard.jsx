import React from "react";
import { useGameContext } from "../gameContext/GameContext";

const WarnBoard = () => {
  const { setWarnBoard } = useGameContext();
  return (
    <div className="bg-[#000000ad] absolute w-[100%] h-[100%] top-0 flex z-40">
      <div className="bg-[#281d4b5b] relative w-[70%] xl:w-[50%] h-[40%] m-auto  md:mt-[250px] flex justify-center items-center">
        <button
          onClick={() => setWarnBoard(false)}
          className="absolute top-0 right-0 bg-[#fa3131fa] w-[50px] h-[50px] rounded-b-full text-white text-[30px] font-[500] hover:bg-[#d8595f]"
        >
          {" "}
          X
        </button>
        <div className="text-[30px] md:text-[45px] text-center text-white font-mono font-[600] ">Please select board size.</div>
      </div>
    </div>
  );
};

export default WarnBoard;
