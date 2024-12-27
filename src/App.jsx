import React from "react";

import "./App.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";

export default function App() {
  const [submittedData, setSubmittedData] = useState([]);

  function handleDelete(id) {
    console.log(id);

    const filteredData = submittedData.filter((item) => item.id !== id);
    setSubmittedData(filteredData);
  }

  // function handlePacked(id) {
  //   setSubmittedData((submittedData) =>
  //     submittedData.map((item) =>
  //       item.id === id ? { ...submittedData, packed: !item.packed } : item
  //     )
  //   );
  // }
  function handlePacked(id) {
    // setSubmittedData((submittedData) =>
    const newSubmitedData = submittedData.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setSubmittedData(newSubmitedData);
  }

  return (
    <div className="main-container flex flex-col justify-center ">
      <Logo />
      <Form setSubmittedData={setSubmittedData} />
      <PackingList
        submittedData={submittedData}
        // setSubmittedData={setSubmittedData}
        handleDelete={handleDelete}
        handlePacked={handlePacked}
      />
      <Stats />
    </div>
  );
}
