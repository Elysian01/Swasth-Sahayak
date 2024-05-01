import React from 'react'
import Navbar from "../components/headers/Navbar";
import PageHeading from '../components/headers/PageHeading'
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postRequest } from "../components/Api/api";
import Fieldworkeraddform from "../components/inputs/Fieldworkeraddform"

const AddFieldworker = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const addFieldworker = async (updatedFieldWorker) => {
    // Handle the updated FieldWorker object
    console.log("Updated FieldWorker:", updatedFieldWorker);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      let c=await postRequest(
        `/admin/addfieldworker`,
        updatedFieldWorker,
        headers
      );
      
      navigate("/field-worker-dashboard");

    } catch (error) {
        alert("Duplicate email or phone number.")
      console.log(error);
    }
};
return (
    <div>
      <Navbar />
      <PageHeading title="Add New fieldworker"/>
      <Fieldworkeraddform addFieldworker={addFieldworker}/>
    </div>
  )
}

export default AddFieldworker