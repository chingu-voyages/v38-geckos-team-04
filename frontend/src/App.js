import React from 'react';
import Header from './components/Header';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import './sass/App.scss'

const App = () => (
  <React.Fragment>
    <Header />
    
    <main>
    <SearchForm />
      <ResultsList />
    </main>

    <footer className='footer'>
      <p>footer content</p>
    </footer>
  </React.Fragment>
)

export default App;
