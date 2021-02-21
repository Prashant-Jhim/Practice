import {MonthName} from './Month.js'

console.log("Calender")
let date = new Date
let time = date.getTime()
let dates = ((date.getUTCDate()))
let Day = (date.getUTCDay())
let month = (date.getUTCMonth())+1
let year = date.getFullYear()
export {year}
export {dates}
export {month}
export {Day}
MonthName()
