import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layouts from './Modules/Layouts';
import BooksList from './Modules/Books';
import BookView from './Modules/Books/bookView';
import Cart from './Modules/Books/cart';
import Myorders from './Modules/Books/myOrders';


const Routes : React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={props => (<Layouts props={props} component={BooksList} />)} />
        <Route path="/book-view/:id" render={props => (<Layouts props={props} component={BookView} />)} />
        <Route path="/cart" render={props => (<Layouts props={props} component={Cart} />)} />
        <Route path="/my-orders" render={props => (<Layouts props={props} component={Myorders} />)} />
      </Switch>
    </Router>
  );
}

export default Routes;
