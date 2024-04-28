import React from 'react'
import Navbar from "../components/headers/Navbar";
import PageHeading from '../components/headers/PageHeading'
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postRequest } from "../components/Api/api";
import Supervisoraddform from "../components/inputs/Supervisoraddform"

const Addsupervisor = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const addsupervisor = async (updatedFieldWorker) => {
    // Handle the updated FieldWorker object
    console.log("Updated FieldWorker:", updatedFieldWorker);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      let c=await postRequest(
        `/admin/addsupervisor`,
        updatedFieldWorker,
        headers
      )
      navigate("/supervisor-dashboard");

    } catch (error) {
      alert("Duplicate email or phone number.");

      console.log(error);
    }
};
return (
    <div>
      <Navbar />
      <PageHeading title="Add New Supervisor"/>
      <Supervisoraddform addsupervisor={addsupervisor}/>
    </div>
  )
}

export default Addsupervisor