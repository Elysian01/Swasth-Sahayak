import "./css/common.css";
import "../components/css/listings.css";
import "./css/diagnose-report.css";
import Table from "../components/tables/Listings";
import Navbar from "../components/misc/Navbar";

import { useState } from "react";

import DatePicker from "react-multi-date-picker";

function DiagnoseReport() {
  const [dates, setDates] = useState([]);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const handleDateChange = (value) => {
    setDates(value);
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
          <div className="reading-box">
            <p>
              This is some sample text for your reading passage. You can replace
              this with any text you want the user to read.
            </p>
          </div>
          <div className="button-style">
            <button className="primary-btn">Show Artifacts</button>
          </div>
          <h3>Prescription by Doctor</h3>
          <div className="reading-box">
            <p>
              This is some sample text for your reading passage. You can replace
              this with any text you want the user to read.
            </p>
          </div>
          <button
            className="primary-btn"
            onClick={() => setOpenDatePicker(true)}
          >
            Select Dates
          </button>
          {openDatePicker && (
            <DatePicker
							inputClass="custom-calendar"
              multiple
              value={dates}
              onChange={handleDateChange}
              onClose={() => setOpenDatePicker(false)}
            />
          )}
          <div>
            <h3>Selected Dates:</h3>
            {dates.map((date, index) => (
              <p key={index}>{date.format("YYYY-MM-DD")}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnoseReport;
