
import './App.css';

import NavigationBar from './components/NavigationBar';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

function App() {
  return (

    <div>

      <NavigationBar />

      <Routes>

        <Route path='/' element={<Home />}></Route >

        <Route path='/dashboard' element={<Dashboard />}></Route>

        <Route path='/contact' element={<Contact />}></Route>

        <Route path='/detail/:id' element={<Detail />}></Route>

        <Route path='/AddStudent' element={<AddStudent />}></Route>

        <Route path='/UpdateStudent/:id' element={<UpdateStudent />}></Route>


      </Routes>

    </div>



  );
}

export default App;
