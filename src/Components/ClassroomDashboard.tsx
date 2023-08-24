import React, { useEffect, useState } from "react";
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
import { useAuth } from "../AuthContext";
import { getToken } from "../Services/GetToken";
import LoadingAnimation from "./Loading";

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
    label: "Add F-C-B Panel",
    href: "/classroom/add-fac-batch-course",
    icon: <FolderPlusIcon className="w-6 h-6" />,
  },
];

const ClassroomDashboardPage: React.FC = () => {
  const authCtx = useAuth();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    async function getClasses(token: string) {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/faculty/qr/all",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const requestData = await response.json();
        setClasses(requestData.data);
      } else {
        throw new Error("error in API call");
      }
    }
    const token = getToken();
    if (!token) {
      alert("No token found");
      authCtx.logout();
    } else {
      getClasses(token);
    }
  }, [classes.length]);
  return (
    <Layout header={"CLASSROOM"} navItems={classroomNavItems}>
      <div className="mt-6 flex flex-col gap-6 mx-6">
        {!classes.length ? (
          <LoadingAnimation />
        ) : (
          classes.map((classroom) => {
            return <ClassroomCard details={classroom} />;
          })
        )}
      </div>
    </Layout>
  );
};

export default ClassroomDashboardPage;
