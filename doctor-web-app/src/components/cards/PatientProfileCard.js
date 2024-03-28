import React from 'react';
import "../css/cards.css"
import personImg from "../../static/icons/person.png"
function PatientProfileCard({data}) {
  return (
    <div className="patient-profile-card">
      <img src={personImg} alt="" />
      <div className="info">
        <h1 className="info-heading">{data.name}</h1>
        <p className="info-text">+91 {data.mobileno}</p>
        <p className="info-text">{data.address}</p>
        <p className="info-text">{data.pincode}</p>
      </div>
    </div>
  );
}

export default PatientProfileCard;
