import React, { useState } from "react";
import Layout from "./Layout";
import { NavItem } from "./DefaultNavItems";
import {
  UserIcon,
  FolderPlusIcon,
  PlusCircleIcon,
  QrCodeIcon,
  ArchiveBoxIcon,
  CircleStackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import ClassroomCard from "./ClassroomCard";

export const classroomNavItems: NavItem[] = [
  {
    label: "Classroom Dashboard",
    href: "/classroom-dashboard",
    icon: <UserIcon className="w-6 h-6" />,
  },
  {
    label: "Batch Dashboard",
    href: "/batch-dashboard",
    icon: <ArchiveBoxIcon className="w-6 h-6" />,
  },
  {
    label: "Course Dashboard",
    href: "/course-dashboard",
    icon: <Squares2X2Icon className="w-6 h-6" />,
  },
  {
    label: "F-C-B Dashboard",
    href: "/fcb-dashboard",
    icon: <CircleStackIcon className="w-6 h-6" />,
  },
  {
    label: "Add Batch Panel",
    href: "/classroom/add-batch",
    icon: <FolderPlusIcon className="w-6 h-6" />,
  },
  {
    label: "Add Course Panel",
    href: "/classroom/add-course",
    icon: <PlusCircleIcon className="w-6 h-6" />,
  },
  {
    label: "Generate QR",
    href: "/classroom/generate-qr",
    icon: <QrCodeIcon className="w-6 h-6" />,
  },
  {
    label: "Add F-B-C Panel",
    href: "/classroom/add-fac-batch-course",
    icon: <FolderPlusIcon className="w-6 h-6" />,
  },
];

const ClassroomDashboardPage: React.FC = () => {
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        <ClassroomCard />
      </div>
    </Layout>
  );
};

export default ClassroomDashboardPage;
