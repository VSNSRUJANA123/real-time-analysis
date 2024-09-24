import React, { useState, useEffect } from "react";
import "./App.css";

const TextAnalysis = () => {
  const [text, setText] = useState("");
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  useEffect(() => {
    calculateStatistics();
  }, [text]);

  // Function to count unique words
  const calculateUniqueWords = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  // Function to count characters excluding spaces and punctuation
  const calculateCharCount = (text) => {
    const chars = text.replace(/[\s\W_]+/g, ""); // Remove spaces and non-alphanumeric characters
    return chars.length;
  };

  // Function to calculate both unique word count and character count
  const calculateStatistics = () => {
    setUniqueWordCount(calculateUniqueWords(text));
    setCharCount(calculateCharCount(text));
  };

  // Function to handle string replacement
  const handleReplaceAll = () => {
    const replacedText = text.replace(
      new RegExp(searchString, "g"),
      replaceString
    );
    setText(replacedText);

    // Optional Bonus: Highlight replaced text
    const highlighted = replacedText.replace(
      new RegExp(replaceString, "g"),
      `<mark>${replaceString}</mark>`
    );
    setHighlightedText(highlighted);
  };

  return (
    <div className="container">
      <h1>Real-Time Text Analysis</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />

      <div className="statistics">
        <p>Unique Words: {uniqueWordCount}</p>
        <p>Characters (excluding spaces and punctuation): {charCount}</p>
      </div>

      <div className="replace-section">
        <input
          type="text"
          placeholder="Search string"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace with"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button onClick={handleReplaceAll}>Replace All</button>
      </div>

      {/* Optional Bonus: Display highlighted text */}
      {highlightedText && (
        <div
          className="highlighted-text"
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        ></div>
      )}
    </div>
  );
};

export default TextAnalysis;
