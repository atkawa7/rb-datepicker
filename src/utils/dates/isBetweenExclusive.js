export default function isBetweenExclusive(startDate, endDate, day){
    return startDate &&  endDate && day > startDate && day < endDate;
}