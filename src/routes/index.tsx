import React from 'react';
import '../index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layouts from '../components/Layouts';
import BooksList from '../components/Books';
import BookView from '../components/Books/bookView';
import Cart from '../components/Books/cart';
import Myorders from '../components/Books/myOrders';
import buyBooks from '../components/Books/buyBook';


const Routes : React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={props => (<Layouts props={props} component={BooksList} />)} />
        <Route path="/book-view/:id" render={props => (<Layouts props={props} component={BookView} />)} />
        <Route path="/cart" render={props => (<Layouts props={props} component={Cart} />)} />
        <Route path="/my-orders" render={props => (<Layouts props={props} component={Myorders} />)} />
        <Route path="/buy-book" render={props => (<Layouts props={props} component={buyBooks} />)} />
      </Switch>
    </Router>
  );
}

export default Routes;