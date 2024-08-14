import './App.scss';
import CopyButton from "./components/CopyButton";

function App() {
  return (
    <div className="container-fluid">
      <header className="container">
        <hgroup>
            <h1>PLACEHOLDER_TITLE</h1>
            <p>Get started</p>
        </hgroup>

        <CopyButton value="Copy text" label="Copy to clipboard" />
      </header>
    </div>
  );
}

export default App;
