import React from 'react'

const Info = () => {
  return (
    <>
    <div className='block p-[10px] mx-auto w-[800px] max-w-[800px] mt-[5px] bg-slate-800'>
        <h1 className='text-left mx-[40px] mb-[10px] white tracking-wide'>
          ПАВЕЛ ДУДАРЕВ
        </h1>
        <h2 className='text-left mx-[40px] mb-[10px] text-red-400 '>
        Зея, Амурская область
        </h2>
        
        <a href='tel: +89140470069'
         className='block text-left mx-[40px] mb-[10px] text-white '
         >
          +8(914)-047-00-69
          </a>
          <a href='https://t.me/Rinerte'
         className='block text-left mx-[40px]  text-white '
         >
          Telegram: @Rinerte
          </a>
    </div>
    <div className='bg-white grid w-[800px] max-w-[800px] my-0 p-0 grid-cols-[30%_70%]'>
      <div 
      className='flex flex-col bg-slate-500 mt-3 text-white pl-[50px] py-[15px]'
      >
        <h3 className='text-red-400 font-bold text-left text-[17px]'>
          Навыки
        </h3>
        <ul className='text-left text-[15px] leading-[150%]'>          
        <li>C#, .NET, ASP.NET</li>
        <li>SQL (MS SQL, PostgreSQL)</li>
        <li>Entity Framework</li>
        <li>OOP</li>
        <li>HTML+CSS+JS</li>
        <li>React</li>
        <li>Go</li>
        <li>Английский язык</li>
        </ul>
      </div>

      <div
      className='flex flex-col mt-3  pl-[50px] py-[15px] text-left'
      >
        <h3 className='text-slate-800 font-bold'>
        Биография
        </h3>
      
      </div>
    </div>
    </>
  )
}

export default Info