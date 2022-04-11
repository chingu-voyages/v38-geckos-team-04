import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import About from './components/pages/About';
import './sass/App.scss'

const App = () => (
  <React.Fragment>
    <Header />
    
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Main />} />
      {/* <Route path="*" */}
    </Routes>

    <Footer />
  </React.Fragment>
)

export default App;
