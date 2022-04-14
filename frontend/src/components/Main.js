import { Fragment, useState } from 'react'
import SearchForm from './SearchForm';
import ResultsList from './ResultsList';
import '../sass/components/main.scss';

const appIdeas= [
    {
        id: 1,
        name: "Bin2Dec",
        description: "Binary-to-Decimal number converter",
        link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md",
        difficulty: "beginner",
    },
    {
        id: 2,
        name: "Border Radius Previewer",
        description: "Preview how CSS3 border-radius values affect an element",
        link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md",
        difficulty: "beginner",
    },
    {
        id: 3,
        name: "Bit Masks",
        description: "Using Bit Masks for Conditions",
        link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Bit-Masks-App.md",
        difficulty: "intermediate",
    },
    {
        id: 4,
        name: "Card Memory Game",
        description: "Memorize and match hidden images",
        link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Card-Memory-Game.md",
        difficulty: "intermediate",
    },
    {
        id: 5,
        name: "Battleship Game Engine",
        description: "Create a callable engine to play the Battleship game",
        link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Game-Engine.md",
        difficulty: "advanced",
    },
    {
        id: 6,
        name: "Shuffle Deck",
        description: "Evaluate different algorithms for shuffling a card deck",
        link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Shuffle-Deck-App.md",
        difficulty: "advanced",
    },
]

function Main() {
    const [resultsData, setResultsData] = useState([]);

    function setResultsDataHandler (value) {
        setResultsData(value);
    }

    function fetchResultsData (difficulty) {
         
        // Fetching data using difficulty variable

        // Assigning fetched data into resultsData, for now I just use the mocked database
        setResultsDataHandler([...appIdeas]); 
    }

    function generateResultsData (difficulty) {
        fetchResultsData(difficulty);
    }
    
    return (
        <Fragment>
            <main className='main'>
            <h1 className='heading-primary'>
             always 
             be 
             building</h1>
                <SearchForm />
                <ResultsList />
            </main>
        </Fragment>
    )
}

export default Main