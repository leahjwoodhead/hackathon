import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Logo-container">
      <img src={logo} alt="Logo" /></div>
       <h1>1 DAY = 1 STORY</h1>
       <div className="Button-Group">
       <div>
       <button onClick={takeToDashboard}>DISCOVER </button> </div>
       <div>
       <button className="aboutButton" onClick={takeToAbout}>ABOUT</button> </div> </div>
      </header>
    </div>
  );
}


function takeToDashboard() {
  alert('You clicked me!');
}

function takeToAbout() {
  alert('You clicked me!');
}

export default App;
