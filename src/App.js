import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddYourPlan from "./Components/AddYourPlan/AddYourPlan";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Private/Private";
import ServiceInfo from "./Components/Service/ServiceInfo";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addAplan">
            <AddYourPlan></AddYourPlan>
          </Route>
          <PrivateRoute path="/serviceDetails/:id">
            <ServiceInfo></ServiceInfo>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
