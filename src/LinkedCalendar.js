import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { dayjs } from "./utils";
import { Table } from "./Table";
import CalendarBody from "./CalendarBody";
import CalendarHead from "./CalendarHead";
import PickerUI from "./PickerUI";

class LinkedCalendar extends React.Component {
  static propTypes = {
    opens: PropTypes.string.isRequired,
    position: PropTypes.string
  };

  state = {
    leftCalendar: dayjs(),
    rightCalendar: dayjs().add(1, "month")
  };

  static defaultProps = {
    position: "left"
  };
  createProps = () => {
    const { leftCalendar, rightCalendar } = this.state;
    const leftState = Object.assign({}, this.props, { calendar: leftCalendar });
    const rightState = Object.assign({}, this.props, {
      calendar: rightCalendar
    });
    const { handlePrev, handleNext } = this;
    return {
      leftProps: {
        handlePrev,
        handleNext: () => { },
        handleSelected: handlePrev,
        showNext: false,
        ...leftState
      },
      rightProps: {
        showPrev: false,
        handlePrev: () => { },
        handleNext,
        handleSelected: handleNext,
        ...rightState
      }
    };
  };

  handlePrev = leftCalendar => {
    this.setState({
      leftCalendar,
      rightCalendar: leftCalendar.add(1, "month")
    });
  };

  handleNext = rightCalendar => {
    this.setState({
      rightCalendar,
      leftCalendar: rightCalendar.subtract(1, "month")
    });
  };

  renderTable = () => {
    const props = this.createProps();
    const { leftProps, rightProps } = props;
    const className = classNames({
      "drp-calendar": true,
      left: true
    });

    return [
      <div className={className} key={0}>
        <div className="calendar-table">
          <Table className="table-condensed">
            <CalendarHead {...leftProps} />
            <CalendarBody {...leftProps} />
          </Table>
        </div>
      </div>,
      <div className={className} key={1}>
        <div className="calendar-table">
          <Table className="table-condensed">
            <CalendarHead {...rightProps} />
            <CalendarBody {...rightProps} />
          </Table>
        </div>
      </div>
    ];
  };
  render() {
    const { opens, children } = this.props;
    const className = classNames({
      [`opens${opens}`]: true,
      "daterangepicker ltr show-calendar": true
    });
    return (
      <div
        className={className}
        style={{
          left: "auto",
          display: "block"
        }}
      >
        {this.renderTable()}
        {children}
      </div>
    );
  }
}


export default class LinkedCalendarUI extends React.Component {
  render() {
    const uiProps = { ...this.props, component: LinkedCalendar }
    return (
      <PickerUI {...uiProps} />
    );
  }
}