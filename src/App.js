import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Grillz from './components/Grillz';
import Chainz from './components/Chainz';
import Watchz from './components/Watchz';
import Pendantz from './components/Pendantz';
import Cart from './components/Cart';
import Logo from './components/Logo.js';
import Footer  from './Footer';
import Header from './components/Header';
import Payment from './components/Payment';
import Shipping from './components/shipping';

import About from './components/footerPages/About';
import Blog from './components/footerPages/Blog';
import Carrers from './components/footerPages/Carrers';
import Contact from './components/footerPages/Contact';
import Privacy from './components/footerPages/Privacy';
import Support from './components/footerPages/Support';

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
            <Route path="/grillz" component={Grillz} />
            <Route path="/chainz" component={Chainz} />
            <Route path="/watchz" component={Watchz} />
            <Route path="/pendantz" component={Pendantz} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/payment" component={Payment} />

            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/carrers" component={Carrers} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/support" component={Support} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
