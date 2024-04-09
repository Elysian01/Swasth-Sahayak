import "./App.css";
import Login from "./screens/Login";
import DoctorDashboard from "./screens/DoctorDashboard";
import SupervisorDashboard from "./screens/SupervisorDashboard";
import QuestionnaireDashboard from "./screens/QuestionnaireDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import FieldWorkerDashboard from "./screens/FieldWorkerDashboard";
import PageNotFound from "./screens/PageNotFound";
import ForgotPassword from "./screens/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./components/inputs/Forms";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route index element={<Login />} /> */}
          <Route index path="/" element={<Login />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/forms" element={<Forms />} />
          <Route
            path="field-worker-dashboard"
            element={<FieldWorkerDashboard />}
          />
          <Route
            path="supervisor-dashboard"
            element={<SupervisorDashboard />}
          />
          <Route
            path="questionnaire-dashboard"
            element={<QuestionnaireDashboard />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
