import React, { useState } from "react";
import Layout from "./Layout";
import { classroomNavItems } from "./ClassroomDashboard";
import AddCourseComponent from "./AddCourseComponent";

const CourseAddPage: React.FC = () => {
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <AddCourseComponent />
    </Layout>
  );
};

export default CourseAddPage;
