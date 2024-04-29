import "./css/common.css";
import "../components/css/listings.css";
import "./css/diagnose-report.css";
import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import Modal from "react-modal"; // Import react-modal
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRequest } from "../components/Api/api";
function DiagnoseReport() {
  const [dates, setDates] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [firstDate, setFirstDate] = useState("");
  const [images, setImages] = useState([]);
  const [dieseaseData, setDieseaseData] = useState([]);
  const [fieldworkerComment, setfieldworkerComment] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const patientId = state ? state.patientId : null;
  const diagnoseID = state ? state.diagnoseID : null;
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    getDiesease();
    fetchData();
  }, [patientId, token]);
  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(
        `/doctor/getdiagonosedetail/${diagnoseID}`,
        headers
      );
      setfieldworkerComment(response.fieldworkercomment);
      setTableData(response.patientanswers);
      setFirstDate(response.date);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getDiesease = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(`/doctor/diseasename`, headers);
      setDieseaseData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = () => {
    // Perform submission logic here
    // For demonstration purposes, simply show an alert
    alert("Data submitted successfully!");
  };
  const handleNavigate = () => {
    navigate("/patient-dashboard", { state: { patientId } });
  };
  const handleDateChange = (values) => {
    // Convert values to an array if it's not already one
    const selectedDates = Array.isArray(values) ? values : [values];

    // Filter out any duplicate dates
    const uniqueDates = selectedDates.filter(
      (date, index) => selectedDates.indexOf(date) === index
    );

    // Update state with unique dates
    setDates(uniqueDates);
  };
  const removeDate = (indexToRemove) => {
    setDates((prevDates) =>
      prevDates.filter((_, index) => index !== indexToRemove)
    );
  };

  // Function to handle opening the modal
  const openModal = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(
        `/doctor/download_images/${patientId}`,
        headers
      );
      setImages(response.image);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const columns = ["question", "answer"];

  return (
    <div>
      <Navbar />
      <br />
      <h2 className="title">Diagnosed Report</h2>
      <br /> <br />
      <div className="quession-table">
        <Table columns={columns} data={tableData} />
        <br />
        <br />
        <button className="primary-btn" onClick={handleNavigate}>
          Go back to Patient Dashboard
        </button>
      </div>
      <div className="comment-date">
        <h3>Comments added by Field Worker</h3>
        <br />
        <div className="reading-box">
          {fieldworkerComment}
          <br />
        </div>
        <br />
        <div className="button-style">
          <button className="primary-btn" onClick={() => openModal()}>
            Show Artifacts
          </button>
        </div>
        <h3>Prescription by Doctor</h3>
        <br />
        {/* <div className="reading-box"> */}
        <textarea className="reading-box" />
        <br />
        {/* </div> */}
        <div className="align-calendar">
          <br />
          <div className="date-box">
            <h3 className="select-dates">
              {!firstDate ? "Selected Dates:" : firstDate}
            </h3>

            <div className="calendar-container">
              <br />
              {!firstDate ? (
                <DatePicker
                  inputClass="custom-date-picker"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                  multiple
                  value={dates}
                  onChange={handleDateChange}
                  render={<Icon />}
                />
              ) : (
                <select onClick={getDiesease} className="form__field">
                  {dieseaseData.map((disease) => (
                    <option
                      key={disease.icd10}
                    >{`${disease.diseasename} : ${disease.icd10}`}</option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <div className="slected-dates">
            {dates.map((date, index) => (
              <div key={index} className="selected-date">
                <button className="green-btn" onClick={() => removeDate(index)}>
                  {date.format("YYYY-MM-DD")} ✖
                </button>
              </div>
            ))}
          </div>
          <button className="primary-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
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
        <img
          src={images[currentIndex]}
          alt="Doctor Image"
          style={{ width: "100%", height: "auto" }}
        />
        <button onClick={goToPrevious}>Previous</button>
        <button onClick={goToNext}>Next</button>
      </Modal>
    </div>
  );
}

export default DiagnoseReport;
