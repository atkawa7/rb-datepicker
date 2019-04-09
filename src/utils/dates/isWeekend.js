export default function isWeekend(day){
    return day.day() > 5 || day.day() < 1;
}