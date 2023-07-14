// components/Layout.tsx
import classNames from "classnames";
import React, { PropsWithChildren, useState, ReactNode } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import { NavItem, defaultNavItems } from "./DefaultNavItems";
type Props = {
  header: string;
  children?: ReactNode | undefined;
  navItems: NavItem[];
};
const Layout = (props: Props) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      {/* sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
        header={props.header}
        navItems={props.navItems}
      />

      {/* content */}
      <div className=""> {props.children}</div>
    </div>
  );
};
export default Layout;
