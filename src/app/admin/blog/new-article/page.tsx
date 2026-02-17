"use client";
import MessageModal from "@/components/admin/MessageModal";
import ImageIcon from "@/components/icons/admin/ImageIcon";
import ListChecksIcon from "@/components/icons/admin/ListChecksIcon";
import OpenBookIcon from "@/components/icons/admin/OpenBookIcon";
import XCircleIcon from "@/components/icons/admin/XCircleIcon";
import { uploadToImgBB } from "@/lib/uploadImgBB";
import { uploadNewArticle } from "@/services/updateBlog";
import { CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [paragraphs, setParagraphs] = useState<number[]>([1]);
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [status, setStatus] = useState<"Published" | "Draft">("Draft"); // "Draft" || "Published"
  const [content, setContent] = useState<
    { header: string; paragraph: string }[]
  >([{ header: "", paragraph: "" }]);
  const [image, setImage] = useState<string>("");
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<{
    isOpen: boolean;
    type: string;
    message: string;
  }>({ isOpen: false, type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onCloseMessageModal = () => {
    setSubmitStatus({ ...submitStatus, isOpen: false });
  };

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
    num: number,
  ) => {
    e.preventDefault();
    setParagraphs((prev) => prev.filter((p) => p !== num));
    setContent((prev) => prev.filter((_, idx) => idx !== num - 1));
  };

  const handleContentChange = (
    index: number,
    field: "header" | "paragraph",
    value: string,
  ) => {
    const newContent = [...content];
    newContent[index][field] = value;
    setContent(newContent);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let imgUrl = await uploadToImgBB(e.target.files[0]);
      setImage(imgUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ isOpen: false, type: "", message: "" });
    setIsSubmitting(true);
    const articleData = {
      title,
      slug,
      imageUrl: image,
      contentBlocks: content,
      views: 0,
      status,
      createdAt: new Date().toISOString(),
    };
    try {
      await uploadNewArticle({ articleData });
      if (status === "Draft")
        setSubmitStatus({
          isOpen: true,
          type: "success",
          message: "Article saved as a draft successfully!",
        });
      else if (status === "Published")
        setSubmitStatus({
          isOpen: true,
          type: "success",
          message: "Article published successfully!",
        });
    } catch (error) {
      setSubmitStatus({
        isOpen: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Create New Article
          </h1>
        </div>
        <div
          className={`px-4 py-2 rounded-full flex items-center gap-2 border shadow-sm transition-all duration-300 ${
            status === "Published"
              ? "bg-green-50 border-green-200 text-green-700"
              : "bg-amber-50 border-amber-200 text-amber-700"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full animate-pulse ${
              status === "Published" ? "bg-green-500" : "bg-amber-500"
            }`}
          />
          <span className="text-sm font-bold uppercase tracking-wider">
            {status === "Published" ? "Live" : "Draft Mode"}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <ListChecksIcon className=" text-green-600 w-6 h-6 mr-2" /> Basic
            Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
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
                Publishing Status
              </label>
              <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => setStatus("Draft")}
                  className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all ${
                    status === "Draft"
                      ? "bg-amber-500 text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-200/50"
                  }`}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("Published")}
                  className={`flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${
                    status === "Published"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-200/50"
                  }`}
                >
                  Published
                </button>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-m font-medium text-gray-700 mb-2">
                Image
              </label>
              <div className="relative border-2 border-dashed border-gray-300 transition-colors duration-150 rounded-xl p-4 focus-within:border-green-500 bg-gray-50/50">
                <input
                  type="file"
                  className="w-full h-full opacity-0 cursor-pointer inset-0 absolute"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                />
                <div className="flex items-center justify-center gap-4">
                  {image ? (
                    <img
                      src={image}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm border border-gray-200"
                      alt="Preview"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-green-500 transition-colors">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-700">
                      {image ? "Image Selected" : "Click to upload image"}
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG</p>
                  </div>
                </div>
              </div>
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
            onClick={() => router.back()}
          >
            <XCircleIcon className="w-5 h-5 mr-2" /> Cancel
          </button>
          <button
            className={`flex items-center text-white px-8 py-3 rounded-xl shadow-lg transition duration-150 transform hover:scale-[1.02] 
            ${
              status === "Published"
                ? "bg-green-600 hover:bg-green-700 disabled:hover:bg-green-600"
                : "bg-amber-500 hover:bg-amber-600 disabled:hover:bg-amber-500"
            }
            disabled:opacity-75 disabled:hover:scale-none`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Uploading..."
            ) : (
              <>
                <CheckIcon className="w-5 h-5 mr-2" />
                {status === "Published" ? "Publish Article" : "Save as Draft"}
              </>
            )}
          </button>

          <MessageModal status={submitStatus} onClose={onCloseMessageModal} />
        </div>
      </form>
    </div>
  );
};

export default page;
