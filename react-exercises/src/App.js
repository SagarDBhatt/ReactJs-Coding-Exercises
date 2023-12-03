import logo from './logo.svg';
import './App.css';
import CounterApp from './pages/exercises/counter';
import LevenshteinDistance from './pages/exercises/Algochurn.com/findLevenshteinDistance';
import CalculateTheSmallestDifference from './pages/exercises/Algochurn.com/calcSmallestDifferenceBetnArrays';
import SolveDiagonalDifference from './pages/exercises/HackerRank/Algorithm/DiagonalDifference';

function App() {
  return (
    <div id="coding-practice-div-parent-tag">
     <CounterApp />
     <LevenshteinDistance />

      {/* Exercise 3: */}
      <CalculateTheSmallestDifference />

      <SolveDiagonalDifference />
    
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
