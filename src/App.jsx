import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import TenantsTable from "./components/dashboard/TenantsTable";
import Dashboard from "./pages/Dashboard";
import TenantsReport from "./pages/TenantsReport";
import AddTenant from "./components/dashboard/AddTenant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<TenantsTable />} />
          <Route path="report" element={<TenantsReport />} />
          <Route path="add-tenant" element={<AddTenant />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
