
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleNew from "./Pages/SingleNew";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/article/:id">
          <SingleNew />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
