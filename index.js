'use strict'

const section = document.querySelector('section')
const blockInner = document.querySelector('.block')
const blockA = blockInner.querySelector('.block__a')
const blockB = blockInner.querySelector('.block__b')
let idInterval
let date = new Date()

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let monthAll = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']


const getTime = () => {
  date = new Date()
  let day = date.getDay()
  let number = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let seconds = date.getSeconds()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  return { day, number, month, year, seconds, hours, minutes }
}

const declinationCalculation = () => {

  let getTimes = getTime()
  let hours
  let minutes
  let seconds

  if (getTimes.hours >= 5 && getTimes.hours < 21 || getTimes.hours == 0) {
    hours = 'часов'
  } else if (getTimes.hours > 1 && getTimes.hours <= 4 || getTimes.hours == 22 || getTimes.hours == 23) {
    hours = 'часа'
  } else if (getTimes.hours === 21 && getTimes.hours === 1) {
    hours = 'час'
  }

  return { hours, minutes, seconds }
}

const getTimeAndOutput = () => {
  let declination = declinationCalculation()
  let getTimes = getTime()
  week.forEach((item, index) => {
    if (getTimes.day === index) {

      monthAll.forEach((monthToday, idMonth) => {

        if (getTimes.month === idMonth) {
          blockA.innerHTML = `Сегодня ${item}, ${getTimes.number} ${monthToday.replace(/[а-яА-Я]+/g, () => monthToday.toLowerCase())} ${getTimes.year} года,
           ${getTimes.hours} ${declination.hours} ${getTimes.minutes} минуты ${getTimes.seconds} секунды`
        }

      })

    }
  })

}

const getDateNum = (addNull) => {
  return (addNull < 10) ? '0' + addNull : addNull;
}

const outputNum = () => {
  let getTimes = getTime()
  blockB.textContent = `${getDateNum(getTimes.number)}.${getDateNum(getTimes.month + 1)}.${getDateNum(getTimes.year)} - ${getDateNum(getTimes.hours)}:${getDateNum(getTimes.minutes)}:${getDateNum(getTimes.seconds)}`
}

setInterval(getTimeAndOutput, 1000)
setInterval(outputNum, 1000)



