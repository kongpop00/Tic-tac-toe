import { useNavigate } from "react-router-dom";
import Showboard from "../component/Showboard";
import "../component/game.css";
import { useGameContext } from "../gameContext/GameContext";
import { usefilterconditionWinContext } from "../gameContext/filterConditionWinGame";
import WarnBoard from "../component/WarnBoard";
const Home = ({ setTimes }) => {
  const color = "boxindex";
  const box = "box2";
  const hov = "box3";
  const styleBtn =
    " bg-[#1a0b2e] w-[200px] h-[50px] mt-[20px] lg:w-[250px] lg:h-[65px]  rounded-[20px] flex  items-center justify-around px-[40px] lg:px-0 hover:scale-125";
  const { setPlayer, setWarnBoard, warnBoard } = useGameContext();
  const { times } = usefilterconditionWinContext();
  const navigate = useNavigate();
  const handleTwoPlayer = () => {
    setPlayer("twoPlayer");
    //console.log("times", times);
    setWarnBoard(true);
    if (times > 0) {
      navigate("/game");
    }
  };
  const handleBot = () => {
    setPlayer("botPlayer");
    setWarnBoard(true);
    if (times > 0) {
      navigate("/game");
    }
  };
  return (
    <div className="bg-[url(/bghome.png)] w-fuul h-[100%] bg-cover bg-center ">
      <div className=" w-full m-auto h-[100vh] lg:p-[50px] flex flex-col items-center">
        <h1
          className={`${box} text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-[500] text-white w-[100%] text-center mt-[70px] lg:mt-[10px] `}
        >
          Tic-Tac-Toe
        </h1>
        <Showboard setTimes={setTimes} />
        {warnBoard && <WarnBoard />}

        {/*Button1*/}
        <div className=" mt-[20px] lg:mt-[30px] flex flex-col md:flex-row w-[100%] items-center justify-center gap-0 md:gap-10">
          <button className={`${color} ${styleBtn} ${hov}`} onClick={handleBot}>
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

          {/*Button1*/}

          <button
            className={`${color}${styleBtn}  ${hov}`}
            onClick={handleTwoPlayer}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
