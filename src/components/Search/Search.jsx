import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  async function handleSearch() {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?search=${searchQuery}&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error searching for games:", error);
    }
  }

  return (
    <>
      <div className="search">
        <FaSearch
          className="search-icon"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        />
        <input
          type="text"
          placeholder="Search for your favorite game"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}
