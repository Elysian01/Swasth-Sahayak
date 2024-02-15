import "./App.css";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DoctorChat from "./pages/DoctorChat";
import SearchPatient from "./pages/SearchPatient";
import PageNotFound from "./pages/PageNotFound";
import SearchRecords from "./pages/SearchRecords";
import DiagnoseReport from "./pages/DiagnoseReport";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DiagnoseRequest from "./pages/DiagnoseRequest";
import DoctorDashboard from "./pages/DoctorDashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artifacts from "./pages/Artifacts";
import Calendar from "./components/misc/Calendar";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/doctor-dashboard"
						element={<DoctorDashboard />}
					/>
					<Route path="/" element={<Login />} />
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route
						path="/reset-password"
						element={<ResetPassword />}
					/>
					<Route
						path="search-patient"
						element={<SearchPatient />}
					/>
					<Route
						path="search-records"
						element={<SearchRecords />}
					/>
					<Route path="doctor-chat" element={<DoctorChat />} />
					<Route path="profile" element={<Artifacts />} />
					<Route
						path="diagnose-report"
						element={<DiagnoseReport />}
					/>
					<Route
						path="diagnose-request"
						element={<DiagnoseRequest />}
					/>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
