import React, { useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import BCCard from "./BCCard";

const BatchDashboardPage: React.FC = () => {
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        <BCCard />
      </div>
    </Layout>
  );
};

export default BatchDashboardPage;
