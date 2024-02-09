import './App.css';

import DoctorChat from './pages/DoctorChat';
import SearchPatient from './pages/SearchPatient';
import Profile from './pages/Profile';
import DoctorDashboard from './pages/DoctorDashboard';
import PageNotFound from './pages/PageNotFound';
import SearchRecords from './pages/SearchRecords'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiagnoseReport from './pages/DiagnoseReport';
import DiagnoseRequest from './pages/DiagnoseRequest';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SearchRecords />} />
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
