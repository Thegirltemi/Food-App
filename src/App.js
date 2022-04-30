import React from 'react';
import "./App.css";
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
     <>
   <Navbar/>  
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/menu' element={<Menu/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     </Routes>  
     </>
  );
}

export default App;
