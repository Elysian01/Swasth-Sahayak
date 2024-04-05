import "./css/common.css";
import "../components/css/listings.css";
import "./css/diagnose-report.css";
import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";

function DiagnoseReport() {
  const [dates, setDates] = useState([]);

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

  const columns = ["In last two weeks, how frequent were your concerns?", ""];
  const tableData = [
    {
      "In last two weeks, how frequent were your concerns?":
        "Little interest or pleasure in doing things",
      "": "Several days",
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Feeling down, depressed, or hopeless?",
      "": "Not at all",
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Trouble falling asleep, staying asleep, or sleeping too much?",
      "": "Fill out answer here", // You haven't provided an answer for this one
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Feeling tired or having little energy",
      "": "More than half the days",
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Thoughts that you would be better off dead or of hurting yourself in some way?",
      "": "Nearly every day",
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Poor appetite or overeating",
      "": "Not at all",
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
      "": "Several days",
    },
    {
      "In last two weeks, how frequent were your concerns?":
        "Trouble concentrating on things, such as reading the newspaper or watching television",
      "": "More than half the days",
    },
  ];

  return (
    <div>
      <Navbar />
      <br />
      <h2 className="title">Diagnosed Report</h2>
      <br />
      <div className="alignment">
        <div className="quession-table">
          <Table columns={columns} data={tableData} />
          <button className="primary-btn">Go back to Patient Dashboard</button>
        </div>
        <div className="comment-date">
          <h3>Comments added by Field Worker</h3>
          <br />
          <div className="reading-box">
            <p>
              This is some sample text for your reading passage. You can replace
              this with any text you want the user to read.
            </p>
            <br />
          </div>
          <div className="button-style">
            <button className="primary-btn">Show Artifacts</button>
          </div>
          <h3>Prescription by Doctor</h3>
          <br />
          <div className="reading-box">
            <p>
              This is some sample text for your reading passage. You can replace
              this with any text you want the user to read.
            </p>
            <br />
          </div>
          <div className="align-calendar">
            <br />
            <h3>Selected Dates:</h3>
            <div className="date-box">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnoseReport;
