import "./css/common.css";
import "../components/css/listings.css";
import "./css/diagnose-report.css";
import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import { setPids } from "../login/authSlice";
import Modal from "react-modal"; // Import react-modal
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRequest, postRequest } from "../components/Api/api";
function DiagnoseReport() {
  const user = useSelector((state) => state.auth.user);
  const [dates, setDates] = useState([]);
  const [diagnoseDate, setDiagnoseDate] = useState("");
  const [tableData, setTableData] = useState([]);
  const [firstDate, setFirstDate] = useState("");
  const [images, setImages] = useState([]);
  const [dieseaseData, setDieseaseData] = useState([]);
  const [uploadDiesease, setUploadDiesease] = useState(
    "select questionare name"
  );
  const [fieldworkerComment, setfieldworkerComment] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doctorPrescription, setDoctorPrescription] = useState("");
  const [doctorComment, setDoctorComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const { state } = location;
  const patientId = state ? state.patientId : null;
  const diagnoseID = state ? state.diagnoseID : null;
  const [uploadDieseaseError, setuploadDieseaseError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pids = useSelector((state) => state.auth.pids); // Assuming auth is the name of your slice
  const sendPatientId = useSelector((state) => state.auth.sendPatientId);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
     console.log("this patiient id need to send:"+sendPatientId);
    getDiesease();
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(
        `/doctor/getdiagonosedetail/${diagnoseID}`,
        headers
      );
      console.log(response);
      setfieldworkerComment(response.fieldworkercomment);
      setTableData(response.patientanswers);
      setFirstDate(response.date);
      setDiagnoseDate(response.diagonsedate);
      if (response.icd10) setUploadDiesease(response.icd10);
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
  const setDiesease = (event) => {
    const value = event.target.value;
    if (value != "select questionare name") {
      setUploadDiesease(value);
      setuploadDieseaseError("");
    } else setuploadDieseaseError("select questionare name");
  };
  const handleSubmit = async () => {
    if (uploadDiesease == "select questionare name") {
      setuploadDieseaseError("select questionare name");
      return;
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;
    const formattedDates = dates.map((date) => date.format("YYYY-MM-DD"));
    const data = {
      pid: patientId,
      prescriptiondate: date,
      prescription: doctorPrescription,
      doctorcomment: doctorComment,
      diseasename: uploadDiesease,
      doctorid: user,
      followUpDate: formattedDates,
      diagnosisid: diagnoseID,
    };
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await postRequest(
        `/doctor/addprescription`,
        data,
        headers
      );
      dispatch(setPids([...pids, response.pid])); // Assuming pids is already defined

      navigate("/doctor-dashboard");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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

  const handlePrescriptionChange = (event) => {
    setDoctorPrescription(event.target.value);
  };

  const handleCommentChange = (event) => {
    setDoctorComment(event.target.value);
  };

  // Function to handle opening the modal
  const openModal = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(
        `/doctor/download_images/${sendPatientId}/${diagnoseDate}`,
        headers
      );
      console.log("artificats array:", response);
      const imageElements = response.map((base64String) => {
        const img = new Image();
        img.src = `data:image/jpeg;base64,${base64String.image}`;
        return img;
      });
      setImages(imageElements);
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
      <style>
        {`
          .error-message {
            color: #ff0000; /* Red color for the error message */
            background-color: #ffebeb; /* Light red background */
            border: 1px solid #ff0000; /* Red border */
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            text-align: left;
          }
        `}
      </style>
      <Navbar />
      <br />
      <h2 className="title">Diagnosed Report</h2>
      <br /> <br />
      <div className="quession-table">
        <Table columns={columns} data={tableData} />
        <br />
        <br />
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
        <textarea
          className="reading-box"
          value={doctorPrescription}
          onChange={handlePrescriptionChange}
        />
        <br />
        <br />
        <h3>Comments by Doctor</h3>
        <br />
        {/* <div className="reading-box"> */}
        <textarea
          className="reading-box"
          value={doctorComment}
          onChange={handleCommentChange}
        />
        <br />
        {/* </div> */}
        <div className="align-calendar">
          <br />
          <br />
          <div className="date-box">
            <h3 className="select-dates">
              {!firstDate ? "Selected Dates:" : firstDate}
            </h3>

            <div className="calendar-container">
              {!firstDate && (
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
              )}
              <select
                onChange={setDiesease}
                className="form__field"
                value={uploadDiesease}
              >
                <option value="select questionare name">
                  select questionare name
                </option>
                {dieseaseData.map((disease) => (
                  <option
                    value={disease.diseasename}
                  >{`${disease.diseasename} : ${disease.icd10}`}</option>
                ))}
              </select>
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
          {uploadDieseaseError && (
            <div className="error-message">{uploadDieseaseError}</div>
          )}
          <button className="primary-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Doctor Details Modal"
        shouldCloseOnOverlayClick={true} // Close the modal when clicking anywhere outside
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background when the modal is open
          },
          content: {
            width: "60%", // Set the width to 60% of the viewport
            height: "95%", // Automatically adjust the height based on content
            margin: "auto", // Center the modal horizontally
            padding: "25px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            border: "none", // Remove border
          },
        }}
      >
        {images[currentIndex] && (
          <img
            src={images[currentIndex].src}
            alt="Doctor Image"
            style={{ width: "100%", height: "auto" }}
          />
        )}
        <div className="align-button">
          {images.length > 1 && (
            <button onClick={goToPrevious} className="medium-primary-btn">
              Previous
            </button>
          )}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {currentIndex + 1} of {images.length}
          </div>
          {images.length > 1 && (
            <button onClick={goToNext} className="medium-primary-btn">
              Next
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default DiagnoseReport;
