import './App.css';
import CopyButton from "./components/CopyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PLACEHOLDER_TITLE</h1>
        <p>Get started</p>

        <CopyButton value="Copy text" label="Copy to clipboard" />
      </header>
    </div>
  );
}

export default App;
