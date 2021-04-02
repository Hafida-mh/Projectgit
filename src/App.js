import Details from "./components/Details";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Principal from "./components/Principal.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Principal />
          </Route>


          <Route path="/:name">
            <Details />
          </Route>


        </Switch>

      </Router>



    </div>
  );
}

export default App;
