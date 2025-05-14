import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import TenantsTable from "../components/dashboard/TenantsTable";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <TenantsTable />
    </DashboardLayout>
  );
};

export default Dashboard;
