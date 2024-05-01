import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-multi-date-picker";
import { useSelector } from "react-redux";
import Icon from "react-multi-date-picker/components/icon";
import SuperNavbar from "./components/SuperNavbar";
import PageHeading from "../../components/headers/PageHeading";
import { getRequest, putRequest } from "../../components/Api/api";
import "./css/MissedFollowup.css";

const MissedFollowup = () => {
  const token = useSelector((state) => state.auth.token);
  const [dates, setDates] = useState(null);
  const [followUp, setFollowUpDetails] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReassignModalOpen, setIsReassignModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // New state for selected date
  const [rescheduleid, setrescheduleid] = useState("");
  const [followupid, setfollowupid] = useState("");
  const fetchDetails = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest("/supervisor/get-data", headers);
      setFollowUpDetails(response);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    
    fetchDetails();
  }, []);

  const handleDateChange = (newDates) => {
    const selectedDate = Array.isArray(newDates) ? newDates[0] : newDates;
    const dateObject = new Date(selectedDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setDates(formattedDate);
    setSelectedDate(formattedDate); // Update selected date state
  };

  const openModal = (followUps) => {
    setSelectedPatient(followUps);
    
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };

  const openReassignModal = (followUps) => {
    console.log(followUps)
    setrescheduleid(followUps.rescheduleid);
    setfollowupid(followUps.followUpId);
    setIsReassignModalOpen(true);
  };

  const closeReassignModal = () => {
    setIsReassignModalOpen(false);
  };
  const uploadDate = async() => {
    console.log("Selected Date:", selectedDate);
    console.log("upload clicked");
    closeReassignModal();
    const data = {
      date: dates,
      followupid: followupid,
      rescheduledid: rescheduleid,
    };
    try {
      const headers = { Authorization: `Bearer ${token}` };
      await putRequest(
        `/supervisor/adjust-further-follow-up-dates`,
        data,
        headers
      );
      fetchDetails();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SuperNavbar />
      <PageHeading title="Missed Follow-ups" />

      {followUp.map((followUps, index) => (
        <div className="display-card" key={index}>
          <div className="person-details">
            <div className="person-name">Name: {followUps.patientName}</div>
            <div className="person-region">
              Contact: {followUps.patientContact}
            </div>
            <div className="person-specialisation">
              Remarks: {followUps.missedFollowUpRemarks}
            </div>
          </div>
          <div className="button-alignment">
            <button
              className="dark-primary-small-btn"
              onClick={() => openModal(followUps)}
            >
              View
            </button>
            <button
              className="dark-primary-small-btn"
              onClick={() => openReassignModal(followUps)}
            >
              Reassign
            </button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Patient Details Modal"
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            width: "60%",
            height: "60%",
            margin: "auto",
            padding: "25px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            border: "none",
          },
        }}
      >
        <div className="modal-view">
          <div className="modal-fieldworker-details">
            <h2>Patient Details</h2>
            <button onClick={closeModal} className="small-primary-btn">
              X
            </button>
          </div>
          {selectedPatient && (
            <div className="modal-fieldworker-profile-details">
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Patient Name: </div>
                <div className="modal-dynamic">
                  {selectedPatient.patientName}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Patient Contact:</div>
                <div className="modal-dynamic">
                  {selectedPatient.patientContact}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Missed Follow-Up Remarks:</div>
                <div className="modal-dynamic">
                  {selectedPatient.missedFollowUpRemarks}
                </div>
              </div>
              <br />
              <div className="modal-fieldworker-detail">
                <div className="modal-static">-Missed Follow-Ups Details:</div>
                <div className="modal-dynamic">
                  {selectedPatient.missedFollowUpsDetails.map(
                    (detail, index) => (
                      <div key={index}>
                        <br />
                        <div>{`Field Worker Name: ${detail.fieldWorkerName}`}</div>
                        <div>{`Field Worker Contact Number: ${detail.fieldWorkerContactNumber}`}</div>
                        <div>{`Date: ${detail.date}`}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* Reassign Modal */}
      <Modal
        isOpen={isReassignModalOpen}
        contentLabel="Reassign Modal"
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            width: "25%",
            height: "45%",
            margin: "auto",
            padding: "25px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            border: "none",
          },
        }}
      >
        <h2>Reassign Follow-up</h2>
        <div className="modal-reassign">
          <DatePicker
            inputClass="custom-date-picker"
            style={{
              width: "100%",
              boxSizing: "border-box",
            }}
            value={dates}
            onChange={handleDateChange}
            render={<Icon />}
          />
          <button className="small-primary-btn" onClick={uploadDate}>
            Submit
          </button>
        </div>
        {selectedDate && <div className="selected-dates">{selectedDate}</div>}
      </Modal>
    </div>
  );
};

export default MissedFollowup;
