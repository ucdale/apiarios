import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://it.wikipedia.org/wiki/Application_programming_interface"
          target="_blank"
          rel="noopener noreferrer"
        >
         Cosa sono le API
        </a>
      </header>
    </div>
  );
}

export default App;
