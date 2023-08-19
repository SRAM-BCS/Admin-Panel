import React, { useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import GenerateQRComponent from "./GenrateQRComponent";

const GenerateQR: React.FC = () => {
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <GenerateQRComponent />
    </Layout>
  );
};

export default GenerateQR;
