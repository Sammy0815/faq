/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function Form({ setSubmittedData }) {
  const [formData, setFormData] = useState({
    description: "",
    quantity: 1,
    packed: false,
    id: Date.now(),
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    // console.log(submittedData);
    setFormData({
      description: "",
      quantity: 1,
      packed: false,
      id: Date.now(),
    });
  }

  return (
    <section className="section-two bg-orangeDark py-4 px-2 flex flex-col sm:flex-row justify-center items-center gap-2">
      <p className="text-xl">What do you need for your trip? 😍</p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <select
          className="bg-accent py-2 px-4 rounded-lg outline-none"
          id="qty"
          name="quantity"
          value={formData.quantity}
          // @ts-ignore
          onChange={(e) => handleChange(e)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="bg-accent py-2 px-4 rounded-lg outline-none"
          type="text"
          name="description"
          placeholder="item..."
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="bg-[#76C7AD] py-2 px-4 font-bold rounded-lg"
        >
          ADD
        </button>
      </form>
    </section>
  );
}
