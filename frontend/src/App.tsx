import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>("");
  const [books, setBooks] = useState<string[]>([]);
  
  useEffect(() => {
    // Fetch the welcome message
    fetch('/')
      .then(response => response.text())
      .then(data => setMessage(data));
      
    // Fetch the list of books
    fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
        ))}
        </ul>
      </header>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
