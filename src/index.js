import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {BrowserRouter , Routes, Route} from 'react-router-dom'

import './index.css';
import App from './App';
import Home from './components/Home';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
  rootElement
);


