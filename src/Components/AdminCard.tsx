import React from "react";
import { DefaultAdminCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";

const AdminCard = ({ details = DefaultAdminCardItems[0] }) => {
  return (
    <Card>
      <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Email- {details?.email}
      </h5>
    </Card>
  );
};

export default AdminCard;
