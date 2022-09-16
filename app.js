// var now = new Date()
// now.setDate(05)
// now.setMonth(11)
// now.setFullYear(2015)
// now.setMinutes(18)
// now.setSeconds(39)
// document.write(now)
// let months = [
//   'jan',
//   'feb',
//   'march',
//   'april',
//   'may',
//   'june',
//   'july',
//   'august',
//   'september',
//   'october',
//   'november',
//   'december',
// ]
// document.write(months[now.getMonth()])
// let now = new Date()
// console.log('THIS', now.getDay())
// let weeks = [
//   'sunday',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
// ]
// if (weeks[now.getDay()] == 'sunday' || weeks[now.getDay()] == 'saturday') {
//   document.write('its fun day')
// } else {
//   document.write(weeks[now.getDay()])
// }
// let now = new Date()
// let todayDate = now.getDate()
// console.log('todayDate', todayDate)
// if (todayDate <= 15) {
//   document.write('First fifteen days of the month')
// } else {
//   document.write('last days of the months')
// }

// let now = new Date()
// document.write(`Current Date: ${now} <br>
// Elapsed milliseconds since january 1, 1970: ${now.getTime()}<br>
// Elapsed minutes since january 1, 1970: ${now.getTime()/1000/60}
// `)

// let now = new Date()
// let time = now.getHours()
// console.log(time)
// if (time > 12) {
//   document.write('Its PM')
// } else {
//   document.write('Its AM')
// }

// let now = new Date("2020 12 31")
// document.write(`Later Date: ${now}`)

let ago = new Date('2022 12 31')
let now = new Date()
document.write(
  'the time ',
  Math.round((ago.getTime() - now.getTime()) / 1000 / 60 / 60 / 24),
)
