import React,{lazy,Suspense} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = lazy(()=> import('./components/Projects'));
const About = lazy(()=> import('./components/About'));
const Contact = lazy(()=> import( './components/Contact'));


function App() {


  return (
      <Suspense fallback={<div className="home--loading">LOADING<Spinner animation="border" variant="light"  role="status" style={{fontSize:'16px'}}/></div>}>
      <div className="App">
        <BrowserRouter>
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
        </BrowserRouter>
        </div>
      </Suspense>
  );
}

export default App;
