import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [data, setData] = useState(Array(9).fill("")); // เก็บ box ไว้ป็น Array 9 ช่อง  ''
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
    console.log('cout',count);
    if (count >= 9) {
      return true;
    } else {
      return false;
    }
  };

  {
    /**checkwin */
  }
  const CheckWin = (borad) => {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let GameWin = false;

    condition.forEach((element) => {
      if (
        borad[element[0]] !== "" &&
        borad[element[1]] !== "" &&
        borad[element[2]] !== ""
      ) {
        if (
          borad[element[0]] === borad[element[1]] &&
          borad[element[1]] === borad[element[2]]
        ) {
          GameWin = true;
        }
      }
    });
    return GameWin;
  };

  return (
    <GameContext.Provider
      value={{
        Draw,
        data,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
