import React from "react";
import Navbar from "../../components/headers/Navbar";
import PageHeading from "../../components/headers/PageHeading";
const MissedFollowup = () => {
  return (
    <div>
      <Navbar />
      <PageHeading title="Missed Follow-ups" />
      <div className="display-card">
        <div className="person-details">
          <div className="person-name">Name: </div>
          <div className="person-region">Region: </div>
          <div className="person-specialisation">Specialisation:</div>
        </div>
        <div className="button-alignment">
          {/* Pass the doctor object to the openModal function */}
          <button className="dark-primary-small-btn">View</button>
          <button className="dark-primary-small-btn">Edit</button>
          <button className="dark-primary-small-btn">Status</button>
        </div>
      </div>
    </div>
  );
};

export default MissedFollowup;
