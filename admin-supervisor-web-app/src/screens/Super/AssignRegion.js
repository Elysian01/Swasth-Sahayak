import React from "react";
import Navbar from "../../components/headers/Navbar";
import PageHeading from "../../components/headers/PageHeading";
const AssignRegion = () => {
  return (
    <div>
      <Navbar />
      <PageHeading title="Assign Region" />
      <div className="display-card">
        <div className="person-details">
          <div className="person-name">Name: </div>
          <div className="person-region">Region: </div>
          <div className="person-specialisation">Specialisation:</div>
        </div>
        <div className="button-alignment">
          {/* Pass the doctor object to the openModal function */}
          <select className="form__field ">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AssignRegion;
