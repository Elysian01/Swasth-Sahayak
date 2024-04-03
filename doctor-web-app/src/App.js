import "./App.css";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Artifacts from "./pages/Artifacts";
import DoctorChat from "./pages/DoctorChat";
import SearchPatient from "./pages/SearchPatient";
import PageNotFound from "./pages/PageNotFound";
import SearchRecords from "./pages/SearchRecords";
import DiagnoseReport from "./pages/DiagnoseReport";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DiagnoseRequest from "./pages/DiagnoseRequest";
import DoctorDashboard from "./pages/DoctorDashboard";
import Appointments from "./pages/Appointments";
import PatientDashboard from "./pages/PatientDashboard";
import RequreAuth from "./login/RequreAuth";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
						<Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route element={<RequreAuth />}>
            <Route path="search-patient" element={<SearchPatient />} />
            <Route path="search-records" element={<SearchRecords />} />
            <Route path="doctor-chat" element={<DoctorChat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="diagnose-report" element={<DiagnoseReport />} />
            <Route path="diagnose-request" element={<DiagnoseRequest />} />
            <Route path="view-artifacts" element={<Artifacts />}></Route>
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
