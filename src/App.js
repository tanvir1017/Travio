import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddYourPlan from "./Components/AddYourPlan/AddYourPlan";
import Blog from "./Components/Blog/Blog";
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
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addAplan">
            <AddYourPlan></AddYourPlan>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
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
