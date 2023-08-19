import React, { useState } from "react";
import Layout from "./Layout";
import { NavItem } from "./DefaultNavItems";
import { InboxIcon, UserIcon } from "@heroicons/react/24/outline";
import StudentDetailContainer from "./StudentDetailContainer";
export const studentNavItems: NavItem[] = [
  {
    label: "Student Dashboard",
    href: "/student-dashboard",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    label: "Reqeust Panel",
    href: "/student/request-panel",
    icon: <InboxIcon className="w-6 h-6" />,
  },
];
const StudentDashboardPage: React.FC = () => {
  return (
    <Layout header={"STUDENT"} navItems={studentNavItems}>
      <StudentDetailContainer />
    </Layout>
  );
};

export default StudentDashboardPage;
