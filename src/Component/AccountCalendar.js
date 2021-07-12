import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

function AccountCalendar() {
    const localizer = momentLocalizer(moment);

    const myEventsList = [
    {
        start : moment().add(1,'day').toDate(),
        end : moment().add(0,'days').toDate(),
        title : 'My plan'
    }
]
const click =() => {
        console.log('slm');
} 

    return (
        <div id = 'acc-calendar'>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                selectable
                resizeable
                
                style={{ height: 600 }}
            />
        </div>
    )
}

export default AccountCalendar
