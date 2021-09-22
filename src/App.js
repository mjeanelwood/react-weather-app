import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h2 className="title">Weather Search Engine</h2>
      <Weather />
      <p className="links">
        <a
          href="https://github.com/mjeanelwood/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Melba Elwood | hosted by{" "}
        <a
          href="https://app.netlify.com/sites/focused-shockley-f75a75/deploys"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
