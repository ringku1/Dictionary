import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WordDetail from "./WordDetail";
import "./App.css";

function App() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [theme]);

  const handleSelectWord = (wordObj) => {
    setSelectedWord(wordObj);
  };

  const handleCloseDetail = () => {
    setSelectedWord(null);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
      <h1>Dictionary</h1>
      <SearchBar onSelectWord={handleSelectWord} />
      <WordDetail wordObj={selectedWord} onClose={handleCloseDetail} />
    </div>
  );
}

export default App;
