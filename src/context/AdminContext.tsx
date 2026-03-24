"use client";
import { Article, CustomerQuery } from "@/lib/types";
import { getArticles } from "@/services/updateBlog";
import { getQueries } from "@/services/updateQueries";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AdminContextType {
    articles: Article[];
  queries: CustomerQuery[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [queries, setQueries] = useState<CustomerQuery[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [articlesData, queriesData] = await Promise.all([
        getArticles(),
        getQueries()
      ]);
      setArticles(articlesData || []);
      setQueries(queriesData || []);
    } catch (e) {
      console.error("Failed to fetch admin data", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <AdminContext.Provider value={{ articles, queries, loading, refreshData: fetchData }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdminData must be used within AdminProvider");
  return context;
};