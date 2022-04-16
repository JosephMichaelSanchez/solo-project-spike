import { HashRouter as Router, Route } from 'react-router-dom';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';

function App() {
  return (
    <div>
      <h1>Solo Project Spike</h1>
      <h2>Password Generator</h2>
      <Router>
        <Route path="/" exact>
          <StepOne />
        </Route>
        <Route path="/newpod" exact>
          <StepTwo />
        </Route>
      </Router>
    </div>
  );
}


export default App;
