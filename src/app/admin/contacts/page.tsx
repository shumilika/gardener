"use client";
import { CustomerQuery } from "@/lib/types";
import { handleChangeDateFormat } from "@/services/dateFormat";
import { getQueries } from "@/services/updateQueries";
import React, { useEffect, useState } from "react";

const page = () => {
  const [queries, setQueries] = useState<CustomerQuery[] | null>([]);

  const fetchArticles = async () => {
    const data = await getQueries();
    setQueries(data ?? []);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Custom Queries ({queries?.length})
        </h1>
      </div>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          {queries && (
            <tbody className="bg-white divide-y divide-gray-200">
              {queries?.map((query: CustomerQuery) => (
                <tr
                  key={query.id}
                  className="hover:bg-gray-50 transition duration-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate max-w-xs">
                    {query.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {query.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {query.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {handleChangeDateFormat({ date: query.date })}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        query.status === 'New' ? 'bg-red-100 text-red-800' :
                  query.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {query.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default page;
