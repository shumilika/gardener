"use client";
import { Article } from "@/lib/types";
import { getArticles } from "@/services/updateBlog";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AppContextType {
  articles: Article[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const articlesData = await getArticles();
      setArticles(articlesData || []);
    } catch (e) {
      console.error("Failed to fetch admin data", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ articles, loading, refreshData: fetchData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppData must be used within AppProvider");
  return context;
};
