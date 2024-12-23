import React, { useState } from "react";
import "../assets/styles/ScheduleCall.css";

const ScheduleButton = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div id="schedulecall" className="schedule-button-container">
            <h2 className="schedule-heading">Want to work with us?</h2>
            <button className="schedule-button" onClick={openModal}>
                Schedule Appointment
            </button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            ×
                        </button>
                        <iframe
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Z1J98-AUVIIHVmhJA8f9JpfIFnoooO7p7aYD6ySqHF15D4FMtpfM4EnohQrb1ro9ikcoDSWTv?gv=true"
                            title="Google Calendar Schedule"
                            className="calendar-iframe"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScheduleButton;
