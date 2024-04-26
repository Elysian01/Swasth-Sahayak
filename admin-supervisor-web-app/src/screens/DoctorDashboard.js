import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal"; // Import react-modal
import { useNavigate } from "react-router-dom";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { getRequest } from "../components/Api/api";
import GradientInput from "../components/inputs/GradientInput";

import "../components/css/common.css";
import "./css/doctor-dashboard.css";

function DoctorDashboard() {
  const [doctorDetails, setDoctorDetails] = useState([]); // State for storing doctor details array
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State for storing selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const filteredDoctors = doctorDetails.filter((doctor) => {
    const nameMatch = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const regionMatch = doctor.blockCode
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const specialisationMatch = doctor.specialization
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || regionMatch || specialisationMatch;
  });

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
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (doctor) => {
    navigate("/edit-doctor", { state: { doctor } });
    fetchDoctorDetails();
  };
  const addNewDoctor=()=>{
    navigate("/add-doctor")
  }

  return (
    <div>
      <Navbar />
      <PageHeading title="Doctor Dashboard" />
      <div className="dropdown-container">
        <GradientInput
          type="text"
          placeholder="Search by Name, Region, or Specialisation"
          name="Search by Name, Region, or Specialisation"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="small-primary-btn" onClick={addNewDoctor}>Add New Doctor</button>
      </div>
      <div className="view-pane">
        {/* Map over the doctor details array and render a display card for each doctor */}
        {filteredDoctors.map((doctor, index) => (
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
              <button
                onClick={() => handleEdit(doctor)}
                className="dark-primary-small-btn"
              >
                Edit
              </button>
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
          <div className="modal-doctor-details">
            <h2>Doctor Details</h2>
            <button onClick={closeModal} className="small-primary-btn">
              X
            </button>
          </div>
          {selectedDoctor && (
            <div className="modal-profile-details">
              <div className="modal-doctor-details">
                <div className="modal-static">-Name: </div>
                <div className="modal-dynamic">{selectedDoctor.name}</div>
              </div>
              <div className="modal-doctor-details">
                <div className="modal-static">-Region:</div>
                <div className="modal-dynamic">{selectedDoctor.blockCode}</div>
              </div>
              <div className="modal-doctor-details">
                <div className="modal-static">-Specialisation:</div>
                <div className="modal-dynamic">
                  {selectedDoctor.specialization}
                </div>
              </div>
              <div className="modal-doctor-details">
                <div className="modal-static">-Gender:</div>
                <div className="modal-dynamic">{selectedDoctor.gender}</div>
              </div>
              <div className="modal-doctor-details">
                <div className="modal-static">-Mobile No:</div>
                <div className="modal-dynamic">{selectedDoctor.mobileno}</div>
              </div>
              <div className="modal-doctor-details">
                <div className="modal-static">-Pin Code:</div>
                <div className="modal-dynamic">{selectedDoctor.pinecode}</div>
              </div>
              <div className="modal-doctor-details">
                <div className="modal-static">-Working Address:</div>
                <div className="modal-dynamic">
                  {selectedDoctor.workingaddress}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default DoctorDashboard;
