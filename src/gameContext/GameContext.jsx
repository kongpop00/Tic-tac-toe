import {  createContext, useContext, useState } from "react";
import { usefilterconditionWinContext } from "./filterConditionWinGame";
import { useNavigate } from "react-router-dom";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const { conditionWin, times, condition, setTimes } =
    usefilterconditionWinContext();
  const [data, setData] = useState(Array(0).fill("")); // เก็บ box ไว้ป็น Array 9 ช่อง  ''
  const [current, setCurrent] = useState("X"); // ค่า แรก ที่กดลงไปใน box
  const [player, setPlayer] = useState("");
  const [warnBoard, setWarnBoard] = useState(false);
  const [gameWinX, setGameWinX] = useState(false);
  const [gameWinO, setGameWinO] = useState(false);
  const [gametie, setgameTie] = useState(false);

  // draw รับ index จาก การกด ของ box

  const Draw = (index) => {
    if (data[index] === "") {
      //  console.log("box", index);
      const borad = data;
      borad[index] = current; // ให้ index ที่กด ครั้งแรก เป็น X ["", "x "]

      // console.log("borad", borad);
      setData(borad);
      //  console.log("data", data);

      if (player == "twoPlayer") {
        //  console.log("player", player);
        if (current === "X") {
          setCurrent("O");
        } else {
          setCurrent("X");
        }
        CheckWin(borad);
        CheckTie(borad);
      } else {
        //console.log("player", player);

        const random = RandomDraw(times);

        if (borad[random] == "") {
          borad.fill("O", random, random + 1);
        } else {
          const found = borad.indexOf("");
          //  console.log("index of ", found);
          borad.fill("O", found, found + 1);
        }
        CheckWin(borad);
        CheckTie(borad);
      }
    }
  };

  const CheckWin = (borad) => {
    // console.log("borad", borad);
    condition();
    //console.log('conditionwin =========',conditionWin);

    function isAllX(element, index, array) {
      return element == "X";
    }
    function isAllO(element, index, array) {
      return element == "O";
    }
    //element !=="X" && element !=="O"

    const flat = conditionWin.flat();
    let startFlat = 0;
    let endFlat = times;
    for (let i = 0; i < conditionWin.length; i++) {
      // console.log('i',i);
      // console.log("flat", flat);
      const t = flat.slice(startFlat, endFlat); // 0-3 4
      //console.log("borad==t", borad[t]);
      // console.log("ttttt", t);
      let array1 = [];

      t.map((call) => {
        //  console.log("============", borad[call]);
        // array = array.push(borad[call]);
        array1.push(borad[call]);
      });
      // console.log("araay1111", array1);

      startFlat = startFlat + times;
      //console.log('start',startFlat);
      endFlat = endFlat + times;
      //console.log('end',endFlat);
      const everyconditionX = array1.every(isAllX);
      const everyconditionO = array1.every(isAllO);

      if (everyconditionX) {
        setGameWinX(true);
      }
      if (everyconditionO) {
        setGameWinO(true);
      }
    }
  };
  const CheckTie = (borad) => {
    let count = 0;
    borad.forEach((element) => {
      if (element !== "") {
        count++;
      }
    });
    if (count >= times ** 2) {
      setgameTie(true);
    }
  };

  const RandomDraw = (times) => {
    const time = times ** 2;
    return Math.floor(Math.random() * time);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
    window.location.reload();
  };

  const handlePlayagain = () => {
    setData(Array(times ** 2).fill(""));
    setCurrent("X");
    setgameTie(false);
    setGameWinO(false);
    setGameWinX(false);
  };
  return (
    <GameContext.Provider
      value={{
        Draw,
        data,
        setData,
        setPlayer,
        setWarnBoard,
        warnBoard,
        gameWinO,
        gameWinX,
        handleBack,
        handlePlayagain,
        player,
        gametie,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
