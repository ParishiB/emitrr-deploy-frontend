import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='text-center font-bold text-xl p-[10px]'>Learn all about English</div>
   
    <section className="p-[10px] text-center">
        <h1 className="font-bold p-[10px]">Singular and Plural</h1>
        <p className=''> Nouns give names of concrete or abstract things in our lives. As babies learn "mom," "dad," or "milk" as their first word, nouns should be the first topic when you study a foreign language. </p>
         <div className="">
            <li>bottle – bottles</li>
            <li>cup – cups</li>
            <li>pencil – pencils</li>
            <li>desk – desks</li>
            <li>sticker – stickers</li>
         </div>
    </section>

   <section className='p-[10px] text-center'>
       <h1 className="font-bold p-[10px]">Pronouns</h1>
       <p className="">A pronoun takes the place of a noun.</p>
       <div className="">
        <li> 'I' go to school.</li>
        <li> 'You' are a student</li>
         <li>'They' are Koreans</li>
       </div>

   </section>

   <section className="p-[10px] text-center">
       <h1 className="font-bold p-[10px]">Adverbs</h1>
       <p className="">An adverb tells more about a verb in the sentence.</p>
       <div className="">
         <li>The fire engine runs fast.</li>
         <li>Listen to his speech carefully.</li>
         <li>I browse the web frequently.</li>
         <li>It rained hard.</li>
       </div>
   </section>

   <section>
    <h1 className="text-center font-bold p-[10px] text-2xl">Take a test to check your skills</h1>
    <div className="text-center">
        <button className="bg-green-500  text-center font-bold rounded p-[5px]"><Link to='/home'>Click Me</Link></button>
    </div>
   </section>

   </>
    
  )
}

export default About