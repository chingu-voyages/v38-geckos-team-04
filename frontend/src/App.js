import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import './sass/App.scss'

const App = () => (
  <React.Fragment>
    <Header />
    
    <Main />

    <Footer />
  </React.Fragment>
)

export default App;
