import React, { useState } from "react";
import Layout from "./Layout";
import { NavItem } from "./DefaultNavItems";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import FacultyCard from "./FacultyCard";

export const facultyNavItems: NavItem[] = [
  {
    label: "Faculty Dashboard",
    href: "/faculty-dashboard",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    label: "Add Faculty Panel",
    href: "/faculty/add-faculty",
    icon: <UserPlusIcon className="w-6 h-6" />,
  },
];

const FacultyDashboardPage: React.FC = () => {
  return (
    <Layout header={"FACULTY"} navItems={facultyNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
      </div>
    </Layout>
  );
};

export default FacultyDashboardPage;
