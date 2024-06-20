import './App.css';
import React from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';
import {Signup} from './components/Signup';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
