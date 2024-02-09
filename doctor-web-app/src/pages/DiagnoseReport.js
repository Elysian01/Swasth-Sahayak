import React, { useEffect, useState } from "react";
import Table from "../components/tables/Listings";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/misc/Navbar";

function DiagnoseReport() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9001/data");
        setTableData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    'Date',
    'Field Worker Assigned',
    'Questionnaire Score',
    'Diagnosis',
    'Prescription',
    'Comments'
  ]; 

  return (
    <div>
      <Navbar />
      <header class="main-header">Patient History</header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table columns={columns} data={tableData} />
      )}
    </div>
  );
}

export default DiagnoseReport;
