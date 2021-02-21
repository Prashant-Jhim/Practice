import {Dayname} from './day.js'
import {month} from './new.js'
import {dates} from './new.js'
import {year} from './new.js'

function MonthName(){
    if (month == 1){
        let month1 = "January"
        console.log( `${dates} / ${month1} / ${year}`)
        Dayname()
    }
    if (month == 2){
        let month2 = 'Febuary'
        console.log( `${dates} / ${month2} / ${year}`)
        Dayname()
    }
    if (month == 3){
        let month3 = 'March'
        console.log( `${dates} / ${month3} /  ${year}`)
        Dayname()
    }
    if (month == 4){
        let month4 = "April"
        console.log( `${dates} / ${month4} / ${year}`)
        Dayname()
    }
    if (month == 5){
        let month5 = 'May'
        console.log( `${dates} / ${month5} / ${year}`)
        Dayname()
    }
    if (month == 6){
        let month6 = 'June'
        console.log( `${dates} / ${month6} / ${year}`)
        Dayname()
    }
    if (month == 7){
        let month7 = "July"
        console.log( `${dates} / ${month7} / ${year}`)
    }
    if (month == 8){
        let month8 = "August"
        console.log( `${dates} / ${month8} / ${year}`)
    }
    if (month == 9){
        let month9 = "September"
        console.log( `${dates} / ${month9} / ${year}`)
    }
    if (month == 10){
        let month10 = "October"
        console.log( `${dates} / ${month10} / ${year}`)
    }
    if (month == 11){
        let month11 = "November"
        console.log( `${dates} / ${month11} / ${year}`)
    }
    if (month == 12){
        let month12 = "December"
    console.log( `${dates} / ${month12} / ${year}`)
    }
}    
export {MonthName}