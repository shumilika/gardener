"use client";
import ArticleForm from "@/components/admin/ArticleForm";
import DeleteQuestionModal from "@/components/admin/DeleteQuestionModal";
import EditIcon from "@/components/icons/admin/EditIcon";
import PlusIcon from "@/components/icons/admin/PlusIcon";
import TrashIcon from "@/components/icons/admin/TrashIcon";
import { Article } from "@/lib/types";
import { handleChangeDateFormat } from "@/services/dateFormat";
import { deleteCurrentArticle, getArticles } from "@/services/updateBlog";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  // const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[] | null>([]);
  const notifySuccess = () => toast.success("Successfully delete!");
  const notifyError = () => toast.error("This is didn't work");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const onCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };
  const fetchArticles = async () => {
    const data = await getArticles();
    setArticles(data ?? []);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDeleteArticle = async (id: string) => {
    try {
      await deleteCurrentArticle(id);
      notifySuccess();
      fetchArticles();
      onCloseDeleteModal();
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Manage Articles ({articles?.length})
        </h1>
        <Toaster />
        <Link
          href={"/admin/blog/new-article"}
          className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-green-700 transition duration-150  transform flex items-center hover:scale-[1.02]"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          New Article
        </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          {articles && (
            <tbody className="bg-white divide-y divide-gray-200">
              {articles?.map((article: Article) => (
                <tr
                  key={article.slug}
                  className="hover:bg-gray-50 transition duration-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 truncate max-w-xs">
                    {article.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {handleChangeDateFormat({ date: article.createdAt })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        article.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      title="Edit"
                      // onClick={() => handleEditArticle(article)}
                      className="text-blue-600 hover:text-blue-900 mr-3 p-1"
                    >
                      <EditIcon className="w-5 h-5" />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => setIsOpenDeleteModal(true)}
                      className="text-red-600 hover:text-red-900 p-1"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                  <DeleteQuestionModal
                    isOpen={isOpenDeleteModal}
                    onClose={onCloseDeleteModal}
                    deleteButton={() => handleDeleteArticle(article.slug)}
                  />
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
