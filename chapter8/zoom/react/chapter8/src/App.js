// import logo from './logo.svg';
import logo from './images/logo.png';
import SubmitButton from './components/SubmitButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Binar Academy Chapter 8</h2>
        <SubmitButton/>
      </header>
    </div>
  );
}

export default App;
