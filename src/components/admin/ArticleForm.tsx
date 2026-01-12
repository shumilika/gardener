"use client";
import ImageIcon from "@/components/icons/admin/ImageIcon";
import LayoutListIcon from "@/components/icons/admin/LayoutListIcon";
import ListChecksIcon from "@/components/icons/admin/ListChecksIcon";
import OpenBookIcon from "@/components/icons/admin/OpenBookIcon";
import XCircleIcon from "@/components/icons/admin/XCircleIcon";
import { Article } from "@/lib/types";
import { CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

interface ArticleFormProps {
  article: Article | null;
  onCancel: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ article, onCancel }) => {
  const [paragraphs, setParagraphs] = useState<number[]>([1]);
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [content, setContent] = useState<
    { header: string; paragraph: string }[]
  >([{ header: "", paragraph: "" }]);
  const [image, setImage] = useState<File | null>(null);

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  const addParagraph = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setParagraphs((prev) => [...prev, prev.length + 1]);
    setContent((prev) => [...prev, { header: "", paragraph: "" }]);
  };

  const deleteParagraph = (
    e: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => {
    e.preventDefault();
    setParagraphs((prev) => prev.filter((p) => p !== num));
    setContent((prev) => prev.filter((_, idx) => idx !== num - 1));
  };

  const handleContentChange = (
    index: number,
    field: "header" | "paragraph",
    value: string
  ) => {
    const newContent = [...content];
    newContent[index][field] = value;
    setContent(newContent);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const articleData = {
      title,
      slug,
      image,
      content,
    };
    console.log("Article data:", articleData);
  };

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Create New Article
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <ListChecksIcon className=" text-green-600 w-6 h-6 mr-2" /> Basic
            Information
          </h3>

          <div>
            <label className="block text-m font-medium text-gray-700 mb-2">
              Article Title
            </label>
            <div className="flex border border-gray-300 rounded-xl transition duration-150 focus-within:ring-2 focus-within:ring-green-500 items-center bg-white shadow-sm">
              <OpenBookIcon className=" text-gray-400 ml-2  w-5 h-5" />
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 focus:outline-none rounded-xl"
                placeholder="Enter article title"
                value={title}
              />
            </div>
          </div>

          <div>
            <label className="block text-m font-medium text-gray-700 mb-2">
              Slug (URL Address)
            </label>
            <div className="flex border border-gray-300 rounded-xl items-center bg-gray-100 shadow-sm ">
              <ListChecksIcon className=" text-gray-500 ml-2  w-5 h-5" />
              <input
                type="text"
                className="w-full p-3 focus:outline-none rounded-xl bg-transparent"
                value={slug}
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-m font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <div className="flex border border-gray-300 transition duration-150 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-green-500 items-center bg-white">
              <ImageIcon className=" text-gray-400 ml-2 w-5 h-5" />
              <input
                type="file"
                placeholder="image"
                className="w-full p-3 focus:outline-none "
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Content Section</h2>
          <button
            onClick={addParagraph}
            className="flex items-center px-4 py-2 text-sm font-semibold rounded-xl text-white bg-green-600 shadow-md hover:bg-green-700 transition transform hover:scale-[1.02]"
          >
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Section
          </button>
        </div>
        <div className="space-y-6">
          {paragraphs.map((num, id) => (
            <div
              key={id}
              className="w-full flex flex-col p-6 space-y-4 border-4 border-dashed border-gray-200 rounded-2xl bg-white shadow-md"
            >
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                <h4 className="text-lg font-bold text-gray-700">
                  Section #{id + 1}
                </h4>

                {num > 1 && (
                  <button
                    onClick={(e) => deleteParagraph(e, num)}
                    className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
                    title="Delete section"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Section Header
                </label>
                <div className="flex border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 transition duration-150 focus-within:ring-green-500 items-center bg-white">
                  <input
                    type="text"
                    className="focus:outline-none w-full p-3 rounded-xl "
                    value={content[id]?.header || ""}
                    onChange={(e) =>
                      handleContentChange(id, "header", e.target.value)
                    }
                    placeholder="e.g., 'Soil Preparation'"
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Content Paragraph
                </label>
                <div className="flex border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 transition duration-150 focus-within:ring-green-500 items-center bg-white">
                  <textarea
                    rows={8}
                    className="w-full p-3 rounded-xl focus:outline-none resize-y"
                    value={content[id]?.paragraph || ""}
                    onChange={(e) =>
                      handleContentChange(id, "paragraph", e.target.value)
                    }
                    placeholder="Write the main content for this section..."
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
          <button
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-200 transition duration-150 shadow-sm"
            type="button"
            onClick={onCancel}
          >
            <XCircleIcon className="w-5 h-5 mr-2" /> Cancel
          </button>
          <button
            className="flex items-center bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition duration-150 transform hover:scale-[1.02]"
            type="submit"
          >
            <CheckIcon className="w-5 h-5 mr-2" /> Save Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
