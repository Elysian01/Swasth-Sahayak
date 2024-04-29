import "./css/common.css";
import "../components/css/listings.css";
import "./css/diagnose-report.css";
import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRequest } from "../components/Api/api";
function DiagnoseReport() {
  const [dates, setDates] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [fieldworkerComment,setfieldworkerComment]=useState("");
  const location = useLocation();
  const {state}=location;
  const patientId=state?state.patientId:null;
  const token = useSelector((state) => state.auth.token);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await getRequest(
          `/doctor/getdiagonosedetail/${patientId}`,
          headers
        );
        setfieldworkerComment(response.fieldworkercomment);
        setTableData(response.patientanswers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [patientId, token]);
  const handleSubmit = () => {
    // Perform submission logic here
    // For demonstration purposes, simply show an alert
    alert("Data submitted successfully!");
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

  const columns = ["question", "answer"];

  return (
    <div>
      <Navbar />
      <br />
      <h2 className="title">Diagnosed Report</h2>
      <br /> <br />
      
        <div className="quession-table">
          <Table columns={columns} data={tableData} />
          <button className="primary-btn">Go back to Patient Dashboard</button>
        </div>
        <div className="comment-date">
          <h3>Comments added by Field Worker</h3>
          <br />
          <div className="reading-box">
            {fieldworkerComment}
            <br />
          </div>
          <div className="button-style">
            <button className="primary-btn">Show Artifacts</button>
          </div>
          <h3>Prescription by Doctor</h3>
          <br />
          <div className="reading-box">
            <input />
            <br />
          </div>
          <div className="align-calendar">
            <br />
            <div className="date-box">
              <h3 className="select-dates">Selected Dates:</h3>
              <div className="calendar-container">
                <br />
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
              </div>
            </div>

            <div className="slected-dates">
              {dates.map((date, index) => (
                <div key={index} className="selected-date">
                  <button
                    className="green-btn"
                    onClick={() => removeDate(index)}
                  >
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
      
    </div>
  );
}

export default DiagnoseReport;
