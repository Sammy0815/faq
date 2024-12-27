/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Items from "./Items";

export default function PackingList({
  submittedData,
  handleDelete,
  handlePacked,
}) {
  const [sortBy, setsortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = submittedData;

  if (sortBy === "description")
    sortedItems = submittedData
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    // eslint-disable-next-line no-unused-vars
    sortedItems = submittedData
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <section className="section-three bg-chocolate flex justify-center flex-col py-6 px-2 gap-4">
      <div className="item-list-container text-accent flex justify-center gap-10">
        {submittedData.map((item) => (
          // Item Component
          <Items
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handlePacked={handlePacked}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setsortBy(e.target.value)}
          className="bg-accent py-2 px-4 rounded-lg outline-none"
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>

        <button className="bg-[#76C7AD] py-2 px-4 font-bold rounded-lg">
          CLEAR LIST
        </button>
      </div>
    </section>
  );
}
