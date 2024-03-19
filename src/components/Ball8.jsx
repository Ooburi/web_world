import React, { useState } from 'react'

const Ball8 = () => {
    const [answer, setAnswer] = useState('');

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const clicked = () => {
        const answers = ["Yes", "No", "NO!", "YES!"]
        answer!=''?setAnswer(''):setAnswer(answers[getRandomInt(answers.length)])
    }

  return (
    <div className='absolute left-[400px] top-[30px] w-[300px] h-[300px] rounded-[100%] bg-black overflow-clip cursor-pointer' onClick={()=>clicked()}>
        <div className='absolute left-[105px] top-[35px] w-[144px] h-[156px] rounded-[100%] -rotate-12  bg-slate-800 border-slate-900 border-[1px] border-solid shadow-sm'>
            <div className='p-[45px] text-blue-600 text-[35px] -skew-y-6'>
                {answer}
            </div>
        </div>

        <div className='absolute text-[130px] -rotate-[30deg] -skew-y-12 left-[-10px] top-[70px]'>
            8
        </div>
    </div>
  )
}

export default Ball8