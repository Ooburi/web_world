import { useState, useEffect } from 'react'



const ScrollBlock = () => {

    const [text, setText] = useState([8,7,6,5,4,3,2,1,0])

    useEffect(() => {
        const element = document.querySelector('.animated');
        const handleAnimationIteration = () => {
          rewrite()
          console.log('Animation iteration!');
        };
    
        element.addEventListener('animationiteration', handleAnimationIteration);
    
        return () => {
          element.removeEventListener('animationiteration', handleAnimationIteration);
        };
      }, [text]);

    const rewrite = () => {
        
        setText([text[0]+1,text[0],text[1],text[2],text[3],text[4],text[5],text[6],text[7]])
    }

  return (
    <div className='absolute flex flex-col left-[10px] top-[134px] h-[450px] w-[300px] bg-white p-0 m-0 overflow-clip'>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] animated' >
            {text[0]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] '>
            {text[1]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] '>
            {text[2]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] '>
            {text[3]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px]'>
            {text[4]}
        </div>

        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] '>
            {text[5]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px]'>
            {text[6]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] '>
            {text[7]}
        </div>
        <div className='border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px]'>
            {text[8]}
        </div>


        <div className='w-full absolute bg-black h-[50px] bottom-0'></div>
    </div>
  )
}

export default ScrollBlock