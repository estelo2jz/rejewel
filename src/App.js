import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Chainz from './components/Chainz';
import Watchz from './components/Watchz';
import Pendantz from './components/Pendantz';
import Cart from './components/Cart';
import Logo from './components/Logo.js';
import Footer  from './Footer';
import Header from './components/Header';
import Payment from './components/Payment';
import Shipping from './components/shipping';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Logo />
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chainz" component={Chainz} />
            <Route exact path="/watchz" component={Watchz} />
            <Route exact path="/pendantz" component={Pendantz} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/payment" component={Payment} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
