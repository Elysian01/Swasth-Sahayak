import React from "react";
import "../css/cards.css";
import "../../pages/css/common.css";
import Eye from "../../static/icons/eye.png";
import Slate from "../../static/imgs/slate.png";
import { useNavigate } from "react-router-dom";
function CurrentDiagnosisCard({ data }) {
  const navigate = useNavigate();
  if (!data.prescription || data.prescription.length === 0) {
    return null; // Render nothing if prescription data is unavailable or empty
  }
  const lastPrescription = data.prescription[data.prescription.length - 1];
  const handleViewDiagnose=()=>{
    navigate("/diagnose-report");
  }
  return (
    <div className="current-diagnosis-card">
      <img src={Slate} alt="" />

      <div className="col">
        <h1 className="col-heading">Assigned Field Worker</h1>
        <br />
        <p className="col-value">{lastPrescription.feildworker}</p>
      </div>
      <div className="col">
        <h1 className="col-heading">Date</h1>
        <br />
        <p className="col-value">{lastPrescription.dateofprescription}</p>
      </div>
      <div className="col">
        <h1 className="col-heading">View Artifacts</h1>
        <br />
        <p className="col-value">
          <img src={Eye} alt="hello" />
        </p>
      </div>
      <div className="col">
        <button className="small-primary-btn" onClick={handleViewDiagnose}>View Diagnose</button>
      </div>
    </div>
  );
}

export default CurrentDiagnosisCard;
