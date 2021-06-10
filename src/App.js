import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

import myCV from "./myCV.pdf";


function App() {


  return (
    <div className="App">
      <Switch>

        <Route exact path="/" render={()=>{
          return <Home />
        }}/>

        <Route exact path="/projects" render={()=>{
          return <Projects />
        }}/>

        <Route exact path="/about" render={()=>{
          return <About myCV={myCV}/>
        }}/>

        <Route exact path="/contact" render={()=>{
          return <Contact />
        }}/>

      </Switch>

    </div>
  );
}

export default  withRouter(App);
