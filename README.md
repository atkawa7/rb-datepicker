# react-bootstrap-date-picker

## Description

A date/time picker for react using bootstrap. This is a a pure react port of
[bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker)

## Installing

    `yarn add bootstrap bootstrap-daterangepicker react prop-types rb-datepicker dayjs`

## Usage

```javascript
import React from 'react';
import {LinkedCalendar} from 'rb-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

class ExampleComponent extends React.Component {
    onDatesChange = ({ startDate, endDate }) => {
        console.log(({ startDate, endDate }));
    }
    render() {
        return (
            <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
        );
    }
}

```

## Documentation

For in depth documentation, see the original
[bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker) project page.