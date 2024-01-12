import React, { useEffect, useState } from "react";

const Gamedinamix = () => {
  const times = 4;
  const counttic = times ** 2;
  const [data, setData] = useState(Array(counttic).fill(0));
  //const [Checkwin, setcheckWin] = useState([]);

  //สร้างเงื่อนไขในการชนะ แล้วนำไปเก็บไว้ใน Araay
  const count = times - 1;
  const win = false;

  let CheckwinRow = [];
  let checkwinColumn = [];
  let checkwinCosRight = [];

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
      //cosRight();
    }

    console.log("CheckWinRow", CheckwinRow);
    console.log("CheckWinColumn", checkwinColumn);
  };

  let firtsRow = 0;
  let endRow = times;
  const row = () => {
    const lengthRow = data.slice(firtsRow, endRow); // o-3 , 3-6 , 6-9
    CheckwinRow = [...CheckwinRow, lengthRow];
    firtsRow = Number(lengthRow.slice(-1)) + 1;
    endRow += times;
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

    checkwinColumn = [...checkwinColumn, firstArray];
  };

  const cosRight = () => {
    data.filter((e) => {
      if (e % (times + 1) == 0) {
        checkwinCosRight = [...checkwinCosRight, e];
      }
    });
    console.log("checkwinCosRight", checkwinCosRight);
  };

  const cosLfte = () => {
    const firsCosLeft = data.slice(times-1 , times-1* times)

    firsCosLeft.filter((e) => {
      
      if (e % (times + 1) == 0) {
        checkwinCosRight = [...checkwinCosRight, e];
      }
    });
    console.log("checkwinCosRight", checkwinCosRight);
  };
  useEffect(() => {
    calculate();
    cosRight();
    cosLfte()
  }, []);
  return <div>asdasd</div>;
};

export default Gamedinamix;
