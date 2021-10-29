import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddYourPlan from "./Components/AddYourPlan/AddYourPlan";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addAplan">
          <AddYourPlan></AddYourPlan>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
