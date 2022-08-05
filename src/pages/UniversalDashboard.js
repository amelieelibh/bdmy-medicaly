import React from "react";
import { Navigate } from "react-router-dom";

import { PatientDashboard, HospitalDashboard, AdminDashboard } from "./";

import { AUTHORITY_TYPES } from "../Constants/authorityTypes";
import { useAuth } from "../services/authorization";

const UniversalDashboard = () => {
  const auth = useAuth();

  if (!auth.loggedIn || !auth.entityInfo || !auth.wallet || !auth.authority) {
    auth.logout();
    return <Navigate to="/" />;
  }

  if (auth.authority === AUTHORITY_TYPES.ADMIN) return <AdminDashboard />;
  if (auth.authority === AUTHORITY_TYPES.HOSPITAL) return <HospitalDashboard />;
  if (auth.authority === AUTHORITY_TYPES.PATIENT) return <PatientDashboard />;

  return <Navigate to="/" />;
};

export default UniversalDashboard;
