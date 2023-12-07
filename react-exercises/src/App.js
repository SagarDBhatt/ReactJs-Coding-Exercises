import logo from './logo.svg';
import './App.css';
import CounterApp from './pages/exercises/counter';
import LevenshteinDistance from './pages/exercises/Algochurn.com/findLevenshteinDistance';
import CalculateTheSmallestDifference from './pages/exercises/Algochurn.com/calcSmallestDifferenceBetnArrays';
import SolveDiagonalDifference from './pages/exercises/HackerRank/Algorithm/Warmup/DiagonalDifference';
import ArrayRatio from './pages/exercises/HackerRank/Algorithm/Warmup/ArrayRatio';

function App() {
  return (
    <div id="coding-practice-div-parent-tag">
      <ArrayRatio />


     {/* <CounterApp />
     <LevenshteinDistance /> */}

      {/* Exercise 3: */}
      {/* <CalculateTheSmallestDifference /> */}
      {/* <SolveDiagonalDifference /> */}
    
    </div>
  );
}

export default App;
