import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WordDetail from "./WordDetail";
import "./App.css";

function App() {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleSelectWord = (wordObj) => {
    setSelectedWord(wordObj);
  };

  const handleCloseDetail = () => {
    setSelectedWord(null);
  };

  return (
    <div className="App">
      <h1>React Dictionary</h1>
      <SearchBar onSelectWord={handleSelectWord} />
      <WordDetail wordObj={selectedWord} onClose={handleCloseDetail} />
    </div>
  );
}

export default App;
