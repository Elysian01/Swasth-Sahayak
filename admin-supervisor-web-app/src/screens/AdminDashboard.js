import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./css/common.css";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import FeatureCard from "../components/cards/FeatureCard";
import { getRequest } from "../components/Api/api";
function AdminDashboard() {
    const [doctors, setDoctors] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const fetchDoctorDetails = async () => {
        try {
            const headers = { Authorization: `Bearer ${token}` };
            // Await the API call
            const response = await getRequest("/admin/allDoctorDetail", headers);
            // Update the state with the fetched doctor details
            setDoctors(response);
        } catch (error) {
            console.error(error);
        }
    };
    const uploadDoctorsToChatEngine = async () => {
        try {
          const promises = doctors.map(async doctor => {
            const { doctorId, mobileno,} = doctor;
            const data = {
              username: doctorId, // doctorId as username
              secret: mobileno,   // mobileno as secret
            };
            
            const config = {
              method: 'post',
              url: 'https://api.chatengine.io/users/',
              headers: {
                'PRIVATE-KEY': 'ff81a502-c2dd-4c07-b0d8-ca93c03591dd' // Replace with your actual private key
              },
              data:data
            };
      
            return await axios(config);
          });
      
          const responses = await Promise.all(promises);
          responses.forEach(response => {
            console.log(JSON.stringify(response.data));
          });
        } catch (error) {
          console.error(error);
        }
      };
      
    useEffect(() => {
        fetchDoctorDetails();
        uploadDoctorsToChatEngine();
    }, [])

    return (
        <div>
            <Navbar />
            <PageHeading title="Welcome to Admin Dashboard" />

            <div className="cards">
                <div className="row">
                    <FeatureCard
                        cardColor="blue"
                        title="Doctor Dashboard"
                        img="doctor.png"
                        link="/doctor-dashboard"
                    />
                    <FeatureCard
                        cardColor="green"
                        title="Field Worker Dashboard"
                        img="field-worker.png"
                        link="/field-worker-dashboard"
                    />
                </div>
                <div className="row">
                    <FeatureCard
                        cardColor="pinkesh-red"
                        title="Supervisor Dashboard"
                        img="supervisor.png"
                        link="/supervisor-dashboard"
                    />
                    <FeatureCard
                        cardColor="dark"
                        title="Questionnaire Dashboard"
                        img="questionnaire.png"
                        link="/questionnaire-dashboard"
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
