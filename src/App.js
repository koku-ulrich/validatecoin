import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './components/pages/accueil/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './components/pages/token/create/Create';
import View from './components/pages/token/view/View';
import Buy from './components/pages/token/buy/Buy';
import Put from './components/pages/sale/put/Put';
import Remove from './components/pages/sale/remove/Remove';
import Contact from './components/pages/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/create-token' component={Create} />
        <Route path='/view-tokens' component={View} />
        <Route path='/buy-token' component={Buy} />
        <Route path='/put-sale' component={Put} />
        <Route path='/remove-sale' component={Remove} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;



