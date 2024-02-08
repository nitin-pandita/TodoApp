import React, { useState } from "react";
const Category = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      {/* Category filter dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="shopping">Shopping</option>
      </select>
    </div>
  );
};

export default Category;
