import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { dayjs } from "./utils";
import { Table } from "./Table";
import CalendarBody from "./CalendarBody";
import CalendarHead from "./CalendarHead";
import PickerUI from "./PickerUI";

class Calendar extends React.Component {
  static propTypes = {
    opens: PropTypes.string.isRequired,
    position: PropTypes.string
  };

  state = {
    calendar: dayjs()
  };

  static defaultProps = {
    position: "left"
  };

  handleSelected = (calendar) => {
    this.setState({
      calendar
    });
  };

  createProps = () => {
    const assignedState = Object.assign({}, this.props, this.state);
    const { handlePrev, handleNext, handleSelected } = this;
    return { handlePrev, handleNext, handleSelected, ...assignedState };
  };

  handleNext = calendar => {
    this.setState({
      calendar
    });
  };

  handlePrev = calendar => {
    this.setState({
      calendar
    });
  };

  renderTable = () => {
    const props = this.createProps();
    const { position } = props;
    const className = classNames({
      "drp-calendar": true,
      [position]: true
    });

    return (
      <div className={className}>
        <div className="calendar-table">
          <Table className="table-condensed">
            <CalendarHead {...props} />
            <CalendarBody {...props} />
          </Table>
        </div>
      </div>
    );
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

export default class CalendarUI extends React.Component {
  render() {
    const uiProps = { ...this.props, component: Calendar }
    return (
      <PickerUI {...uiProps} />
    );
  }
}