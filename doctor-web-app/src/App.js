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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/misc/Calendar";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const serverURL = "http://localhost:9191";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="search-patient"
            element={
              <ProtectedRoute>
                <SearchPatient />
              </ProtectedRoute>
            }
          />
          <Route
            path="search-records"
            element={
              <ProtectedRoute>
                <SearchRecords />
              </ProtectedRoute>
            }
          />
          <Route
            path="doctor-chat"
            element={
              <ProtectedRoute>
                <DoctorChat />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="diagnose-report"
            element={
              <ProtectedRoute>
                <DiagnoseReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="diagnose-request"
            element={
              <ProtectedRoute>
                <DiagnoseRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="view-artifacts"
            element={
              <ProtectedRoute>
                <Artifacts />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor-dashboard"
            element={
              <ProtectedRoute>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient-dashboard"
            element={
              <ProtectedRoute>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
