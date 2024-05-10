import React from "react";
import SuperNavbar from "./components/SuperNavbar";
import PageHeading from "../../components/headers/PageHeading";
import FeatureCard from "../../components/cards/FeatureCard";
import "./css/SuperDashboard.css";
const SuperDashboard = () => {
  return (
    <div>
      <SuperNavbar />
      <PageHeading title="Welcome to Supervisor Dashboard" />
      <div className="row">
        <FeatureCard
          cardColor="dark"
          title="Missed Follow-ups"
          img="questionnaire.png"
          link="/missed-followups"
        />
        <FeatureCard
          cardColor="green"
          title="Assign Region"
          img="field-worker.png"
          link="/assign-region"
        />
      </div>
    </div>
  );
};

export default SuperDashboard;