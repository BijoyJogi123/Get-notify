// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
      <div>
      <BrowserRouter >
       <NavBar/>
        
      <Routes>
      <Route exact path="/" element={<News key="general" pageSize={5} newsName="All about today News" country="in" category="general"/>}/>
        <Route exact path="/general" element={<News key="general" pageSize={5} newsName="All about today News" country="in" category="general"/>}/>
        <Route exact path="/business" element={<News key="business" pageSize={5} newsName="All about today business" country="in" category="business"/>}/> 
        <Route exact path="/entertainment" element={<News key="entertainment"pageSize={5} newsName="All about today Entertainment" country="in" category="entertainment"/>}/>
        <Route exact path="/health" element={<News key="health"pageSize={5} country="in" newsName="All about today healthness" category="health"/>}/>
        <Route exact path="/science" element={<News key="science"pageSize={5} country="in" newsName="About Science" category="science"/>}/>
        <Route exact path="/sports" element={<News key="sports"pageSize={5} country="in" newsName="Todays Sports" category="sports"/>}/>
        <Route exact path="/technology" element={<News key="technology"pageSize={5} country="in" newsName="Technolagies" category="technology"/>}/>
      </Routes>

    </BrowserRouter>
      </div>
      </>
    );
  }
}


