import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Bridal from './components/Bridal';
import Commerical from './components/Commerical';
import Contact from './components/Contact';
import Editorial from './components/Editorial';
import Lifestyle from './components/Lifestyle';
import Swimwear from './components/Swimwear';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header/>
          <main>
            <Route exact path = '/'component={Landing}/>
            <Route path='/about' component={About}/>
            <Route path='/editorial' component={Editorial}/>
            <Route path='/bridal' component={Bridal}/>
            <Route path='/lifestyle' component={Lifestyle}/>
            <Route path='/swimwear' component={Swimwear}/>
            <Route path='/commerical' component={Commerical}/>
            <Route path='/contact' component={Contact}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
