import React, { useState } from "react";
import Layout from "./Layout";
import { facultyNavItems } from "./FacultyDashboard";
import AddFacultyComponent from "./AddFacultyComponent";

const FacultyAddPage: React.FC = () => {
  return (
    <Layout header={"FACULTY"} navItems={facultyNavItems}>
      <AddFacultyComponent />
    </Layout>
  );
};

export default FacultyAddPage;
