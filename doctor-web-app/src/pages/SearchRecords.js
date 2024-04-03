import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import "./css/searchRecords.css";
import Navbar from "../components/misc/Navbar";
import viewIcon from "../static/icons/eye.png";

function SearchRecords() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdown1Value, setDropdown1Value] = useState(""); // State for the first dropdown
  const [dropdown2Value, setDropdown2Value] = useState(""); // State for the second dropdown

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get("http://localhost:9001/data");
        const response = {
          "data": [
            {
              "Patient Name": "Domenic",
              "Date": "1",
              "Score": "88,110",
              "Region": "North",
              "Disease Name": "Fever",
              "Diagnosis": "https://example.com/diagnosis/domenic",
              "Prescription": "https://example.com/prescription/domenic"
            },
            {
              "Patient Name": "Sally",
              "Date": "2",
              "Score": "72,400",
              "Region": "South",
              "Disease Name": "Headache",
              "Diagnosis": "https://example.com/diagnosis/sally",
              "Prescription": "https://example.com/prescription/sally"
            },
            {
              "Patient Name": "Nick",
              "Date": "3",
              "Score": "52,300",
              "Region": "East",
              "Disease Name": "Cold",
              "Diagnosis": "https://example.com/diagnosis/nick",
              "Prescription": "https://example.com/prescription/nick"
            },
            {
              "Patient Name": "Emma",
              "Date": "4",
              "Score": "65,220",
              "Region": "West",
              "Disease Name": "Sore Throat",
              "Diagnosis": "https://example.com/diagnosis/emma",
              "Prescription": "https://example.com/prescription/emma"
            },
            {
              "Patient Name": "Alex",
              "Date": "5",
              "Score": "78,500",
              "Region": "North",
              "Disease Name": "Allergy",
              "Diagnosis": "https://example.com/diagnosis/alex",
              "Prescription": "https://example.com/prescription/alex"
            },
            {
              "Patient Name": "Olivia",
              "Date": "6",
              "Score": "90,300",
              "Region": "South",
              "Disease Name": "Stomachache",
              "Diagnosis": "https://example.com/diagnosis/olivia",
              "Prescription": "https://example.com/prescription/olivia"
            },
            {
              "Patient Name": "James",
              "Date": "7",
              "Score": "45,600",
              "Region": "East",
              "Disease Name": "Migraine",
              "Diagnosis": "https://example.com/diagnosis/james",
              "Prescription": "https://example.com/prescription/james"
            },
            {
              "Patient Name": "Sophia",
              "Date": "8",
              "Score": "55,420",
              "Region": "West",
              "Disease Name": "Flu",
              "Diagnosis": "https://example.com/diagnosis/sophia",
              "Prescription": "https://example.com/prescription/sophia"
            },
            {
              "Patient Name": "William",
              "Date": "9",
              "Score": "70,810",
              "Region": "North",
              "Disease Name": "Rash",
              "Diagnosis": "https://example.com/diagnosis/william",
              "Prescription": "https://example.com/prescription/william"
            },
            {
              "Patient Name": "Ava",
              "Date": "10",
              "Score": "80,700",
              "Region": "South",
              "Disease Name": "Fever",
              "Diagnosis": "https://example.com/diagnosis/ava",
              "Prescription": "https://example.com/prescription/ava"
            },
            {
              "Patient Name": "Michael",
              "Date": "11",
              "Score": "63,900",
              "Region": "East",
              "Disease Name": "Cough",
              "Diagnosis": "https://example.com/diagnosis/michael",
              "Prescription": "https://example.com/prescription/michael"
            },
            {
              "Patient Name": "Isabella",
              "Date": "12",
              "Score": "75,600",
              "Region": "West",
              "Disease Name": "Headache",
              "Diagnosis": "https://example.com/diagnosis/isabella",
              "Prescription": "https://example.com/prescription/isabella"
            },
            {
              "Patient Name": "Matthew",
              "Date": "13",
              "Score": "82,400",
              "Region": "North",
              "Disease Name": "Sore Throat",
              "Diagnosis": "https://example.com/diagnosis/matthew",
              "Prescription": "https://example.com/prescription/matthew"
            },
            {
              "Patient Name": "Emily",
              "Date": "14",
              "Score": "68,300",
              "Region": "South",
              "Disease Name": "Stomachache",
              "Diagnosis": "https://example.com/diagnosis/emily",
              "Prescription": "https://example.com/prescription/emily"
            },
            {
              "Patient Name": "Christopher",
              "Date": "15",
              "Score": "50,200",
              "Region": "East",
              "Disease Name": "Allergy",
              "Diagnosis": "https://example.com/diagnosis/christopher",
              "Prescription": "https://example.com/prescription/christopher"
            },
            {
              "Patient Name": "Madison",
              "Date": "16",
              "Score": "95,800",
              "Region": "West",
              "Disease Name": "Flu",
              "Diagnosis": "https://example.com/diagnosis/madison",
              "Prescription": "https://example.com/prescription/madison"
            },
            {
              "Patient Name": "Jacob",
              "Date": "17",
              "Score": "42,600",
              "Region": "North",
              "Disease Name": "Migraine",
              "Diagnosis": "https://example.com/diagnosis/jacob",
              "Prescription": "https://example.com/prescription/jacob"
            },
            {
              "Patient Name": "Abigail",
              "Date": "18",
              "Score": "58,900",
              "Region": "South",
              "Disease Name": "Rash",
              "Diagnosis": "https://example.com/diagnosis/abigail",
              "Prescription": "https://example.com/prescription/abigail"
            },
            {
              "Patient Name": "Ethan",
              "Date": "19",
              "Score": "76,400",
              "Region": "East",
              "Disease Name": "Fever",
              "Diagnosis": "https://example.com/diagnosis/ethan",
              "Prescription": "https://example.com/prescription/ethan"
            },
            {
              "Patient Name": "Charlotte",
              "Date": "20",
              "Score": "85,100",
              "Region": "West",
              "Disease Name": "Cough",
              "Diagnosis": "https://example.com/diagnosis/charlotte",
              "Prescription": "https://example.com/prescription/charlotte"
            }
          ]
        }
        
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filters based on dropdown values
    let filtered = tableData;
    if (dropdown1Value && !dropdown2Value) {
      filtered = filtered.filter((row) => row["Region"] === dropdown1Value);
    } else if (!dropdown1Value && dropdown2Value) {
      filtered = filtered.filter(
        (row) => row["Disease Name"] === dropdown2Value
      );
    } else if (dropdown1Value && dropdown2Value) {
      filtered = filtered.filter(
        (row) =>
          row["Region"] === dropdown1Value &&
          row["Disease Name"] === dropdown2Value
      );
    }
    setFilteredData(filtered);
  }, [tableData, dropdown1Value, dropdown2Value]);

  const handleViewClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };

  const columns = [
    "Patient Name", // Change from "Name" to "Patient Name"
    "Date", // Added "Date"
    "Score",
    "Diagnosis",
    "Prescription", // Added "Prescription"
  ];

  const renderDiagnosis = (diagnosisUrl) => (
    <button
      onClick={() => handleViewClick(diagnosisUrl)}
      className="view-button"
    >
      <img src={viewIcon} alt="View Diagnosis" />
    </button>
  );

  const renderPrescription = (prescriptionUrl) => (
    <button
      onClick={() => handleViewClick(prescriptionUrl)}
      className="view-button"
    >
      <img src={viewIcon} alt="View Prescription" />
    </button>
  );

  // Extracting dropdown options from tableData
  const dropdown1Options = tableData
    .map((row) => row["Region"])
    .filter((value, index, self) => self.indexOf(value) === index);
  const dropdown2Options = tableData
    .map((row) => row["Disease Name"])
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div>
      <Navbar />
      <div className="table-container">
        <header className="main-header">Search Records</header>
        <div className="dropdown-container">
          {/* First Dropdown */}
          <select
            value={dropdown1Value}
            onChange={(e) => setDropdown1Value(e.target.value)}
          >
            <option value="">Select Option</option>
            {dropdown1Options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* Second Dropdown */}
          <select
            value={dropdown2Value}
            onChange={(e) => setDropdown2Value(e.target.value)}
          >
            <option value="">Select Choice</option>
            {dropdown2Options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table
            columns={columns}
            data={filteredData.map((row) => ({
              ...row,
              Diagnosis: renderDiagnosis(row.Diagnosis),
              Prescription: renderPrescription(row.Prescription),
            }))}
          />
        )}
      </div>
    </div>
  );
}

export default SearchRecords;
