import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import NavBar2 from './components/NavBar2';



function App() {

  return (
    <div className="App">
    {window.location.pathname==='/'?null:<NavBar2/>}
      <Switch>
        <Route exact path="/" render={()=>{
          return(
              <Home/>
            )
        }}/>

        <Route exact path="/projects" render={()=>{
            return(
              <Projects/>
            )
        }}/>

        <Route exact path="/about" render={()=>{
             return(
              <About/>
            )
        }}/>

        <Route exact path="/contact" render={()=>{
             return(
              <Contact/>
            )
        }}/>

      </Switch>

    </div>
  );
}

export default  withRouter(App);
