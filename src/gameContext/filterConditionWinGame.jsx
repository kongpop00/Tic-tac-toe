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
  const [times, setTimes] = useState(0);

  const [dataindex, setDataIndex] = useState(Array(times**2).fill(0));
  const [conditionWin, setConditionWin] = useState([]);
  const [checkcosRight ,setCheckCosRight]=useState([])
  const [checkcosLefte ,setCheckCosLefte]=useState([])
 

  
  //สร้างเงื่อนไขในการชนะ แล้วนำไปเก็บไว้ใน Araay

  //test นำเลข ไปใส่ใน data
  for (let i = 0; i < dataindex.length; i++) {
    dataindex[i] = i
  }
  // console.log("data", data);
  // วo loop ตาม จำนวน รอบ ตัวคูณ -1

  const calculate = () => {
    for (let j = 0; j< times; j++) {
      Row();
      column(j);
    }
  };
  let firtsRow = 0;
  let endRow = times;
  const Row = () => {
    let lengthRow = dataindex.slice(firtsRow, endRow);
    // o-3 , 3-6 , 6-9
    firtsRow = Number(lengthRow.slice(-1)) + 1; // 2+1==3WWW
    endRow += times; //3+3
   
 
    setConditionWin(Array.from(conditionWin.push(lengthRow)));

  };

  const column = (j) => {
    let count =j;
    let firstArray = [count]; // 0 ,1 ,2
    let endArray = times * (times - 1) + j; // 6 ,7,8

    for (let i = 0; i < dataindex.length; i++) {
      if (count + times <= endArray) {
        firstArray = [...firstArray, count + times];

        count = count + times;
      }
    }

    setConditionWin(Array.from(conditionWin.push(firstArray)));
  };

  const cosRight = () => {
    dataindex.filter((e) => {
      if (e % (times + 1) == 0) {
        setCheckCosRight(Array.from(checkcosRight.push(e)));
      }
    });
    setConditionWin(Array.from(conditionWin.push(checkcosRight)));
  };

  const cosLfte = () => {
    const endcosLfte = (times - 1) * times + 1; // 7
    //console.log('endcosLfte',endcosLfte);
    const lengthCosLfte = dataindex.slice(times - 1, endcosLfte); // 2,3,4,5,6
    const firstCosLfte = lengthCosLfte.slice(0, 1); //2
    for (let i = 1; i <= times; i++) {
      const a = firstCosLfte * i; //2*1 == 2
      setCheckCosLefte(Array.from(checkcosLefte.push(a)));
    }
    setConditionWin(Array.from(conditionWin.push(checkcosLefte)));
  };
 
   const condition=()=>{
    calculate();
    cosRight();
    cosLfte()
   }
  
  useEffect(() => {

   //
    //console.log('data',dataindex);
    calculate();
    cosRight();
    cosLfte()
    
    //console.log('time',times);
   console.log("condirion", conditionWin);
  }, [times]);

  return (
    <filterconditionWin.Provider
      value={{
        setTimes,
        times,
        setDataIndex,
        conditionWin,
        condition
      }}
    >
      {children}
    </filterconditionWin.Provider>
  );
}
