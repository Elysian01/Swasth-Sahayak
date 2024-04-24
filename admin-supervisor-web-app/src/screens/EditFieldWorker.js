import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { putRequest } from "../components/Api/api";
import FieldWorkerForms from "../components/inputs/FieldWorkerForms";

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
        `/admin/updatefieldworkerdetails/${fieldworker.fieldworkerid}`,
        updatedFieldWorker,
        headers
      );
      navigate("/field-worker-dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <PageHeading title="Edit Field Worker Details"/>
      <FieldWorkerForms handleEdit={handleEdit} fieldworker={fieldworker} />
    </div>
  );
};

export default EditFieldWorker;
