import './App.css';
import Board from './components/Board/Board';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <Board/>
    </div>
  );
}

export default App;
