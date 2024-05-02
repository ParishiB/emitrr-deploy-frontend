import React , {useState} from 'react'
import { QuizData } from '../data/QuizData'
import QuizResult from '../data/QuizResult';



const English = () => {

    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    

    // to change the question
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }


    // to update the score
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }


    // to reset all
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }



  return (
    <div>
    <p className=" text-center font-bold  p-[40px] text-2xl">Welcome to the english Quiz!! Check your english proficiency here</p>
    <div className="container">

        {/* conditional rendering */}
        {/* passing the props */}
        {showResult ? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>

        ):(

            // continuw with showing the questions
        <>
        <div className="text-center font-bold">
            <span id="question-number">{currentQuestion+1}. </span>
            <span id="question-txt">{QuizData[currentQuestion].question}</span>
        </div>

        
        <div className="text-center  ">
            {QuizData[currentQuestion].options.map((option,i)=>{
                return(
                    <ul>
                    <button 
                    // className="option-btn"
                    className={`option-btn ${
                        clickedOption == i+1?"checked":null
                    }`}
                    key={i}
                    onClick={()=>setClickedOption(i+1)}
                    >
                    {option}
                    </button>
                    </ul>
                )
            })}                
        </div>
        <div className='text-center font-bold rounded p-[40px] '><input type="button" value="Next" id="next-button" onClick={changeQuestion}/></div>
        </>)}
    </div>
</div>
    
  )
}

export default English