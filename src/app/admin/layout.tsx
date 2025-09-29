"use client";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-light text-gray-800">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-[#F3F4F6]">{children}</main>
    </div>
  );
}