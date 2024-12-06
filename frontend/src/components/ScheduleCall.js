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
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3QBQcwv8xMymBUKeSqUe0u4Cr3RCd57Vu52G8QU1t30VCyik4qWcTiM_9_zl_o5oEmaSwp1vWX?gv=true"
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
