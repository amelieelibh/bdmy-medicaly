import React from "react";
import NewRecord from "./pages/NewRecord";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  LandingPage,
  Login,
  AdminDashboard,
  HospitalDashboard,
  PatientDashboard,
  UniversalDashboard,
  AnyRecord,
  AnyRecordDisplay,
  PatientRegistration,
  HospitalRegistration,
  DeclinedRecords,
} from "./pages";

import { Navbar } from "./components/core";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./apis/medblock";

import { AuthProvider } from "./services/authorization";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/dashboard" element={<UniversalDashboard />} />
          <Route exact path="/adminDashboard" element={<AdminDashboard />} />
          <Route
            exact
            path="/hospitalDashboard"
            element={<HospitalDashboard />}
          />
          <Route exact path="/patientDashboard" element={<PatientDashboard />} />
          <Route exact path="/newRecord" element={<NewRecord />} />
          <Route exact path="/declinedRecords" element={<DeclinedRecords />} />

          <Route exact path="/login/:type" element={<Login />} />
          <Route exact path="/anyRecord" element={<AnyRecord />} />
          <Route exact path="/anyRecordDisplay" element={<AnyRecordDisplay />} />

          <Route exact path="/newPatient" element={<PatientRegistration />} />
          <Route exact path="/newHospital" element={<HospitalRegistration />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
