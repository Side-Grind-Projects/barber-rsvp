import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./myCalendar.scss";
import { stringToDate } from "../helpers/helpers";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ setDateSelected }) => {
  return (
    <div className="barber-rsvp__appointment-page_calendar">
      <Calendar
        selected={[]}
        events={[]}
        components={{}}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        style={{ height: "700px", maxWidth: "1050px", width: "100%" }}
        selectable={true}
        onSelectSlot={(slotInfo) => {
          // eslint-disable-next-line array-callback-return
          slotInfo.slots.map((slot) => {
            setDateSelected(stringToDate(slot));
          });
        }}
        toolbar={false}
      />
    </div>
  );
};

export default MyCalendar;
