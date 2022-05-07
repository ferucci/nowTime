'use strict'

const blockA = blockInner.querySelector('.block__a')
const blockB = blockInner.querySelector('.block__b')

const date = new Date()
let options = {
  year: 'numeric',
  month: 'long',
  weekday: 'long',
  day: '2-digit'
};


const getDate = () => {

  const output = date.toLocaleString('ru', options).charAt(0).toUpperCase() + date.toLocaleString('ru', options).slice(1)
  blockA.textContent = `Сегодня ${output}`
}







// 1 минута 21, 31, 41, 51
// 2 минуты 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54,
// 5 минут, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 60

// const calcMinutes = [1, 21, 31, 41, 51]
// const calcMinutes2 = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54]


// calcMinutes.forEach((item, val) => {
//   if (getTimes.minutes == item || getTimes.seconds == item) {
//     minutes = 'минута'
//     seconds = 'секунда'
//   } else if (getTimes.minutes == val) {
//     minutes = 'минуты'
//     seconds = 'секунды'
//   } else {
//     minutes = 'минут'
//     seconds = 'секунд'
//   }
//   console.log(val)
//   console.log(item)
// })