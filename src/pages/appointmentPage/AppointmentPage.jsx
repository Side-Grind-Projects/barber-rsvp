import React, { useState } from "react";
import "./appointmentPage.scss";
import { Navbar } from "../../components/";
import { AiOutlineClockCircle } from "react-icons/ai";

export const AppointmentCard = () => {
  return (
    <div className="barber-rsvp__appointment-page_appointment-card">
      <div>
        <div className="barber-rsvp__appointment-page_appointment-card_time-div">
          <AiOutlineClockCircle />
          <h3>9:00am - 10:00am</h3>
        </div>
        <p>1 SPACE AVAILABLE</p>
      </div>
      <button type="button">BOOK APPOINTMENT</button>
    </div>
  );
};

const testArray = [1, 2, 4];

const AppointmentPage = () => {
  const [dataSelect, setDateSelected] = useState(null);

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
      <div className="barber-rsvp__appointment-page_calendar">
        {true && (
          <>
            <div className="barber-rsvp__appointment-page_available-appointments-header">
              <h3>Available Appointments on November 20, 2021</h3>
            </div>
            <div className="barber-rsvp__appointment-page_available-appointments-container">
              {testArray.map(() => (
                <AppointmentCard />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
