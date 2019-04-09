import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Th } from "./Table";

export default class CalendarNext extends React.Component {
  static propTypes = {
    next: PropTypes.bool,
    calendar: PropTypes.object.isRequired,
    handleNext: PropTypes.func.isRequired
  };
  static defaultProps = {
    next: true
  };

  handleNext(calendar) {
    const { handleNext } = this.props;
    if (handleNext) {
      handleNext(calendar);
    }
  }

  render() {
    const { next, calendar } = this.props;
    const className = classNames({ next, available: next });
    const onClick = calendar ? this.handleNext.bind(this, calendar) : () => {};
    const Span = next ? <span /> : null;
    const nextProps = {
      className,
      onClick
    };
    return <Th {...nextProps}>{Span}</Th>;
  }
}
