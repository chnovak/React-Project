import React from "react"
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App(props) {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={()=>(<Home tasks={props.tasks} />)} />
          <Route path="/contact" component={Contact} />
        
        </Switch>
      </Router>
    </div>
  )
};



