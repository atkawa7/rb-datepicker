import assert from "assert";
import dayjs from 'dayjs';
import { dates } from "../src/utils";

describe("date utils isBetween function", () => {
  it("should return true date is between two dates inclusive of end and start date", () => {
    const minDate = dayjs('2016-01-01');
    const maxDate = dayjs('2018-01-01');
    let selectedDay = dayjs('2018-01-01');
    let result = dates.isBetween(minDate, maxDate, selectedDay);
    assert.equal(result, true);

    selectedDay = dayjs('2016-01-01');
    result = dates.isBetween(minDate, maxDate, selectedDay);
    assert.equal(result, true);

    selectedDay = dayjs('2017-01-01');
    result = dates.isBetween(minDate, maxDate, selectedDay);
    assert.equal(result, true);

    selectedDay = dayjs('2015-12-31');
    result = dates.isBetween(minDate, maxDate, selectedDay);
    assert.equal(result, false);

    selectedDay = dayjs('2018-01-02');
    result = dates.isBetween(minDate, maxDate, selectedDay);
    assert.equal(result, false);
  });
});


describe("date utils isNotBetween function", () => {
  it("should return true if date is not between two dates inclusive of end and start date", () => {
    const minDate = dayjs('2016-01-01');
    const maxDate = dayjs('2018-01-01');
    let selectedDay = dayjs('2018-01-01');
    let result = dates.isNotBetween(minDate, maxDate, selectedDay);
    assert.equal(result, false);


    selectedDay = dayjs('2016-01-01');
    result = dates.isNotBetween(minDate, maxDate, selectedDay);
    assert.equal(result, false);

    selectedDay = dayjs('2017-01-01');
    result = dates.isNotBetween(minDate, maxDate, selectedDay);
    assert.equal(result, false);

    selectedDay = dayjs('2015-12-31');
    result = dates.isNotBetween(minDate, maxDate, selectedDay);
    assert.equal(result, true);

    selectedDay = dayjs('2018-01-02');
    result = dates.isNotBetween(minDate, maxDate, selectedDay);
    assert.equal(result, true);
  });
});
