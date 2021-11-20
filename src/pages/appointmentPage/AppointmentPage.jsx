import React, { useState } from "react";
import "./appointmentPage.scss";
import { MyCalendar, Navbar } from "../../components/";
import AppointmentSlotList from "../../components/appointmentSlotList/AppointmentSlotList";

const AppointmentPage = () => {
  const [dateSelected, setDateSelected] = useState(null);

  return (
    <div className="barber-rsvp__appointment-page">
      <div className="barber-rsvp__appointment-page_header">
        <Navbar />
        <h1>Appointment</h1>
      </div>
      <div className="barber-rsvp__appointment-page_dropdown-div">
        <h3>Filter by Barber</h3>
        <select>
          {/* Will be dynamic */}
          <option value="All Barbers">All Barbers</option>
          <option value="Zac Cumberlander">Zac Cumberlander</option>
          <option value="Nathan Burner">Nathan Burner</option>
        </select>
      </div>
      <MyCalendar setDateSelected={setDateSelected} />
      {true && <AppointmentSlotList />}
    </div>
  );
};

export default AppointmentPage;
