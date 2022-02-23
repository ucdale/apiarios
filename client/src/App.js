import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';

const App =() => {
  const [data, loading] = useFetch('/api');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ciao per ora questa sarà la home page
        </p>
        <p>{loading ? 'loading...'  : data.message}</p>
        <a
          className="App-link"
          href="https://www.google.it/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjT1ICXjpb2AhWJRPEDHa9yBrYQFnoECAsQAQ&url=https%3A%2F%2Fit.wikipedia.org%2Fwiki%2FApplication_programming_interface&usg=AOvVaw0cIDNPqqFEU9OB-AdxhuVa"
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
