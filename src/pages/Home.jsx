import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="p-[40px]">
        <h1 className="text-center text-2xl p-[20px] font-bold">Instructions for the test</h1>
        <div className="text-center font-bold">
            <li>There are 4 options</li>
            <li>Choose one of the following option</li>
            <li>Click on the NEXT option</li>
        </div>
        <div className="text-center p-[20px]">
           <div className="p-[15px]s">
           <button className="bg-green-600 p-[15px] rounded font-bold"><Link to='/english'> Easy Level Test</Link></button>
           </div>
           <div className="p-[15px]">
           <button className="bg-green-600 p-[15px] rounded font-bold"><Link to='/english2'> Medium Level Test</Link></button>
           </div>
           <div className="p-[10px]">
           <button className="bg-green-600 p-[15px] rounded font-bold"><Link to='/english3'> Hard Level Test</Link></button>
           </div>
        </div>
    </div>
  )
}

export default Home