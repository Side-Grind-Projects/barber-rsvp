import React from "react";
import { AppointmentCard } from "../../components";
import "./appointmentSlotList.scss";

const AppointmentSlotList = ({ availableSlots = [1, 2, 4] }) => {
  return (
    <div className="barber-rsvp__appointment-page_available-appointments">
      <div className="barber-rsvp__appointment-page_available-appointments-header">
        <h3>Available Appointments on November 20, 2021</h3>
      </div>
      <div className="barber-rsvp__appointment-page_available-appointments-container">
        {availableSlots.map((slot, i) => (
          <AppointmentCard slot={slot} key={slot + i} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentSlotList;
