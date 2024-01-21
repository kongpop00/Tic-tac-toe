import React from "react";
import { useGameContext } from "../gameContext/GameContext";

const WarnBoard = () => {
  const { setWarnBoard, warnBoard } = useGameContext();
  return (
    <div className="bg-[#000000ad] absolute w-[100%] h-[100%] top-0 flex z-40">
      <div className="bg-[#120c25cb] relative w-[40%] h-[40%] m-auto flex justify-center items-center">
        <button
          onClick={() => setWarnBoard(false)}
          className="absolute top-0 right-0 bg-[#fa3131fa] w-[70px] h-[70px] rounded-b-full text-white text-[40px] font-[500] hover:bg-[#d8595f]"
        >
          {" "}
          X
        </button>
        <div className="text-[40px] text-white font-mono font-[600] ">Please select board size.</div>
      </div>
    </div>
  );
};

export default WarnBoard;
