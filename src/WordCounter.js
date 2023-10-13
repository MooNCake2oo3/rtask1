import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
    countWords();
  };

  const countWords = () => {
    const words = text.split(' ');
    setWordCount(words.length);
  };

  return (
    <div>
      <textarea
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
