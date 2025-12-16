import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/lib/types";

interface NavLinkProps {
  item: NavItem;
  articlesCount: number;
  newQueriesCount: number;
}

const NavLink: React.FC<NavLinkProps> = ({
  item,
  articlesCount,
  newQueriesCount,
}) => {
  const currentPath = usePathname();
  const isRootLink = item.href === "/admin";
  let isActive = false;
  if (isRootLink) {
    isActive = currentPath === item.href;
  } else {
    isActive = currentPath.startsWith(item.href);
  }
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`flex items-center p-3 rounded-xl transition duration-150 ${
        isActive
          ? "bg-green-100 text-green-700 font-semibold shadow-inner"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="flex-grow">{item.name}</span>

      {item.name === "Articles" && articlesCount > 0 && (
        <span className="ml-3 text-xs font-bold px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
          {articlesCount}
        </span>
      )}
      {item.name === "Customers" && newQueriesCount > 0 && (
        <span className="ml-3 text-xs font-bold px-2 py-0.5 rounded-full bg-red-500 text-white">
          {newQueriesCount}
        </span>
      )}
    </Link>
  );
};

export default NavLink;
