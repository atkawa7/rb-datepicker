import classNames from "classnames";
import * as dates from "./dates";

export default function cx(props) {
  const { day, calendar, startDate, endDate, range, maxDate, minDate } = props;
  const weekend = dates.isWeekend(day);
  const inRange = dates.isBetweenExclusive(startDate, endDate, day) || dates.isBetweenExclusive(startDate, range, day);
  const isEndDate =
    endDate && day.format("YYYY-MM-DD") === endDate.format("YYYY-MM-DD");
  const isStartDate =
    startDate && day.format("YYYY-MM-DD") === startDate.format("YYYY-MM-DD");
  const active = isStartDate || isEndDate;
  const off =
    calendar.month() !== day.month() ||
    dates.isNotBetween(minDate, maxDate, day);
  const disabled = dates.isNotBetween(minDate, maxDate, day);
  const available = !disabled;
  return classNames({
    weekend,
    "in-range": inRange,
    "end-date": isEndDate,
    "start-date": isStartDate,
    active,
    off,
    disabled,
    available
  });
}
