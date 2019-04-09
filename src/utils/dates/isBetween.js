import isNotBetween  from "./isNotBetween";

export default function isBetween(minDate, maxDate, selectedDay){
    return !isNotBetween(minDate, maxDate, selectedDay)
}