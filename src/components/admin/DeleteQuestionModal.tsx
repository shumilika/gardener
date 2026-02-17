import React from "react";
import TrashIcon from "../icons/admin/TrashIcon";

interface PropsDeleteQuestionModal {
  onClose: () => void;
  isOpen: boolean;
  deleteButton: () => void;
}

const DeleteQuestionModal: React.FC<PropsDeleteQuestionModal> = ({
  onClose,
  isOpen,
  deleteButton,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
        <div className="pt-8 pb-4 flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-50 mb-4">
            <TrashIcon className="h-8 w-8 text-red-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">Delete Article?</h3>
          <p className=" text-sm text-gray-500 mt-2 px-8 text-center leading-relaxed">
            This action cannot be undone. This will permanently remove the
            article from your dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-2 p-6 pt-2">
          <button
            onClick={deleteButton}
            className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all shadow-2xl shadow-red-200"
          >
            Delete Article
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuestionModal;
