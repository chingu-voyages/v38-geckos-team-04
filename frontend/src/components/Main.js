import { Fragment }from 'react'
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import '../sass/components/main.scss';

function Main() {
  return <Fragment>
            <main className='main'>
                <SearchForm />
                <ResultsList />
                <p>Hello App Ideas World</p>
            </main>
        </Fragment>
}

export default Main