"use client";
import ArticleForm from "@/components/admin/ArticleForm";
import { Article } from "@/lib/types";
import Link from "next/link";
import React, { useState } from "react";

interface BlogPageProps {
  articles: Article[];
  // onSaveArticle: (article: Article) => void;
  // onDeleteArticle: (id: number) => void;
}

const page: React.FC<BlogPageProps> = ({ articles }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  const handleNewArticle = () => {
    setCurrentArticle(null);
    setIsEditing(true);
  };

   const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentArticle(null);
  };

  if (isEditing) {
      // Имитация перехода на страницу редактирования/создания
      return (
          <ArticleForm 
              article={currentArticle} // <- Здесь передаются данные для предзаполнения
            //   onSave={handleArticleSaved} 
              onCancel={handleCancelEdit} 
          />
      );
  }

  
  return (
    <div>
      <button onClick={handleNewArticle}>Create new article</button>
    </div>
  );
};

export default page;
