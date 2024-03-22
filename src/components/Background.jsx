import React, { useEffect, useState } from 'react'

const Background = () => {
    
    const [items,setItems] = useState(null)
    
    useEffect(()=>{
        setTimeout(() => { 
            let array = [1,2,3,4,5,6,7,8,9,10]
            

            setItems(
                array.map((item,index)=>{
                    const direction = rand(8);
                    return(
                        <div key={index}
                        className={`
                        flex
                        absolute
                        ${direction===0?'animate-mleft':''}
                        ${direction===1?'animate-mright':''}
                        ${direction===2?'animate-mtop':''}
                        ${direction===3?'animate-mbot':''}
                        `}
                        style={{
                            width: `${rand(50)+20}px`,
                            height:`${rand(50)+20}px`,
                            borderRadius: `${rand(20)}%`,
                            border: `${rand(2)}px solid rgb(${rand(100)+123}, ${rand(20)+113}, ${rand(20)+223})`,
                            backgroundColor: `rgb(${rand(80)+80}, ${rand(10)+8}, ${rand(11)+210})`,
                            left: `${rand(window.screen.width/1.3)}px`,
                            top: `${rand(window.screen.height/1.3)}px`
                        }}>
                        </div>
                    )
                })
            )
         }, 3000);
        
    },[items])

    const rand = (max) => {
        return  Math.floor(Math.random() * max)
    }

  return (
    <div className='w-full p-0 m-0 h-full absolute bg-transparent -z-10'>
        {items}
    </div>
  )
}

export default Background