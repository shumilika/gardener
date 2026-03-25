"use client";
import StaticticBox from "@/components/admin/StaticticBox";
import VisitorsStatistics from "@/components/admin/VisitorsStatistics";
import BlogIcon from "@/components/icons/BlogIcon";
import MailsIcon from "@/components/icons/MailsIcon";
import VisitorsIcon from "@/components/icons/VisitorsIcon";
import { useAdminData } from "@/context/AdminContext";
import { CustomerQuery } from "@/lib/types";
import { handleChangeDateFormat } from "@/services/dateFormat";

import React from "react";

const page = () => {
  const { articles, queries, loading } = useAdminData();

  if (loading) return <p>Loading...</p>;

  const totalQueries = queries.length;
  const newQueries = queries.filter((q) => q.status === "New").length;
  const totalArticles = articles.length;
  const publishedArticles = articles.filter(
    (q) => q.status === "Published",
  ).length;

  return (
    <div className="p-4 md:p-8">
      <div className="m-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Gardener Dashboard Overview
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StaticticBox
          title="Total Articles"
          value={totalArticles}
          icon={BlogIcon}
          colorKey="green"
          description={`Published: ${publishedArticles}`}
        />
        <StaticticBox
          title="New Queries"
          colorKey="yellow"
          icon={MailsIcon}
          value={newQueries}
          description={`Total Queries: ${totalQueries}`}
        />
        <StaticticBox
          title="Weekly Visits"
          value="5.5K"
          colorKey="blue"
          icon={VisitorsIcon}
          description="Traffic up 12% this week"
        />
      </div>
      <div className="grid grid-cols-1  gap-6 mt-8">
        <VisitorsStatistics />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl xl:col-span-2 border border-gray-100 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Queries (New)
        </h2>
        <div className="space-y-3">
          {queries
            .filter((q) => q.status === "New")
            .slice(0, 3)
            .map((query: CustomerQuery) => (
              <div
                key={query.id}
                className="flex justify-between items-center p-3 border-b last:border-b-0"
              >
                <span className="text-gray-600 truncate mr-4">
                  {query.subject}
                </span>
                <span className="text-sm text-gray-400">{handleChangeDateFormat({date:query.date})}</span>
              </div>
            ))}
        </div>
        {newQueries === 0 && (
          <p className="text-gray-400 text-center py-4">
            No new queries. Great job!
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
