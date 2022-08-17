import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import QsList from './components/QsList';
import QsAdd from './components/QsAdd';
import QsEdit from './components/QsEdit';
import ExamStart from './components/ExamStart';
import ExamProgress from './components/ExamProgress';
import ExamResult from './components/ExamResult';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className='container'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/qslist' element={<QsList/>} />
          <Route path='/qsadd' element={<QsAdd/>} />
          <Route path='/qsedit' element={<QsEdit/>} />
          <Route path='/examstart' element={<ExamStart/>} />
          <Route path='/examprogress' element={<ExamProgress/>} />
          <Route path='/examresult' element={<ExamResult/>} />
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
