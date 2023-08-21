import React, { useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import AddBatchCourseFacultyComponent from "./AddBatchCourseFacultyComponent";

const AddBatchCourseFaculty: React.FC = () => {
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <AddBatchCourseFacultyComponent />
    </Layout>
  );
};

export default AddBatchCourseFaculty;
