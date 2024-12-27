/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";

export default function Items({ item, handleDelete, handlePacked }) {
  return (
    <div className="border border-accent py-2 px-4 rounded-md ">
      <span
        className={item.packed ? "line-through" : ""}
        onClick={() => handlePacked(item.id)}
      >
        {item.quantity} {item.description}
      </span>
      <span
        className="text-sm ml-3 cursor-pointer"
        onClick={() => handleDelete(item.id)}
      >
        ❌
      </span>
    </div>
  );
}
