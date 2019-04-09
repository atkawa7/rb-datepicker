import React from "react";
import PropTypes from "prop-types";
import { Tr, TBody } from "./Table";
import { cellMapper } from "./Cell";
import { dates, unitType} from "./utils";


export default class CalendarBody extends React.Component {
  static propTypes = {
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    showISOWeekNumbers: PropTypes.bool.isRequired,
    showWeekNumbers: PropTypes.bool.isRequired,
    calendar: PropTypes.object.isRequired
  };

  renderCells = () => {
    const {
      startDate,
      endDate,
      range,
      minDate,
      maxDate,
      showWeekNumbers,
      showISOWeekNumbers,
      calendar,
      onDayClick,
      onDayMouseEnter
    } = this.props;
    const startOfMonth = calendar.startOf("month");
    const startOfWeek = startOfMonth.startOf("week");
    const endOfMonth = calendar.endOf("month");
    const endOfWeek = endOfMonth.endOf("week");
    const data = [];
    let s = startOfWeek.clone();

    for (; s <= endOfWeek;) {
      data.push(s);
      s = s.add(1, "day");
    }
    if (data.length < 42) {
      let fill = data.length;
      for (; fill < 42; fill++) {
        data.push(s);
        s = s.add(1, "day");
      }
    }
    const resolvedData = [];
    for (let cxi = 0; cxi < 6; cxi++) {
      const rows = [];
      const rxi = cxi * 7;
      const rxiDay = data[rxi];

      if (showISOWeekNumbers || showWeekNumbers) {
        const week = showISOWeekNumbers
          ? dates.isoWeek(rxiDay.toDate())
          : rxiDay.week();
        rows.push({
          unitType: unitType.WEEK,
          key: 0,
          week
        });
      }

      const initLength = rows.length;
      for (let cxj = 0; cxj < 7; cxj++) {
        const key = rxi + cxj;
        const day = data[key];
        const props = {
          unitType: unitType.DAY,
          key: key + initLength,
          minDate,
          maxDate,
          day,
          calendar,
          startDate,
          range,
          endDate,
          onDayMouseEnter,
          onDayClick
        };
        rows.push(props);
      }
      resolvedData.push(rows);
    }
    return resolvedData.map((rows, rowKey) => {
      const cell = rows.map(props => {
        const Component = cellMapper[props.unitType];
        return <Component {...props} />;
      });
      return <Tr key={rowKey}>{cell}</Tr>;
    });
  };
  render() {
    return <TBody>{this.renderCells()}</TBody>;
  }
}
