import "./App.css";
import Login from "./screens/Login";
import DoctorDashboard from "./screens/DoctorDashboard";
import SupervisorDashboard from "./screens/SupervisorDashboard";
import QuestionnaireDashboard from "./screens/QuestionnaireDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import FieldWorkerDashboard from "./screens/FieldWorkerDashboard";
import PageNotFound from "./screens/PageNotFound";
import ForgotPassword from "./screens/ForgotPassword";
import CreateQuestionnaire from "./screens/CreateQuestionnaire";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ViewQuestionnaire from "./screens/ViewQuestionnaire";
import EditDoctor from "./screens/EditDoctor";
import EditFieldWorker from "./screens/EditFieldWorker";

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
          <Route path="/edit-doctor" element={<EditDoctor />} />
          <Route path="/edit-field-worker" element={<EditFieldWorker />} />
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
          
          <Route
            path="create-questionnaire"
            element={<CreateQuestionnaire />}
          />
          <Route path="/view-questionnaire" element={<ViewQuestionnaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
