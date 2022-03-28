import React from 'react';
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import './sass/App.scss'

const App = () => (
  <React.Fragment>
    <header>
      <h1>abb - always be building</h1>
      <p>Hello App Ideas World</p>
      <nav>
      </nav>
    </header>

    <main>
      <SearchForm />
      <ResultsList />
    </main>

    <footer>
    </footer>
  </React.Fragment>
)

export default App;
