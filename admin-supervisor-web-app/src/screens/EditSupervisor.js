import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { putRequest } from "../components/Api/api";
import SupervisorForms from "../components/inputs/Supervisorform";

const EditFieldWorker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fieldworker } = location.state;
  console.log(fieldworker);
  const token = useSelector((state) => state.auth.token);
  const handleEdit = async (updatedFieldWorker) => {
    // Handle the updated FieldWorker object
    console.log("Updated FieldWorker:", updatedFieldWorker);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      await putRequest(
        `/admin/updatesupervisordetail/${fieldworker.supervisorid}`,
        updatedFieldWorker,
        headers
      );
      navigate("/supervisor-dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <PageHeading title="Edit Supervisor Details"/>
      <SupervisorForms handleEdit={handleEdit} fieldworker={fieldworker} />
    </div>
  );
};

export default EditFieldWorker;
