import React from 'react';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader = false,
  showActionBtn = false,
  actionBtnIcon = null,
  actionBtnText = '',
  onActionClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
      {/* Modal container */}
      <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
        {/* Close Button (always shown) */}
        <button
          type="button"
          className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-3.5 right-3.5 z-10"
          onClick={onClose}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        {/* Modal Header (optional) */}
        {!hideHeader && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
            {showActionBtn && (
              <button className="btn-small-light mr-12" onClick={onActionClick}>
                {actionBtnIcon}
                {actionBtnText}
              </button>
            )}
          </div>
        )}

        {/* Modal Body (scrollable) */}
        <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar p-4">
          <div className="flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;