import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const filterconditionWin = createContext();

export function usefilterconditionWinContext() {
  return useContext(filterconditionWin);
}

export function FilterconditionWinProvider({ children }) {
  const [times, setTimes] = useState(4);
  const [conditionWin, setConditionWin] = useState([]);
  const [checkwinRow, setCheckWinRow] = useState([]);
  const [checkwinColumn, setCheckWinColumn] = useState([]);
  const [checkwinCosRight, setCheckWinCosRight] = useState([]);
  const [checkwinCosLfte, setCheckWinCosLfte] = useState([]);
  const counttic = times ** 2;
  const [data, setData] = useState(Array(counttic).fill(0));
  //สร้างเงื่อนไขในการชนะ แล้วนำไปเก็บไว้ใน Araay
  const count = times - 1;

  //let checkwinRow = [];
  //let checkwinColumn = [];
  // let checkwinCosRight = [];
  //let checkwinCosLfte = [];

  //test นำเลข ไปใส่ใน data
  for (let i = 0; i < data.length; i++) {
    data[i] = i;
  }
  // console.log("data", data);
  // วo loop ตาม จำนวน รอบ ตัวคูณ -1

  const calculate = () => {
    for (let i = 0; i < times; i++) {
      //แนวนอน
      // console.log("========================================i", i);
      row();

      column(i);
    }
  };

  let firtsRow = 0;
  let endRow = times;
  const row = () => {
    const lengthRow = data.slice(firtsRow, endRow); // o-3 , 3-6 , 6-9
    //checkwinRow = [...checkwinRow, lengthRow];
    // setCheckWinRow([...checkwinRow, lengthRow])
    setCheckWinRow(checkwinRow.push(lengthRow));
    firtsRow = Number(lengthRow.slice(-1)) + 1; // 2+1==3
    endRow += times; //3+3
  };

  const column = (i) => {
    let count = i;
    let firstArray = [count]; // 0 ,1 ,2
    let endArray = times * (times - 1) + i; // 6 ,7,8

    for (let i = 0; i < data.length; i++) {
      if (count + times <= endArray) {
        // console.log("a+times", count + times);
        firstArray = [...firstArray, count + times];

        count = count + times;
      }
    }

    // checkwinColumn = [...checkwinColumn, firstArray];
    setCheckWinColumn(checkwinColumn.push(firstArray));
  };

  const cosRight = () => {
    data.filter((e) => {
      if (e % (times + 1) == 0) {
        //checkwinCosRight = [...checkwinCosRight, e];
        setCheckWinCosRight(checkwinCosRight.push(e));
      }
    });
  };

  const cosLfte = () => {
    const endcosLfte = (times - 1) * times + 1; // 7
    //console.log('endcosLfte',endcosLfte);
    const lengthCosLfte = data.slice(times - 1, endcosLfte); // 2,3,4,5,6
    const firstCosLfte = lengthCosLfte.slice(0, 1); //2
    for (let i = 1; i <= times; i++) {
      const a = firstCosLfte * i; //2*1 == 2
      //  checkwinCosLfte = [...checkwinCosLfte, a];
      setCheckWinCosLfte(checkwinCosLfte.push(a));
    }
  };

  console.log("conditon", conditionWin);

  const conditionWins = () => {};

  useEffect(() => {
    calculate();
    cosRight();
    cosLfte();
    console.log("CheckWinRow", checkwinRow);
    console.log("CheckWinColumn", checkwinColumn);
    console.log("checkwinCosRight", checkwinCosRight);
    console.log("checkwinCosLfte", checkwinCosLfte);
    setConditionWin([
      ...conditionWin,
      ...checkwinRow,
      ...checkwinColumn,
      checkwinCosLfte,
      checkwinCosRight,
    ]);
    console.log("times", times);
  }, [times]);
  return (
    <filterconditionWin.Provider
      value={{
        setTimes,
        times,
        conditionWins,
      }}
    >
      {children}
    </filterconditionWin.Provider>
  );
}
