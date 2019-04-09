import React from "react";
import PropTypes from "prop-types";
import { Th } from "./Table";
import { dayjs } from "./utils";

export default class CalendarTitle extends React.Component {
  constructor(props) {
    super(props);
    this.monthSelect = React.createRef();
    this.yearSelect = React.createRef();
  }
  static propTypes = {
    calendar: PropTypes.object.isRequired,
    colSpan: PropTypes.number.isRequired,
    className: PropTypes.string
  };
  
  static defaultProps = {
    className: "month"
  };
  handleChange = () => {
    const {
      monthSelect: { current: monthSelect },
      yearSelect: { current: yearSelect }
    } = this;
    const options = [
      parseInt(yearSelect.value),
      parseInt(monthSelect.value) + 1
    ];
    const newCalendar = dayjs(options);
    
    const { handleSelected } = this.props;
    if (handleSelected) {
      handleSelected(newCalendar);
    }
  };
  render() {
    const { calendar, colSpan, className, locale, showDropdowns } = this.props;
    const month = calendar.month();
    const year = calendar.year();
    const titleProps = { colSpan, className };
    let label = calendar.format("MMM YYYY");
    if (showDropdowns) {
      const { monthNames, yearNames } = locale;
      label = [
        <select
          className="monthselect"
          key={0}
          ref={this.monthSelect}
          value={month}
          onChange={this.handleChange}
        >
          {monthNames.map((name, key) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>,
        <select
          className="yearselect"
          key={1}
          ref={this.yearSelect}
          value={year}
          onChange={this.handleChange}
        >
          {yearNames.map((name, key) => (
            <option key={key} value={name}>
              {name}
            </option>
          ))}
        </select>
      ];
    }

    return <Th {...titleProps}>{label}</Th>;
  }
}
