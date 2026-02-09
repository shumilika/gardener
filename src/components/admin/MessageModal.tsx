import React from "react";
interface ArticleStatus {
  isOpen: boolean;
  type: string;
  message: string;
}

interface PropsMessageModal {
  onClose: () => void;
  status: ArticleStatus;
}

const MessageModal: React.FC<PropsMessageModal> = ({
  onClose,
  status,
}) => {
  if (!status.isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center transform transition-all">
        {/* Icon Circle */}
        <div
          className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4 ${status.type === "error" ? "bg-red-100" : "bg-green-100"}`}
        >
          {status.type === "error" ? (
            <span className="text-red-600 text-xl">✕</span>
          ) : (
            <span className="text-green-600 text-xl">✓</span>
          )}
        </div>

        {/* <h3 className="text-lg font-bold text-gray-900">{title}</h3> */}
        <p className="text-sm text-gray-500 mt-2">{status.message}</p>

        <button
          onClick={onClose}
          className={`mt-6 w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors ${
            status.type === "error"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
