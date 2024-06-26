import './App.css';
import React from 'react';
import { Home } from './components/Home';
import { Signin } from './components/Signin';
import {Signup} from './components/Signup';
import { Upload } from './components/Upload';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
