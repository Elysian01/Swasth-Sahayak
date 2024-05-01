import React from 'react'
import Navbar from "../components/headers/Navbar";
import PageHeading from '../components/headers/PageHeading'
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postRequest } from "../components/Api/api";
import Doctoraddform from "../components/inputs/Doctoraddform";


const AddDoctor = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const adddoctor = async (updatedFieldWorker) => {
    // Handle the updated FieldWorker object
    console.log("Updated FieldWorker:", updatedFieldWorker);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      let c=await postRequest(
        `/admin/adddoctor`,
        updatedFieldWorker,
        headers
      );
      
      navigate("/doctor-dashboard");

    } catch (error) {
      alert("Duplicate email or phone number.")
      console.log(error);
    }
};
return (
    <div>
      <Navbar />
      <PageHeading title="Add New Doctor"/>
      <Doctoraddform adddoctor={adddoctor}/>
    </div>
  )
}

export default AddDoctor