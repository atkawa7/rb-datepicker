import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Th } from "./Table";

export default class CalendarPrev extends React.Component {
  static propTypes = {
    prev: PropTypes.bool,
    calendar: PropTypes.object.isRequired,
    handlePrev: PropTypes.func,
    locale: PropTypes.object
  };
  static defaultProps = {
    prev: true,
    locale: {}
  };

  handlePrev(calendar) {
    const { handlePrev } = this.props;
    if (handlePrev) {
      handlePrev(calendar);
    }
  }

  render() {
    const { prev, calendar } = this.props;
    const className = classNames({ prev, available: prev });
    const onClick = calendar ? this.handlePrev.bind(this, calendar) : () => {};
    const Span = prev ? <span /> : null;
    const prevProps = {
      className,
      onClick
    };
    return <Th {...prevProps}>{Span}</Th>;
  }
}
