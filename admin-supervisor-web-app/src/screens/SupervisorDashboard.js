import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal"; // Import react-modal
import { useNavigate } from "react-router-dom";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { getRequest,deleteRequest } from "../components/Api/api";
function GradientInput(props) {
  return (
    <div className="form__group field">
      <input
        type={props.type}
        className="form__field"
        placeholder={props.name}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        required
        style={props.style} 
      />
      <label htmlFor={props.name} className="form__label">
        {props.name}
      </label>
    </div>
  );
}
function SupervisorDashboard() {
  const [FieldWorkerDetails, setFieldWorkerDetails] = useState([]); // State for storing doctor details array
  const [selectedFieldWorker, setSelectedFieldWorker] = useState(null); // State for storing selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  
  const fetchFieldWorkerDetails = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      // Await the API call
      const response = await getRequest(
        "/admin/allsupervisordetail",
        headers
      );
      console.log(response)
      // Update the state with the fetched doctor details
      setFieldWorkerDetails(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Call the fetchDoctorDetails function
    fetchFieldWorkerDetails();
  }, []);
  // Function to handle opening the modal
  const openModal = (fieldworker) => {
    setSelectedFieldWorker(fieldworker);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (fieldworker) => {
    navigate("/edit-supervisor", { state: { fieldworker } });
  };

  const handleInactive = async (fieldworker) => {
    // console.log(doctor.doctorId);
    const id = fieldworker.supervisorid;
    try {
      const headers = { Authorization: `Bearer ${token}` };
      // Await the API call
      const status = 1 - fieldworker.status;
      const response = await deleteRequest(
        `/admin/deletesupervisor/${id}`,
        headers
      );
      fetchFieldWorkerDetails();
      
    } catch (error) {
      console.error(error);
    }
  };
	return (
		<div>
			<Navbar />
			<PageHeading title="Supervisor Dashboard" />
			<div className="dropdown-container">
      <GradientInput
          type="text"
          placeholder="Search by Name and Supervisor ID"
          name="Search by Name and Supervisor ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="small-primary-btn">Add New Supervisor</button>
      </div>
			<div className="view-pane">
        {FieldWorkerDetails.map((fieldworker, index) => (
          <div className="display-card" key={index}>
            <div className="person-details">
              <div className="person-name">Name: {fieldworker.name}</div>
              <div className="person-region">
                Field Worker ID: {fieldworker.supervisorid}
              </div>
              <div className="person-specialisation">
                Gender: {fieldworker.gender}
              </div>
            </div>
            <div className="button-alignment">
              <button
                className="dark-primary-small-btn"
                onClick={() => openModal(fieldworker)}
              >
                View
              </button>
              <button
              onClick={() => handleEdit(fieldworker)}
              className="dark-primary-small-btn">Edit</button>
              
              <button className="pink-btn" onClick={() => handleInactive(fieldworker)}>Inactive</button>
            </div>
          </div>
        ))}
      </div>
      {/* Use react-modal for the modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Doctor Details Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background when the modal is open
          },
          content: {
            width: "30%", // Set the width to 60% of the viewport
            height: "60%", // Automatically adjust the height based on content
            margin: "auto", // Center the modal horizontally
            padding: "25px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",

            border: "none", // Remove border
          },
        }}
      >
        <div className="modal-view">
          <div className="modal-fieldworker-details">
            <h2>Supervisor Details</h2>
            <button onClick={closeModal} className="dark-primary-small-btn">
              X
            </button>
          </div>
          {selectedFieldWorker && (
            <div className="modal-fieldworker-profile-details">
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Name: </div>
                <div className="modal-dynamic">{selectedFieldWorker.name}</div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Gender:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.gender}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Mobile No:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.mobileno}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Fieldworker ID:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.supervisorid}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
		</div>
	);
}

export default SupervisorDashboard;
