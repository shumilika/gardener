"use client";
import React, { useEffect, useState } from "react";
import SaveIcon from "../icons/admin/SaveIcon";
import OpenBookIcon from "../icons/admin/OpenBookIcon";
import LayoutListIcon from "../icons/admin/LayoutListIcon";
import ImageIcon from "../icons/admin/ImageIcon";
import CloseIcon from "../icons/admin/CloseIcon";
import PlusIcon from "../icons/admin/PlusIcon";
import CheckIcon from "../icons/admin/CheckIcon";
import TrashIcon from "../icons/admin/TrashIcon";

interface AddPostPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPostPage: React.FC<AddPostPageProps> = ({ isOpen, onClose }) => {
  const [paragraphs, setParagraphs] = useState<number[]>([1]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
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
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className="rounded-2xl bg-white shadow-xl relative max-h-[95vh] overflow-y-auto w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white">
                <div className="flex flex-row items-center">
                  <SaveIcon className="text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Create New Article
                  </h2>
                </div>
                <div>
                  <button
                    className="text-gray-500 hover:text-gray-800 transition p-2 rounded-full hover:bg-gray-100"
                    onClick={onClose}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="space-y-4 p-4 border border-indigo-200 rounded-lg bg-indigo-50">
                  <h3 className="text-lg font-semibold text-indigo-700">
                    Basic Information
                  </h3>

                  <div>
                    <label>Article Title</label>
                    <div className="flex flex-row border border-gray-300 rounded-lg focus-within:outline-2 gap-2 items-center bg-white">
                      <OpenBookIcon className=" text-gray-400 ml-2" />
                      <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 focus:outline-none"
                        value={title}
                      />
                    </div>
                  </div>

                  <div>
                    <label>Slug (URL Address)</label>
                    <div className="flex flex-row border border-gray-300 rounded-lg focus-within:outline-2 gap-2 items-center bg-white">
                      <LayoutListIcon className=" text-gray-400 ml-2" />
                      <input
                        type="text"
                        placeholder="Leave empty for auto-generation"
                        className="w-full p-3 focus:outline-none"
                        value={slug}
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <label>Image URL</label>
                    <div className="flex flex-row border border-gray-300 rounded-lg focus-within:outline-2 gap-2 items-center bg-white">
                      <ImageIcon className=" text-gray-400 ml-2" />
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
                <div className="flex flex-row items-center justify-between my-4 pt-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Content Section
                  </h2>
                  <button
                    onClick={addParagraph}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center px-3 py-1 rounded-full bg-indigo-100 hover:bg-indigo-200 transition shadow-sm"
                  >
                    <PlusIcon className="w-4 h-4 mr-1" />
                    Add Section
                  </button>
                </div>
                {paragraphs.map((num, id) => (
                  <div
                    key={id}
                    className="w-full flex flex-col mb-6 p-5 gap-2 border border-dotted border-gray-300 rounded-xl bg-gray-50"
                  >
                    <div className="flex flex-row justify-between items-center border-b">
                      <h4 className="text-base font-semibold text-gray-700 mb-3 pb-2">Section #{id + 1}</h4>
                      <div>
                        {num > 1 && (
                        <button onClick={(e) => deleteParagraph(e, num)}>
                          <TrashIcon className="w-4 h-4 text-red-500"/>
                        </button>
                      )}
                      </div>
                    </div>
                    <label htmlFor="">Section Header</label>
                    <input
                      type="text"
                      className="border"
                      value={content[id]?.header || ""}
                      onChange={(e) =>
                        handleContentChange(id, "header", e.target.value)
                      }
                    />
                    <label htmlFor="">Content Paragraph</label>
                    <textarea
                      className="border"
                      value={content[id]?.paragraph || ""}
                      onChange={(e) =>
                        handleContentChange(id, "paragraph", e.target.value)
                      }
                    ></textarea>
                  </div>
                ))}
                <div className="flex flex-row justify-end">
                  <button
                    className="bg-[green] text-white p-5 flex flex-row"
                    type="submit"
                  >
                    <CheckIcon /> Save Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPostPage;
