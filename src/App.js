import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import ShowDetails from './components/ShowDetails';

/*  <Switch>
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/beers">
        
        </Route>
      </Switch> */


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Beers" component={Beers}/>
        <Route exact path="/RandomBeer" component={RandomBeer}/>
        <Route exact path="/NewBeer" component={NewBeer}/>
        <Route exact path='/Beers/:Id' component={ShowDetails}/>

      </Switch> 
     
    </>
  );
}


export default App;
