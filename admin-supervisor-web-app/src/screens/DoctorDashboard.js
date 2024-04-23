import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { getRequest } from "../components/Api/api";
import "../components/css/common.css";
import "./css/doctor-dashboard.css";
import GradientInput from "../components/inputs/GradientInput";
import Modal from "react-modal"; // Import react-modal
import { putRequest } from "../components/Api/api";
import PrimaryTable from "../components/tables/PrimaryTable";
function DoctorDashboard() {
  const [dropdown1Value, setDropdown1Value] = useState([]); // State for the first dropdown
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(""); // State for selected dropdown value
  const [doctorDetails, setDoctorDetails] = useState([]); // State for storing doctor details array
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State for storing selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility
  const [editedDoctor, setEditedDoctor] = useState(null); // State for storing edited doctor details

  const token = useSelector((state) => state.auth.token);
  const fetchDoctorDetails = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      // Await the API call
      const response = await getRequest("/admin/allDoctorDetail", headers);
      // Update the state with the fetched doctor details
      setDoctorDetails(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Call the fetchDoctorDetails function
    fetchDoctorDetails();
  }, []);

  // Function to handle opening the modal
  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setEditedDoctor(null);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <PageHeading title="Doctor Dashboard" />
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
        <button className="small-primary-btn">Add New Doctor</button>
      </div>
      <div className="view-pane">
        {/* Map over the doctor details array and render a display card for each doctor */}
        {doctorDetails.map((doctor, index) => (
          <div className="display-card" key={index}>
            <div className="person-details">
              <div className="person-name">Name: {doctor.name}</div>
              <div className="person-region">Region: {doctor.blockCode}</div>
              <div className="person-specialisation">
                Specialisation: {doctor.specialization}
              </div>
            </div>
            <div className="button-alignment">
              {/* Pass the doctor object to the openModal function */}
              <button
                className="dark-primary-small-btn"
                onClick={() => openModal(doctor)}
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
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken the background when the modal is open
          },
          content: {
            width: "80%", // Set the width to 60% of the viewport
            height: "80%", // Automatically adjust the height based on content
            margin: "auto", // Center the modal horizontally
            padding: "25px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",

            border: "none", // Remove border
          },
        }}
      >
        <div className="modal-view">
          <div className="modal-doctor-details">
            <h2>Doctor Details</h2>
            <button onClick={closeModal} className="dark-primary-small-btn">
              X
            </button>
          </div>
          {selectedDoctor && (
            <div className="modal-profile-details">
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td> {selectedDoctor.name} </td>
                  </tr>
                  <tr>
                    <td>Region:</td>
                    <td>{selectedDoctor.blockCode}</td>
                  </tr>
                  <tr>
                    <td>Specialisation:</td>
                    <td>{selectedDoctor.specialization}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{selectedDoctor.gender}</td>
                  </tr>
                  <tr>
                    <td>Mobile No:</td>
                    <td>{selectedDoctor.mobileno}</td>
                  </tr>
                  <tr>
                    <td>Pin Code:</td>
                    <td>{selectedDoctor.pinecode}</td>
                  </tr>
                  <tr>
                    <td>Working Address:</td>
                    <td>{selectedDoctor.workingaddress}</td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default DoctorDashboard;
