import React from "react";
import { useState,useEffect } from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import QuestionnaireCard from "../components/cards/QuestionnaireCard";
import "../components/css/primaryTable.css";
import viewIcon from "../static/icons/eye.png";
import { Link } from "react-router-dom";
import PrimaryTable from "../components/tables/PrimaryTable";
import GradientInput from "../components/inputs/GradientInput";


function QuestionnaireDashboard() {
  // const questionnaireData = [
  //   {
  //     id: 1,
  //     name: "Attention-deficit hyperactivity disorder, predominantly hyperactive type",
  //     status: "active",
  //   },
  //   {
  //     id: 2,
  //     name: "Bipolar disorder, current episode hypomanic",
  //     status: "active",
  //   },
  //   {
  //     id: 3,
  //     name: "Attention-deficit hyperactivity disorder, combined type",
  //     status: "inactive",
  //   },
  // ];

  const [searchedQuestionnaireName, setSearchedQuestionnaireName] =
    useState("");
  const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(true);

  function setName(e) {
    setSearchedQuestionnaireName(e.target.value);
  }

  const searchQuestionnaire = async () => {
    console.log("Searching...");
  };

  function createQuestionnaire() {}

  const columns = ["ID", "Questionnaire Name", "Status", "View Questionnaire"];

	useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:9001/data");
        const response = {
					data: [
						{
							id: 1,
							questionnaireName: "Doe",
							status: "Active",
							view: "https://example.com",
						},
						{
							id: 2,
							questionnaireName: "question 2",
							status: "Inactive",
							view: "https://example.com",
						},
						{
							id: 3,
							questionnaireName: "question 3",
							status: "Active",
							view: "https://example.com",
						},
					],
				};

        setTableData(response.data); // Accessing data property of the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const renderViewButton = (viewUrl) => (
    <button onClick={() => handleViewClick(viewUrl)} className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );
  const handleViewClick = (viewUrl) => {
    window.open(viewUrl, "_blank");
  };
  const getStatusClassName = (status) => {
    if (status === "Active") {
      return "status-active"; // Apply CSS class for cured status
    } else if (status === "Inactive") {
      return "status-inactive"; // Apply CSS class for severe status
    }
  };
  return (
    <div>
      <Navbar />
      <PageHeading title="Questionnaire Dashboard" />
      <div className="container">
        <div className="search">
          <GradientInput name="Questionnaire Name" onChange={setName}
            value={searchedQuestionnaireName}/>
          {/* <input
            className="search-input"
            type="text"
            placeholder="Enter Questionnaire Name"
            spellCheck={false}
            autoComplete="on"
            onChange={setName}
            value={searchedQuestionnaireName}
          /> */}
          <button className="search-btn">Search</button>
          <Link to="/questionnaire-configurations">
            <button onClick={createQuestionnaire} className="create-btn">
              Create New Questionnaire
            </button>
          </Link>
        </div>
       
      </div>
			<PrimaryTable
          columns={columns}
          data={tableData.map((row) => ({
            ID: row.id,
            "Questionnaire Name": row.questionnaireName,
            Status: (
              <span className={getStatusClassName(row.status)}>
                {row.status}
              </span>
            ),
            Disease: row.disease,
            "View Questionnaire": renderViewButton(row.view),
          }))}
        />
    </div>
  );
}

export default QuestionnaireDashboard;
