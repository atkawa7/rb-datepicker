/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import '@storybook/addon-console';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { LinkedCalendar, UnlinkedCalendar, Calendar } from "../src";


class StoryComponent extends React.Component {
    onDatesChange = ({ startDate, endDate }) => {
        console.log(({ startDate, endDate }));
    }
    render() {
        const { component: Component } = this.props;
        return (
            <Component onDatesChange={this.onDatesChange} showDropdowns={false} />
        );
    }
}

storiesOf("Linked Calendar", module).add("default", () => <StoryComponent component={LinkedCalendar} />);
storiesOf("Single Calendar With Range Support", module).add("default", () => <StoryComponent component={Calendar} />);
storiesOf("Unlinked Calendar", module).add("default", () => <StoryComponent component={UnlinkedCalendar} />);
