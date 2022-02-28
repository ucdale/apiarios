import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Home =() => {
  const [data, loading] = useFetch('/api');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ciao per ora questa sarà la home page
        </p>
        <Link to="/lista">Lista Apiari</Link>
        <p>{loading ? 'loading...'  : data.message}</p>
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

export default Home;
