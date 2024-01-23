import React, { useEffect, useState } from "react";
import "./game.css";
import { usefilterconditionWinContext } from "../gameContext/filterConditionWinGame";
import { useGameContext } from "../gameContext/GameContext";


const Showboard = () => {
  const { setTimes, setDataIndex } = usefilterconditionWinContext();
  const { setData , } = useGameContext();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inbox] = useState(Array(9).fill(""));



 const boxindex = 'boxindex'

  let box = [
    { id: 1, box: "3 x 3", borad: 3 },
    { id: 2, box: "4 x 4", borad: 4 },
    { id: 3, box: "5 x 5", borad: 5 },
    { id: 4, box: "6 x 6", borad: 6 },
    { id: 5, box: "7 x 7", borad: 7 },
    { id: 6, box: "8 x 8", borad: 8 },
    { id: 7, box: "9 x 9", borad: 9 },
    { id: 8, box: "10 X 10 ", borad: 10 },
  ];

  const handlegetscope = (borad, index) => {
    setTimes(borad);
    setDataIndex(Array(borad ** 2).fill(0));
    setData(Array(borad ** 2).fill(""));
    setSelectedIndex(index)
  };

  return (
    <div className="   mt-[70px]  gap-2  grid grid-cols-3  md:p-[50px] lg:p-[20px]  md:grid-cols-4 md:gap-5   lg:mt-[20px]  ">
      {box.map((e, index) => {
        return (
          <button
            onClick={() => handlegetscope(e.borad, index)}
            key={e.id}
            className={`box-1  border-[#26242ce8] border-[2px] text-[#6c667ce8]  bg-[#030303c4] justify-center relative items-center flex  rounded-[20px] hover:scale-125 ${
              selectedIndex === index ? ` relative z-10 bg-[#130f20ef] text-white  ${boxindex} ` : ""
            } w-[110px] h-[110px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[210px] xl:w-[250px] xl:h-[250px] `
           
          } 
          >
            <div className="absolute  text-[20px] md:text-[30px]  lg:text-[40px] font-[500] rounded-lg   ">
              {e.box}
            </div>
            <div className={` grid grid-cols-3 gap-3 w-[70%] `}>
              {inbox.map((r, i) => {
                return (
                  <div
                    key={i}
                    className={`hidden md:block  border-[2px] border-[#2e293588]  w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-xl ${selectedIndex === index ? ` border-[#25252588] relative z-[-1] ` : ""} `}
                  ></div>
                );
              })}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Showboard;
