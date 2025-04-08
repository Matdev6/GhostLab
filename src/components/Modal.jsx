import React from "react";

const Modal = ({ open, onClose, children }) => {

  return (
    //backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-black/30" : "invisible"} `}>
      <div 
      onClick={e => e.stopPropagation()}
      className={`bg-white rounded-xl shadow sm:p-8 p-2 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
