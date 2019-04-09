/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { cx, unitType } from "./utils";

export class DayCell extends React.Component {
  static propTypes = {
    day: PropTypes.object.isRequired,
    calendar: PropTypes.object.isRequired,
    startDate: PropTypes.object.isRequired,
    range: PropTypes.object.isRequired,
    minDate: PropTypes.object.isRequired,
    maxDate: PropTypes.object.isRequired
  };

  handleOnMouseEnter = () => {
    const { onDayMouseEnter, day } = this.props;
    if (onDayMouseEnter) {
      onDayMouseEnter(day);
    }
  }
  handleOnClick = () => {
    const { onDayClick, day } = this.props;
    if (onDayClick) {
      onDayClick(day);
    }
  }
  render() {
    const { day } = this.props;
    const className = cx({ ...this.props });
    return <td className={className} onClick={this.handleOnClick} onMouseEnter={this.handleOnMouseEnter}>{day.format("DD")}</td>;
  }
}

export class WeekCell extends React.Component {
  render() {
    const { week } = this.props;
    return <td className="week">{week}</td>;
  }
}


export const cellMapper = {
  [unitType.DAY]: DayCell,
  [unitType.WEEK]: WeekCell
};
