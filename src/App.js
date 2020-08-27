import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layouts from './Modules/Layouts';
import BooksList from './Modules/Books';
import BookView from './Modules/Books/bookView';
import Cart from './Modules/Books/cart';
import Myorders from './Modules/Books/myOrders';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={props => (<Layouts props={props} component={BooksList} />)} />
        <Route path="/book-view" render={props => (<Layouts props={props} component={BookView} />)} />
        <Route path="/cart" render={props => (<Layouts props={props} component={Cart} />)} />
        <Route path="/my-orders" render={props => (<Layouts props={props} component={Myorders} />)} />
      </Switch>
    </Router>
  );
}

export default App;
