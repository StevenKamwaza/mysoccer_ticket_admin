import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/home/Home';
import About from './pages/home/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element ={<App />}/>
      <Route path='/home' element = { <Home/>} />
      <Route path ="/about" element ={<About/>} />
    </Routes>
  </BrowserRouter>
);
