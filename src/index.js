import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './components/General/Main.js';
import NavBar from './components/General/NavBar';
import HomeDescp from './components/General/HomeDescp';
import ANPList from './components/ANP/ANPList';
import {  
  BrowserRouter, 
  Switch, 
  Route,
  Routes} from "react-router-dom";
import ANPDetail from './components/ANP/ANPDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <HomeDescp/>

    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<ANPList/>}/>
          <Route exact path='/anp/:id_anp' element={<ANPDetail/>} />
        </Routes>
      </BrowserRouter>
    
    </div>

  </React.StrictMode>
);

