import { AiOutlineClockCircle } from "react-icons/ai";
import "./appointmentCard.scss";

const AppointmentCard = ({ timeSlot, availableBarbers }) => {
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

export default AppointmentCard;
