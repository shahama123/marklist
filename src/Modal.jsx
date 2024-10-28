import React from "react";

const Modal = ({ isOpen, student, onClose }) => {
  if (!isOpen || !student) return null;
  // Do not render if modal is not open or student data is null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Student Details</h2>
        <p>
          <strong>ID:</strong> <span className="pl-1">{student.id}</span>
        </p>
        <p>
          <strong>Name:</strong> <span className="pl-1">{student.name}</span>
        </p>
        <p>
          <strong>Subject:</strong>{" "}
          <span className="pl-1">{student.subject}</span>
        </p>
        <p>
          <strong>Mark:</strong> <span className="pl-1">{student.mark}</span>
        </p>
        <button
          className="mt-4 ml-24 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
