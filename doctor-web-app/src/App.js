import './App.css';

import DoctorChat from './pages/DoctorChat';
import SearchPatient from './pages/SearchPatient';
import Profile from './pages/Profile';
import DoctorDashboard from './pages/DoctorDashboard';
import PageNotFound from './pages/PageNotFound';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DoctorDashboard />} />
          <Route path="search-patient" element={<SearchPatient />} />
          <Route path="doctor-chat" element={<DoctorChat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
