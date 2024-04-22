import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import "../components/css/common.css";
import "./css/field-worker-dashboard.css";
import { getRequest } from "../components/Api/api";
import Modal from "react-modal"; // Import react-modal
function FieldWorkerDashboard() {
  const [dropdown1Value, setDropdown1Value] = useState([]); // State for the first dropdown
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(""); // State for selected dropdown value
  const [FieldWorkerDetails, setFieldWorkerDetails] = useState([]); // State for storing doctor details array
  const [selectedFieldWorker, setSelectedFieldWorker] = useState(null); // State for storing selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    const fetchFieldWorkerDetails = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        // Await the API call
        const response = await getRequest(
          "/admin/allfieldworkerDetail",
          headers
        );
        // Update the state with the fetched doctor details
        setFieldWorkerDetails(response);
      } catch (error) {
        console.error(error);
      }
    };
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
  return (
    <div>
      <Navbar />
      <PageHeading title="Field Worker Dashboard" />
      <div className="dropdown-container">
        <div className="dropdown">
          {/* First Dropdown */}
          <select
            value={selectedDropdownValue}
            onChange={(e) => setSelectedDropdownValue(e.target.value)}
          >
            <option value="">Select Region</option>
            {dropdown1Value.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button className="small-primary-btn">Search</button>
        <button className="small-primary-btn">Add New Field Worker</button>
      </div>
      <div className="view-pane">
        {FieldWorkerDetails.map((fieldworker, index) => (
          <div className="display-card" key={index}>
            <div className="person-details">
              <div className="person-name">Name: {fieldworker.name}</div>
              <div className="person-region">
                Field Worker ID: {fieldworker.fieldworkerid}
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
              <button className="dark-primary-small-btn">Edit</button>
              <button className="pink-btn">Inactive</button>
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken the background when the modal is open
          },
          content: {
            width: "60%", // Set the width to 60% of the viewport
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
            <h2>Field Worker Details</h2>
            <button onClick={closeModal} className="dark-primary-small-btn">
              X
            </button>
          </div>
          {selectedFieldWorker && (
            <div className="modal-fieldworker-profile-details">
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{selectedFieldWorker.name}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{selectedFieldWorker.gender}</td>
                  </tr>
                  <tr>
                    <td>Mobile No:</td>
                    <td>{selectedFieldWorker.mobileno}</td>
                  </tr>
                  <tr>
                    <td>Fieldworker ID:</td>
                    <td>{selectedFieldWorker.fieldworkerid}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default FieldWorkerDashboard;
