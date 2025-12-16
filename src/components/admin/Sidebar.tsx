import React, { useMemo } from "react";
import PanelIcon from "../icons/PanelIcon";
import BlogIcon from "../icons/BlogIcon";
import MailsIcon from "../icons/MailsIcon";
import { NavItem, SidebarProps } from "@/lib/types";
import NavLink from "./NavLink";

const Sidebar: React.FC<SidebarProps> = ({
  articlesCount,
  newQueriesCount,
}) => {
  const sidebarNavItems: NavItem[] = useMemo(
    () => [
      { name: "Dashboard", href: "/admin", icon: PanelIcon },
      { name: "Articles", href: "/admin/blog", icon: BlogIcon },
      { name: "Customers", href: "/admin/contacts", icon: MailsIcon },
    ],
    []
  );

  return (
    <aside className="w-64  flex-shrink-0 bg-white  flex flex-col">
      <div className=" h-16 flex items-center justify-center text-2xl font-bold text-green-600 tracking-wider">
        <h1>
          Gardener<span className="text-gray-800"> Admin</span>{" "}
        </h1>
      </div>
      <nav className="space-y-2 px-2 py-6 flex-grow">
        {sidebarNavItems.map((item: NavItem) => (
          <NavLink
            key={item.href}
            item={item}
            articlesCount={articlesCount}
            newQueriesCount={newQueriesCount}
          />
        ))}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <p className="text-sm text-gray-700">© 2025 Gardener Inc.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
