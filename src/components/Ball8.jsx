import React, { useState } from 'react'

const Ball8 = () => {
    const [answer, setAnswer] = useState('');
    const [shaking, setShaking] = useState(false);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const clicked = () => {
        const answers = ["Yes", "No", "NO!", "YES!","Yes", "No", "NO!", "YES!","Yes", "No", "NO!", "YES!","Yes", "No", "NO!", "YES!","Yes", "No", "NO!", "YES!","Yes", "No", "NO!", "YES!","42"]
        answer!=''?setAnswer(''):setAnswer(answers[getRandomInt(answers.length)])
    }
    const shakingOn = () => {
        setShaking(true);
    }
    const shakingOff = () => {
        setShaking(false);
    }
    
  return (
    <>
    <div className='absolute left-[55px] bottom-[26px] w-[300px] h-[100px] rounded-[100%] bg-black blur-lg opacity-[0.35]'>

    </div>
     <div className={`absolute left-[110px] bottom-[30px] w-[300px] h-[300px] rounded-[100%] bg-black overflow-clip cursor-pointer
     ${shaking&&answer===''?'animate-shake':''}`}
       onClick={()=>clicked()} onMouseDown={()=>shakingOn()} onMouseUp={()=>shakingOff()} onMouseLeave={()=>shakingOff()}>
        <div className='absolute left-[105px] top-[35px] w-[144px] h-[156px] rounded-[100%] -rotate-12  bg-slate-800 border-slate-500 border-b-[1px] border-r-[1px] border-solid shadow-sm'>
            <div className='p-[45px] text-blue-600 text-[35px] -skew-y-6 select-none'>
                {answer}
            </div>
        </div>

        <div className='absolute text-[130px] -rotate-[30deg] -skew-y-12 left-[-10px] top-[70px] text-slate-300 select-none'>
            8
        </div>
    </div>
    {/* <h2 className='absolute left-[384px] bottom-[306px] text-[40px] select-none'>
    {shaking&&answer===''?'oH YeAh!':'⬋CLICK ME'}
    </h2> */}
    </>
   
  )
}

export default Ball8