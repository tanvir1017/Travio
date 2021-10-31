import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import MyBook from "./Components/MyBook/MyBook";
import PrivateRoute from "./Components/Private/Private";
import ServiceInfo from "./Components/Service/ServiceInfo";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/manage_orders">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/serviceDetails/:id">
            <ServiceInfo></ServiceInfo>
          </PrivateRoute>
          <PrivateRoute path="/mybook">
            <MyBook></MyBook>
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
