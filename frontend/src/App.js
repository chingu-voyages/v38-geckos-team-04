import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import React from 'react';

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
