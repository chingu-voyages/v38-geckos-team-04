import { Fragment, useState }from 'react'
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import '../sass/components/main.scss';

function Main() {
    const [difficulty, setDifficulty] = useState('beginner');
    return (
        <Fragment>
            <main className='main'>
            <h1 className='heading-primary'>abb - always be building</h1>
                <SearchForm difficulty={difficulty} setDifficulty={setDifficulty}/>
                <ResultsList difficulty={difficulty}/>
            </main>
        </Fragment>
    )
}

export default Main