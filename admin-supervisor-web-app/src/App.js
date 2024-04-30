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
import AddDoctor from "./screens/AddDoctor";
import EditSuervisor from "./screens/EditSupervisor";
import EditQuestion from "./screens/EditQuestion";
import AddFieldworker from "./screens/AddFieldworker";
import Addsupervisor from "./screens/Addsupervisor"
import ChatApp from "./screens/ChatApp";
import { useSelector } from "react-redux";

import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token == null) {
      navigate('/');
    }
  }, [token, navigate]);

  return token ? children : null;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route index element={<Login />} /> */}
          <Route index path="/" element={<Login />} />
          <Route path="/doctor-dashboard" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
          <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/edit-doctor" element={<ProtectedRoute><EditDoctor /></ProtectedRoute>} />
          <Route path="/edit-field-worker" element={<ProtectedRoute><EditFieldWorker /></ProtectedRoute>} />
          <Route path="/edit-supervisor" element={<ProtectedRoute><EditSuervisor /></ProtectedRoute>} />
          <Route path="/edit-question" element={<ProtectedRoute><EditQuestion /></ProtectedRoute>} />
          <Route
            path="field-worker-dashboard"
            element={<ProtectedRoute><FieldWorkerDashboard /></ProtectedRoute>}
          />
          <Route
            path="chat-app"
            element={<ProtectedRoute><ChatApp /></ProtectedRoute>}
          />
          <Route
            path="supervisor-dashboard"
            element={<ProtectedRoute><SupervisorDashboard /></ProtectedRoute>}
          />
          <Route
            path="questionnaire-dashboard"
            element={<ProtectedRoute><QuestionnaireDashboard /></ProtectedRoute>}
          />
          <Route
            path="add-doctor"
            element={<ProtectedRoute><AddDoctor /></ProtectedRoute>}
          />
          <Route
            path="add-supervisor"
            element={<ProtectedRoute><Addsupervisor /></ProtectedRoute>}
          /><Route
          path="add-fieldworker"
          element={<ProtectedRoute><AddFieldworker /></ProtectedRoute>}
          />
          <Route
            path="create-questionnaire"
            element={<ProtectedRoute><CreateQuestionnaire /></ProtectedRoute>}
          />
          <Route path="/view-questionnaire" element={<ProtectedRoute><ViewQuestionnaire /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
