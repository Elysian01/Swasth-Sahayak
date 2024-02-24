import React from 'react';
import "../css/cards.css"
import personImg from "../../static/icons/person.png"
function PatientProfileCard() {
  return (
    <div className="patient-profile-card">
      <img src={personImg} alt="" />
      <div className="info">
        <h1 className="info-heading">Abhishek Gupta</h1>
        <p className="info-text">+91 8967456294</p>
        <p className="info-text">example@gmail.com</p>
        <p className="info-text">12-1234-5678-2456</p>
      </div>
    </div>
  );
}

export default PatientProfileCard;
