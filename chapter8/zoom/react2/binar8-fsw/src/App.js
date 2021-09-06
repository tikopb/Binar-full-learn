import logo from './logo.svg';
import './App.css';

function App() {
  const {tittle} = styles
  return (
    <div className="App">
      <h1 style={tittle}> Hello World</h1>
      <h2 style={{backgroundColor:"green"}}> My Name is Jon</h2>
    </div>
  );
}

const styles = {
  tittle: {
    backgroundColor:"red",   
    color: "blue",
    fontWeight: "bold"
  }
}

export default App;
