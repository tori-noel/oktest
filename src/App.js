import logo from "./logo.png";
import "./App.css";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <header>
        {" "}
        <Navbar />{" "}
      </header>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
