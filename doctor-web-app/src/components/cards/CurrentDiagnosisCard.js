import React from 'react';

function CurrentDiagnosisCard() {
  return (
    <div className="current-diagnosis-card">
      <img src="./static/slate.png" alt="" />
      <div className="col">
        <h1 className="col-heading">Assigned Field Worker</h1>
        <br />
        <p className="col-value">James Bond</p>
      </div>
      <div className="col">
        <h1 className="col-heading">Date</h1>
        <br />
        <p className="col-value">2nd Jan</p>
      </div>
      <div className="col">
        <h1 className="col-heading">View Artifacts</h1>
        <br />
        <p className="col-value">
          <img src="./static/icons/eye.png" alt="" />
        </p>
      </div>
      <div className="col">
        <h1 className="col-heading">Questionnaire Score</h1>
        <br />
        <p className="col-value">23/30</p>
      </div>
    </div>
  );
}

export default CurrentDiagnosisCard;
