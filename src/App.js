import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Footer from './pages/Home/Footer/Footer';
import Notfounde from './pages/Notfounde/Notfounde';
import AddItem from './pages/AddItem/AddItem';
import PopularDesiert from './pages/Home/PopularDesiert/PopularDesiert';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import VerifyItem from './pages/VerifyItem/VerifyItem';
import ManageProduct from './pages/ManageProduct/ManageProduct';
import About from './pages/About/About';
import MyOrders from './pages/MyOrders/MyOrders';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/popularDesiert">
              <PopularDesiert></PopularDesiert>
            </Route>
            <PrivateRoute path="/item/:verifyId">
              <VerifyItem></VerifyItem>
            </PrivateRoute>
            <PrivateRoute path="/addItem">
              <AddItem></AddItem>
            </PrivateRoute>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="/">

            </Route>
            <Route path="/">

            </Route>
            <Route path="*">
              <Notfounde></Notfounde>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
