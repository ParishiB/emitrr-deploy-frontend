import React from 'react'
import Logout from '../pages/Logout'
import { Link } from 'react-router-dom'
function QuizResult(props) {
  return (
    <>
    <div className='text-center font-bold text-2xl'>
        Your Score : {props.score}<br/>
        Total Score : {props.totalScore}
    </div>
    <div className="text-center font-bold p-[15px]">
      <h1 className='font-bold p-[20px]'>Do you want to Retry the game?</h1>
    <button className='bg-green-500 p-[15px] rounded' onClick={props.tryAgain}><Link to='/home'>Try Again</Link></button>
    </div>
    <div className="text-center">
    <h1 className='font-bold p-[20px]'>See you next time!!!Bye</h1>
    <button className="bg-green-500 font-bold text-center p-[15px] rounded"> <Link to='/signup'>Log Out</Link></button>
    </div>

    </>
  )
}

export default QuizResult
