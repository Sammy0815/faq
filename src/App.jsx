/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { faqs } from "./Components/questions.js";

import "./App.css";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  let number = 0;
  function handleToggle(id) {
    setSelectedItem(selectedItem === id ? null : id);
  }

  return (
    <div className="flex flex-col justify-center items-center py-6 gap-2">
      <h2 className="text-xl font-bold">React Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="accordion-wrapper w-[550px] bg-white rounded-md shadow-md"
        >
          {/* According Header */}
          <div
            className={`accordion-header p-4 flex text-md font-semibold cursor-pointer ${
              faq.id === selectedItem
                ? "text-green-600 border-t-4 border-green-600"
                : ""
            }`}
            onClick={() => handleToggle(faq.id)}
          >
            <span
              className={
                faq.id === selectedItem ? "text-green-600" : "text-gray-400"
              }
            >
              0{(number += 1)}
            </span>
            <h2 className="w-[450px] ml-3">{faq.question}</h2>
            <span>{faq.id === selectedItem ? "-" : "+"}</span>
          </div>
          <div
            // According Details
            className={`accordion-details bg-gray-100 p-4 min-h-[100px] ${
              faq.id === selectedItem ? "block" : "hidden"
            }`}
          >
            <p className="ml-7 text-sm w-[450px]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
