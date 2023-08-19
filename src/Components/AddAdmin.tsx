import React, { useState } from "react";
import Layout from "./Layout";
import { adminNavItems } from "./AdminDashboard";
import AddAdminComponent from "./AddAdminComponent";

const AdminAddPage: React.FC = () => {
  return (
    <Layout header={"ADMIN"} navItems={adminNavItems}>
      <AddAdminComponent />
    </Layout>
  );
};

export default AdminAddPage;
