import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Weather Search Engine</h2>
        <Weather />
        <p>
          <a
            href="https://github.com/mjeanelwood/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
        </p>
      </header>
      <footer>
        {" "}
        <p className="links">
          <a
            href="https://github.com/mjeanelwood/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source coding
          </a>{" "}
          by Melba Elwood | hosted by{" "}
          <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
