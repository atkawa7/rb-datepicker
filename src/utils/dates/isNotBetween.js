export default function isNotBetween(minDate, maxDate, selectedDay){
    return  minDate!=null && selectedDay.isBefore(minDate, 'day') || maxDate!=null && selectedDay.isAfter(maxDate, 'day');
}
