"use client";
import Sidebar from "@/components/admin/Sidebar";
import { AdminProvider, useAdminData } from "@/context/AdminContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <AdminContent>{children}</AdminContent>
    </AdminProvider>
  );
}
function AdminContent({ children }: { children: React.ReactNode }) {
  const { articles, queries } = useAdminData();
  const newQueriesCount = queries.filter((q) => q.status === "New").length
  return (
    <div className="flex h-screen bg-light text-gray-800">
      <Sidebar
        articlesCount={articles.length}
        newQueriesCount={newQueriesCount}
      />
      <main className="flex-1 overflow-y-auto bg-[#F3F4F6]">{children}</main>
    </div>
  );
}
