//React-Router Imports
import { Route, Switch } from "react-router-dom";

//Styling Imports
import "./assets/App.css";

//Page Imports
import ContactPage from "./pages/HomePage";
import GuidoPage from "./pages/HomePage";
import WorkPage from "./pages/HomePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/guido" component={GuidoPage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
