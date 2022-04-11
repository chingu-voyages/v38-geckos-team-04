import { Fragment, useState }from 'react'
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import '../sass/components/main.scss';

function Main() {
    const [radioDifficulty, setRadioDifficulty] = useState('beginner');
    
    

    return (
        <Fragment>
            <main className='main'>
            <h1 className='heading-primary'>abb - always be building</h1>
                <SearchForm radioDifficulty={radioDifficulty} setRadioDifficulty={setRadioDifficulty}/>
                <ResultsList radioDifficulty={radioDifficulty}/>
            </main>
        </Fragment>
    )
}

export default Main