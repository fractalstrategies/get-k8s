import logo from './images/k8s-logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Get started with <code>Kubernetes</code> and save ⏱💰😥😭.
        </p>
        <a
          className="App-link"
          href="https://shiraz.is.fat"
          target="_blank"
          rel="noopener noreferrer"
        >Learn k8s with us!</a>
      </header>
    </div>
  );
}

export default App;
