import React, { useState } from "react";
import Layout from "./Layout";

import { NavItem } from "./DefaultNavItems";
import {
  CalendarIcon,
  FolderIcon,
  InboxIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Card from "./Card";
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
const RequestPanelPage: React.FC = () => {
  return (
    <Layout header={"STUDENT"} navItems={studentNavItems}>
      <div className="p-9  grid lg:gap-4 lg:grid-cols-4 md:gap-3 md:grid-cols-3 sm:gap-4 sm:grid-cols-1">
        <Card />
      </div>
    </Layout>
  );
};

export default RequestPanelPage;
