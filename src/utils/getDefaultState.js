import dayjs from "dayjs";
import { interval, getNavigatorLanguage, getMonthNamesForLocale } from "./index";
export function getDefaultState() {
    const calendar = dayjs();
    const startOfWeek = calendar.startOf("week");
    const endOfWeek = calendar.endOf("week");
    const startDate = calendar.clone();
    const endDate = calendar.clone().add(1, "month");
    const range = endDate || startDate;
    const minDate = calendar.clone().subtract(5, "year");
    const maxDate = calendar.clone().add(5, "year");
    const maxSpan = { years: 5 };
    const autoApply = false;
    const singleDatePicker = false;
    const showDropdowns = true;
    const closedOrOpen = interval.CLOSED;
    const minYear = calendar
        .clone()
        .subtract(70, "year")
        .format("YYYY");
    const maxYear = calendar
        .clone()
        .add(70, "year")
        .format("YYYY");
    const showWeekNumbers = true;
    const showISOWeekNumbers = false;
    const showCustomRangeLabel = true;
    const timePicker = false;
    const timePicker24Hour = false;
    const timePickerIncrement = 1;
    const timePickerSeconds = false;
    const alwaysShowCalendars = false;
    const ranges = {};
    const opens = "left";
    const drops = "down";
    const buttonClasses = "btn btn-sm";
    const applyButtonClasses = "btn-primary";
    const cancelButtonClasses = "btn-default";
    const isInvalidDate = () => false;
    const isCustomDate = () => [];
    const weekLabel = "W";
    const linkedCalendars = true;
    const weekNames = [];
    for (let s = startOfWeek; s <= endOfWeek;) {
        weekNames.push(s.format("dd"));
        s = s.add(1, "day");
    }
    const language = getNavigatorLanguage();
    const monthNames = getMonthNamesForLocale(language);
    let sY = parseInt(minYear);
    const eY = parseInt(maxYear);
    const yearNames = [];
    for (; sY < eY; sY++) {
        yearNames.push(sY);
    }
    const locale = {
        weekNames,
        language,
        monthNames,
        weekLabel,
        yearNames
    };
    return {
        locale,
        calendar,
        startDate,
        endDate,
        minDate,
        maxDate,
        maxSpan,
        showDropdowns,
        minYear,
        maxYear,
        showWeekNumbers,
        showISOWeekNumbers,
        timePicker,
        timePickerIncrement,
        timePicker24Hour,
        timePickerSeconds,
        ranges,
        showCustomRangeLabel,
        alwaysShowCalendars,
        opens,
        drops,
        singleDatePicker,
        linkedCalendars,
        buttonClasses,
        applyButtonClasses,
        cancelButtonClasses,
        autoApply,
        isInvalidDate,
        isCustomDate,
        weekLabel,
        closedOrOpen,
        range
    };
}
