import React, { useState } from "react";
import Layout from "./Layout";
import { NavItem } from "./DefaultNavItems";
import { UserIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import FacultyCard from "./FacultyCard";
import { DefaultAdminCardItems } from "./DefaultCardItems";
import AdminCard from "./AdminCard";

export const adminNavItems: NavItem[] = [
  {
    label: "Admin Dashboard",
    href: "/admin-dashboard",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    label: "Add Admin Panel",
    href: "/admin/add-admin",
    icon: <UserPlusIcon className="w-6 h-6" />,
  },
];

const AdminDashboardPage: React.FC = () => {
  return (
    <Layout header={"FACULTY"} navItems={adminNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
    </Layout>
  );
};

export default AdminDashboardPage;
