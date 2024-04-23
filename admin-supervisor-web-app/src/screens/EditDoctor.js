import React from "react";
import Navbar from "../components/headers/Navbar";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import PageHeading from "../components/headers/PageHeading";
import DoctorForms from "../components/inputs/DoctorForm";
import { putRequest } from "../components/Api/api";

const EditDoctor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state;
  const token = useSelector((state) => state.auth.token);
  const handleEdit = async (updatedDoctor) => {
    // Handle the updated doctor object
    console.log("Updated doctor:", updatedDoctor);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      await putRequest(
        `/admin/updatedoctordetails/${updatedDoctor.doctorId}`,
        updatedDoctor,
        headers
      );
      navigate("/doctor-dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <PageHeading title="Edit Doctor Details" />

      <DoctorForms handleEdit={handleEdit} doctor={doctor} />
    </div>
  );
};

export default EditDoctor;
