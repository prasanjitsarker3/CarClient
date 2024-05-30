import React from "react";
import DashboardLayout from "./Layout/DashboardLayout";

const DashboardMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};

export default DashboardMainLayout;
