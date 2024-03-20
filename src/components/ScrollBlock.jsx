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
        setText([Math.floor(Math.random()*25000),text[0],text[1],text[2],text[3],text[4],text[5],text[6],text[7]])
    }
    const items = () => {
        return text.map((item,index)=>{
            return (
                <div key={index} className={`border-b-[1px] border-solid border-black w-full h-[50px] animate-trans text-black p-[10px] ${index===0?'animated':''}`}>
                    {item}
                </div>
            )
        })
    }

  return (
    <div className='absolute flex flex-col right-[0px] top-[0px] h-[450px] w-[300px] bg-white p-0 m-0 overflow-clip select-none'>
        {items()}
        <div className='w-full absolute bg-black h-[50px] bottom-0 text-white'>
            WHAT IS THIS?<br/>
            KORE WA NANI
        </div>
    </div>
  )
}

export default ScrollBlock