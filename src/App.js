import React from 'react';
import WordCounter from './WordCounter';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Word counter</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <WordCounter />
      </div>
    </div>
  );
}

export default App;

