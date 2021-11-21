/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./myCalendar.scss";
import { buildCalendar } from "../helpers/helpers";
import AppointmentSlotList from "../appointmentSlotList/AppointmentSlotList";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [selected, setSelected] = useState(false);
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  const handleDateClick = (day, e) => {
    setValue(day);
    console.log(moment(day).format("LL"));
    if (moment(value).format("X") === e.target.id) {
      setSelected(!selected);
    } else {
      setValue(day);
      setSelected(true);
    }
  };

  return (
    <div className="barber-rsvp__appointment-page_calendar">
      <div
        className="rbc-calendar"
        style={{ height: "700px", maxWidth: "1050px", width: "100%" }}
      >
        <div className="rbc-month-view" role="table" aria-label="Month View">
          <h3 style={{ textAlign: "center" }}>
            {moment(value.toDate()).format("MMMM")}
          </h3>
          <div className="rbc-row rbc-month-header" role="row">
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Sun
              </span>
            </div>
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Mon
              </span>
            </div>
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Tue
              </span>
            </div>
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Wed
              </span>
            </div>
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Thu
              </span>
            </div>
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Fri
              </span>
            </div>
            <div className="rbc-header">
              <span role="columnheader" aria-sort="none">
                Sat
              </span>
            </div>
          </div>
          {calendar.map((week) => (
            <div className="rbc-month-row" role="rowgroup">
              <div className="rbc-row-bg">
                {week.map((day) => (
                  <div
                    key={moment(day.toDate()).format("X")}
                    id={moment(day.toDate()).format("X")}
                    className={`rbc-day-bg ${
                      value.isSame(day, "day") && selected ? "selected" : ""
                    } ${
                      !day._d
                        .toString()
                        .includes(moment(value.toDate()).format("MMM"))
                        ? "rbc-off-range-bg"
                        : ""
                    }`}
                    onClick={(e) => handleDateClick(day, e)}
                  ></div>
                ))}
              </div>
              <div className="rbc-row-content" role="row">
                <div className="rbc-row">
                  {week.map((day) => (
                    <>
                      {
                        <div
                          key={moment(day.toDate()).format("X")}
                          id={moment(day.toDate()).format("X")}
                          className={`rbc-date-cell ${
                            value.isSame(day, "day") && selected
                              ? "selected"
                              : ""
                          }`}
                          role="cell"
                          onClick={(e) => handleDateClick(day, e)}
                        >
                          <a
                            href="#"
                            role="cell"
                            className={`${
                              value.isSame(day, "day") && selected
                                ? "selected"
                                : ""
                            }`}
                          >
                            {day.format("D").toString()}
                          </a>
                        </div>
                      }
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {displayed && (
        <div className="barber-rsvp__appointment-page_modal">
          <AppointmentSlotList />
        </div>
      )}
    </div>
  );
};

export default Calendar;
