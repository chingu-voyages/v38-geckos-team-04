import React from 'react';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import './sass/App.scss'

const App = () => (
  <React.Fragment>
    <header>
      <h1>abb - always be building</h1>
    </header>
    
    <main>
    <SearchForm />
      <ResultsList />
    </main>

    <footer>
      <p>footer content</p>
    </footer>
  </React.Fragment>
)

export default App;
