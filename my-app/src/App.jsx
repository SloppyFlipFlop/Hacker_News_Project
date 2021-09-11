
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleNews";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id">
          <SingleMovie />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
