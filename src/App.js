

import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Main from './Main';

import Project from './Project';
import About from './About';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';





// My App-->Main
class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/main" element={<Main/>} />
          <Route exact path="/project" element={<Project/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
        <Footer/>
     
      </div>

      
    )
  }
}

export default App;
