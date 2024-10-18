import './App.css';
import Login from './components/Login';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
