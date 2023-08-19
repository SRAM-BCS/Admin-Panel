import React, { useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import AddBatchComponent from "./AddBatchComponent";

const BatchAddPage: React.FC = () => {
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <AddBatchComponent />
    </Layout>
  );
};

export default BatchAddPage;
