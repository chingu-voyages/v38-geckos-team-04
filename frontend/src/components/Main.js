import { Fragment }from 'react'
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import '../sass/components/main.scss';

function Main() {
  return <Fragment>
            <main className='main'>
            <h1 className='heading-primary'>abb - always be building</h1>

                <SearchForm />
                <ResultsList />
            </main>
        </Fragment>
}

export default Main