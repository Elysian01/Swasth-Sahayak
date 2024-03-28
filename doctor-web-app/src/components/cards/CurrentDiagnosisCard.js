import React from 'react';
import "../css/cards.css";
import Eye from "../../static/icons/eye.png"
function CurrentDiagnosisCard({data}) {
  if (!data.prescription || data.prescription.length === 0) {
    return null; // Render nothing if prescription data is unavailable or empty
  }
  const lastPrescription = data.prescription[data.prescription.length - 1];
  return (
    <div className="current-diagnosis-card">
      <img src="./static/slate.png" alt="" />
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
    </div>
  );
}

export default CurrentDiagnosisCard;
