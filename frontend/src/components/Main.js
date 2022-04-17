import { Fragment, useState, useCallback } from 'react'
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import '../sass/components/main.scss';

function Main() {
    const [resultsData, setResultsData] = useState([]);

    const setResultsDataHandler = useCallback((value) => {
        setResultsData(value);
    }, []);

    return (
        <Fragment>
            <main className='main'>
            <h1 className='heading-primary'>
             always 
             be 
             building</h1>
            <SearchForm setResultsDataHandler={setResultsDataHandler} />
            <ResultsList resultsData={resultsData} />
            </main>
        </Fragment>
    )
}

export default Main