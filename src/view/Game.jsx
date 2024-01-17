import React, { useEffect, useState } from 'react'
import '../component/game.css'
import { useGameContext } from '../gameContext/GameContext'
import { usefilterconditionWinContext } from '../gameContext/filterConditionWinGame'

const Game = () => {

    const {Draw ,data} = useGameContext()
    const {times }=usefilterconditionWinContext()
    const textX = 'textX'
    const textO = 'textO'
    

    

  return (
    <div className='bg-[url(public/bg-game.png)] w-full h-[100vh] flex flex-col items-center justify-center md:justify-start bg-center bg-cover '>
        <div className={`max-w-7xl w-[350px] h-[350px] md:w-[750px] md:h-[750px] mt-[40px] grid grid-cols-${times} gap-3`}>
           {data.map((e,i)=>{
            return(
              
              <div key={i}>
                
                 <div onClick={()=>Draw(i)} className='box'><div className={`text ${e ==="X" ? 'textX' : 'textO'}`}>{e}</div></div>
              </div>
            )
           })}
          

           {/**<div onClick={()=>Draw(0)} className= 'box box0'><div className={`text ${data[0] =="X" ? 'textX' : 'textO'}`}>{data[0]}</div></div>
            <div onClick={()=>Draw(1)} className='box box1'><div className={`text ${data[1] =="X" ? 'textX' : 'textO'}`}>{data[1]}</div></div>
            <div onClick={()=>Draw(2)} className='box box2'><div className={`text ${data[2] =="X" ? 'textX' : 'textO'}`}>{data[2]}</div></div>
            <div onClick={()=>Draw(3)} className='box box3'><div className={`text ${data[3] =="X" ? 'textX' : 'textO'}`}>{data[3]}</div></div>
            <div onClick={()=>Draw(4)} className=' box box4'><div className={`text ${data[4] =="X" ? 'textX' : 'textO'}`}>{data[4]}</div></div>
            <div onClick={()=>Draw(5)} className='box box5'><div className={`text ${data[5] =="X" ? 'textX' : 'textO'}`}>{data[5]}</div></div>
            <div onClick={()=>Draw(6)} className='box box6'><div className={`text ${data[6] =="X" ? 'textX' : 'textO'}`}>{data[6]}</div></div>
            <div onClick={()=>Draw(7)} className='box box7'><div className={`text ${data[7] =="X" ? 'textX' : 'textO'}`}>{data[7]}</div></div>
            <div onClick={()=>Draw(8)}className='box box8'><div className={`text ${data[8] =="X" ? 'textX' : 'textO'}`}>{data[8]}</div></div>
          */}
            </div>
        <div className='flex flex-col md:flex-row md:gap-[200px] lg:gap-[260px] '>
        <div className='player player-1 w-[180px] border-2 mt-[20px] flex justify-center items-center font-[500] text-[25px] h-[50px] md:h-[60px] bg-sky-500 rounded-[20px] ' >
        Player 1 : X
        </div>
        <div className='player playper-2 w-[180px] border-2 mt-[20px] flex justify-center items-center font-[500] text-[25px] h-[50px] md:h-[60px] bg-sky-500 rounded-[20px] '>
        Player 2 : O
        </div>
        </div>
    </div>
  )
}

export default Game