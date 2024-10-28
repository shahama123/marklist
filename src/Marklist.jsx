import React, { useState } from "react";
import Modal from "./Modal";

const Marklist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const tableData = [
    { id: 1, name: "John Doe", subject: "Math", mark: 85 },
    { id: 2, name: "Jane Smith", subject: "Science", mark: 92 },
    { id: 3, name: "Michael Johnson", subject: "English", mark: 88 },
    { id: 4, name: "Emily Davis", subject: "History", mark: 79 },
  ];

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-center">
        MID TERM EXAMINATION 2024-25
      </h1>
      <h1 className="text-xl text-center mt-5 font-semibold">Mark List</h1>

      <table className="w-auto mt-8 mx-auto border-collapse bg-white shadow-lg">
        <thead>
          <tr className="bg-stone-900 text-white uppercase text-sm  leading-normal">
            <th className="border border-gray-300 px-4 py-2">ID </th>
            <th className="border border-gray-300 px-4 py-2">NAME </th>
            <th className="border border-gray-300 px-4 py-2">SUBJECT </th>
            <th className="border border-gray-300 px-4 py-2">MARK </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="text-center text-stone-600 transition duration-500 cursor-pointer"
            >
              <td className="border px-6 py-3">{item.id}</td>
              <td className="border px-6 py-3">{item.name}</td>
              <td className="border px-6 py-3">{item.subject}</td>
              <td className="border px-6 py-3 ">
                {item.mark}
                <button
                  onClick={() => openModal(item)}
                  className="border ml-4 bg-stone-400  hover:bg-stone-600 text-white transition duration-500 px-3 py-1 border-slate-900 rounded"
                >
                  View details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        student={selectedStudent}
        onClose={closeModal}
      />
    </div>
  );
};

export default Marklist;
