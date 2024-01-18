import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { usefilterconditionWinContext } from "./filterConditionWinGame";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const { conditionWin, times, condition } = usefilterconditionWinContext();
  const [data, setData] = useState(Array(0).fill("")); // เก็บ box ไว้ป็น Array 9 ช่อง  ''
  const [current, setCurrent] = useState("X"); // ค่า แรก ที่กดลงไปใน box

  // draw รับ index จาก การกด ของ box
  const Draw = (index) => {
    if (data[index] === "") {
      console.log("box", index);
      const borad = data;
      borad[index] = current; // ให้ index ที่กด ครั้งแรก เป็น X ["", "x "]
      console.log("borad", borad);
      setData(borad);
      console.log("data", data);
      if (current === "X") {
        setCurrent("O");
      } else {
        setCurrent("X");
      }
      if (CheckWin(borad)) {
        if (current === "X") {
          alert("Player 1 is winner");
        } else {
          alert("Player 2 is winner");
        }
      }
      if (CheckTie(borad)) {
        alert("tie game");
      }
    }
  };
  {
    /**---------------------------------------------------------------------------- */
  }
  {
    /* cehck เสมอ  */
  }
  const CheckTie = (borad) => {
    let count = 0;
    borad.forEach((element) => {
      if (element !== "") {
        count++;
      }
    });
    console.log("cout", count);
    if (count >= times**2) {
      return true;
    } else {
      return false;
    }
  };

  {
    /**checkwin */
  }
  const CheckWin = (borad) => {
    console.log("borad", borad);
    condition();
    console.log("condition", conditionWin);
    /*const condition = 
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
     
    ];
    */

    let GameWin = false;

    function isBigEnough(element, index, array) {
      if (current == "X") {
        return element == "X";
      }
      if (current == "O") {
        return element == "O";
      }
    }

    const flat = conditionWin.flat();
    let startFlat = 0;
    let endFlat = times;
    let array = [];

    for (let i = 0; i < conditionWin.length; i++) {
      // console.log('i',i);
      console.log("flat", flat);
      const t = flat.slice(startFlat, endFlat); // 0-3 4
      console.log("borad==t", borad[t]);
      console.log("ttttt", t);
      let array1 = [];
      t.map((call) => {
        console.log("============", borad[call]);
        // array = array.push(borad[call]);
        array1.push(borad[call]);
      });
      console.log("araay1111", array1);

      startFlat = startFlat + times;
      //console.log('start',startFlat);
      endFlat = endFlat + times;
      //console.log('end',endFlat);
      const k = array1.every(isBigEnough);
      console.log("k", k);
      if (k == true && current == "X") {
        alert("XXXXXXXXXXXXXXXXX");
      }
      if (k == true && current == "O") {
        alert("OOOOOOOOOOOOOOOOOOOO");
      }
    }

    /*conditionWin.map((e)=>{
    
     
      console.log('e',e);


    if (borad[e [0]] !== "" && borad[e[1]]!=="" && borad[e[2]] !==""){
     
      if( borad[e[0]] ==borad[e[1]] && borad[e[1]]==borad[e[2]]){
        alert('ddddddddddddddddddddddddddddddddddd')
      }
    }
     
   })


*/

    conditionWin.forEach((element) => {
      /*  if (borad[element[1]] !== "" && borad[element[2]] !== "") {
        console.log("hay =================================");
        if (
          borad[element[0]] === borad[element[1]] &&
          borad[element[1]] === borad[element[2]]
        ) {
          GameWin = true;
        }
      }*/
    });
    return GameWin;
  };

  return (
    <GameContext.Provider
      value={{
        Draw,
        data,
        setData,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
