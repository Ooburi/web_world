import React from 'react'


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const getRandomTopic = () =>{
    const topics = [
        {
            theme: 'Будущее туманно',
            color: 'bg-blue-300',
            id: 1
        },
        {
            theme: 'Всё будет хорошо',
            color: 'bg-emerald-500',
            id: 2
        },
        {
            theme: 'Всё будет плохо',
            color: 'bg-red-500',
            id: 3
        },
        {
            theme: 'Обратите внимание',
            color: 'bg-yellow-300',
            id: 4
        }
    ]
    return topics[getRandomInt(topics.length)]
}

const things = ["работой", "близкими", "продуктами питания", "финансовой сферой", "погодой", "хобби", "общением"]


const reasons = ["погоду", "мать", "звёзды", "правительство", "западное влияние", "Путина", "инфляцию", "спортивные игры", "глобальное потепление", "дорожное движение", "компьютерные игры", "отца", "Господа Бога"]

const randomFogPreReasons  =["Подсказки можно получить, внимательно посмотрев на ", "В этой неопределённости нужно винить только "]
const randomGoodPreReasons = ["За это можно поблагодарить ", "За это будем хвалить ", "Поблагодарим же за это "]
const randomBadPreReasons = ["В этом винить можно только ", "Винить ", "Виновником считать "]
const randomAttentionPreReasons = ["Особое внимание обратите на ", "С вниманием и осторожностью смотрите на "]

const randomFog = () => {
    return "С "+things[getRandomInt(things.length)] + " непонятно чего ожидать. " + randomFogPreReasons[getRandomInt(randomFogPreReasons.length)] + reasons[getRandomInt(reasons.length)]
}
const randomGood = () => {
    return "С "+things[getRandomInt(things.length)] + " ожидается, что всё будет хорошо. " +  randomGoodPreReasons[getRandomInt(randomGoodPreReasons.length)] + reasons[getRandomInt(reasons.length)]
}
const randomBad = () => {
    return "С "+things[getRandomInt(things.length)] + " ожидается, что всё будет плохо. " + randomBadPreReasons[getRandomInt(randomBadPreReasons.length)] + reasons[getRandomInt(reasons.length)]
}
const randomAttention= () => {
    return "С "+things[getRandomInt(things.length)] + " нужно проявить осторожность. " + randomAttentionPreReasons[getRandomInt(randomAttentionPreReasons.length)] + reasons[getRandomInt(reasons.length)]
}


const getRandomPrediction = (topic) => {
    let pre = '';
    switch(topic){
        case 1:pre = pre + randomFog()
            break;
        case 2:pre = pre + randomGood()
            break;
        case 3: pre = pre + randomBad()
            break;
        case 4: pre = pre + randomAttention()
            break;
    }
    return pre;
}

const getRandomAdvice = () => {
    const things = ["близкого общения", "прогулок на свежем воздухе", "сидения за компьютером", "чая и кофе", "взглядов в глаза", "друзей", "денежных трат", "покупок", "новых фильмов", "новых знакомств", "компьютерных игр", "кредитов", "путешествий", "езды на автомобиле", "цветов", "число 42"]

    return things[getRandomInt(things.length)]
}

const Prediction = () => {
    const topic = getRandomTopic()
    const prediction = getRandomPrediction(topic.id)

  return (
    <div className='flex flex-col w-[600px]'>
        <div className={`flex h-[50px] w-full ${topic.color} text-black  justify-around flex-col`}>
            {/* {topic.theme} */}
        </div>
        <div className={`flex  w-full p-[15px] bg-slate-200 text-black justify-left text-start flex-col outline-neutral-900`}>
            {prediction}
        </div>
        <div className='bg-neutral-300 text-black font-bold text-[12px] text-left pl-[20px]'>
            Советы: <br/>
            Избегайте {getRandomAdvice()}<br/>
            Ищите больше {getRandomAdvice()}<br/>
        </div>
    </div>
  )
}

export default Prediction