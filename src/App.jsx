import React, { useState } from "react";
import { questions } from "./Components/questions.js";

import "./App.css";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelected(id) {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  return (
    <>
      <h2 className="text-2xl text-center font-bold">FLASHCARDS</h2>
      <div className="flex flex-wrap justify-center items-center h-screen w-[800px] gap-5">
        {questions.map((item) => (
          <div
            key={item.id}
            className={`w-[350px] h-[200px] p-5 ${
              item.id === selectedId
                ? "bg-red-700 text-white"
                : "bg-gray-200 text-red-500"
            } rounded-lg shadow-md cursor-pointer flex justify-center items-center  text-center`}
            onClick={() => handleSelected(item.id)}
          >
            {item.id === selectedId ? item.answer : item.question}
          </div>
        ))}
      </div>
    </>
  );
}
