import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { THead, Tr, Th } from "./Table";
import CalendarNext from "./CalendarNext";
import CalendarPrev from "./CalendarPrev";
import CalendarTitle from "./CalendarTitle";

export default class CalendarHeader extends React.Component {
  static propTypes = {
    showISOWeekNumbers: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    locale: PropTypes.object.isRequired,
    nextDate: PropTypes.func,
    prevDate: PropTypes.func,
    showNext: PropTypes.bool,
    showPrev: PropTypes.bool,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired
  };
  static defaultProps = {
    showISOWeekNumbers: false,
    showWeekNumbers: false,
    showNext: true,
    showPrev: true,
    nextDate: calendar => calendar.add(1, "month"),
    prevDate: calendar => calendar.subtract(1, "month")
  };

  createNextProps = () => {
    const { showNext, calendar, nextDate, handleNext } = this.props;
    const date = nextDate(calendar);
    return {
      next: showNext,
      calendar: date,
      handleNext
    };
  };

  createPrevProps = () => {
    const { showPrev, calendar, prevDate, handlePrev } = this.props;
    const date = prevDate(calendar);
    return {
      prev: showPrev,
      calendar: date,
      handlePrev
    };
  };

  renderTitle = () => {
    const { showISOWeekNumbers, showWeekNumbers, calendar, locale, showDropdowns, handleSelected } = this.props;
    const colSpan = showISOWeekNumbers || showWeekNumbers ? 6 : 5;
    const props = {
      colSpan,
      calendar,
      locale,
      showDropdowns,
      handleSelected
    };
    return <CalendarTitle {...props} />;
  };

  renderNext = () => {
    const props = this.createNextProps();
    return <CalendarNext {...props} />;
  };

  renderPrev = () => {
    const props = this.createPrevProps();
    return <CalendarPrev {...props} />;
  };

  renderWeeks = () => {
    const { showWeekNumbers, showISOWeekNumbers, locale } = this.props;
    const { weekNames, weekLabel } = locale;
    const showWeeks = showISOWeekNumbers || showWeekNumbers;
    const weeks = showWeeks ? [weekLabel].concat(weekNames) : weekNames;
    const WeekData = weeks.map((children, key) => {
      const className = classNames({
        week: !!(key === 0 && showWeeks)
      });
      const thProps = {
        children,
        className,
        key
      };
      return <Th {...thProps} />;
    });
    return <Tr>{WeekData}</Tr>;
  };
  render() {
    return (
      <THead>
        <Tr>
          {this.renderPrev()}
          {this.renderTitle()}
          {this.renderNext()}
        </Tr>
        {this.renderWeeks()}
      </THead>
    );
  }
}
