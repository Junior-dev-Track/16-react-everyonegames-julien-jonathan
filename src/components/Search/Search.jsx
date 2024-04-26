import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  function handleChange(event) {
    // console.log(event.target.value);
    if (event.target.value.length > 3) {
      //   callAPI();
      console.log("API called");
    }
  }
  return (
    <>
      <div className="search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for your favorite game"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
