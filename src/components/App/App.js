import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import MovieList from '../MovieList/MovieList'
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';

function App() {
  return (
    <div className="App">
      <h1>Solo Project Spike</h1>
      <h2>Password Generator</h2>
      <Router>
        <Route path="/" exact>
          {/* <MovieList /> */}
          <StepOne />
        </Route>
        {/* Details page */}
        <Route path="/newpod" exact>
          <StepTwo />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
