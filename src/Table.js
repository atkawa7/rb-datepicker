import React from "react";

export class Tr extends React.Component {
  render() {
    const { className, onClick, style, children } = this.props;
    return (
      <tr style={style} onClick={onClick} className={className}>
        {children}
      </tr>
    );
  }
}

export class Th extends React.Component {
  render() {
    const { className, onClick, style, children, colSpan, onMouseDown } = this.props;
    return (
      <th style={style} onClick={onClick} colSpan={colSpan} onMouseDown={onMouseDown} className={className}>
        {children}
      </th>
    );
  }
}

export class TBody extends React.Component {
  render() {
    const { className,  style, children} = this.props;
    return (
      <tbody style={style}  className={className}>
        {children}
      </tbody>
    );
  }
}

export class Td extends React.Component {
  render() {
    const { className, style, children } = this.props;
    return (
      <td style={style}  className={className}>
        {children}
      </td>
    );
  }
}

export class THead extends React.Component {
  render() {
    const { className, style, children } = this.props;
    return (
      <thead style={style} className={className}>
        {children}
      </thead>
    );
  }
}

export class Table extends React.Component {
  render() {
    const { className, style, children } = this.props;
    return (
      <table style={style} className={className}>
        {children}
      </table>
    );
  }
}