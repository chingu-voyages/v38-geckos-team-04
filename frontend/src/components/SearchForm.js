import { Fragment, useState, useEffect } from "react";
import '../sass/components/searchform.scss';
import '../sass/base/typography.scss';
import icon from '../assets/search-icon.png';

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

const SearchForm = ({setResultsDataHandler}) => {
    const [radioDifficulty, setRadioDifficulty] = useState('beginner');

    const difficultyHandler = (value) => {
        setRadioDifficulty(value);
    }

    const fetchResultsData = (difficulty) => {
         
        // Fetching data using difficulty variable

        // Fetch function

        // Temporalily Assigning mocked data
        const data = [...appIdeas]; 

        // Returning fetched data
        return data
    }

    useEffect(() => {

        let data = fetchResultsData(radioDifficulty);
        setResultsDataHandler(data);        

    }, [radioDifficulty]);

    return (
    <Fragment>
         <div className="search-form">
            <div className="text-input-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Coming soon..."/> 
                <img className="search-icon" src={icon} alt="search"/>
            </div>

            <div className="radio-bar-container">
                <div className="radio-choice-container">
                    <input 
                        type="radio" 
                        id="beginner" 
                        name="select" 
                        value="beginner" 
                        checked={radioDifficulty === 'beginner'} 
                        onClick={() => difficultyHandler('beginner')}
                        readOnly
                    />
                    <label htmlFor="beginner">
                        <h2 className="heading-secondary heading-radio">Beginner</h2>
                        <p>Developers in the early stages of their learning journey. Those who are typically focused on creating user-facing applications.</p>
                    </label>
                </div>
                <div className="radio-choice-container">
                    <input 
                        type="radio" 
                        id="intermediate" 
                        name="select" 
                        value="intermediate" 
                        checked={radioDifficulty === 'intermediate'} 
                        onClick={() => difficultyHandler('intermediate')}
                        readOnly
                    />
                    <label htmlFor="intermediate">
                    <h2 className="heading-secondary heading-radio">Intermediate</h2>
                        <p>Developers at an intermediate stage of learning and experience. They are comfortable in UI/UX, using development tools, and building apps that use API services.</p>
                    </label>
                </div>
                <div className="radio-choice-container">
                    <input 
                        type="radio" 
                        id="advanced" 
                        name="select" 
                        value="advanced" 
                        checked={radioDifficulty === 'advanced'} 
                        onClick={() => difficultyHandler('advanced')}
                        readOnly
                    />
                    <label htmlFor="advanced">
                    <h2 className="heading-secondary heading-radio">Advanced</h2>
                        <p>Developers who have all of the above, and are learning more advanced techniques like implementing backend applications and database services.</p>
                    </label>
                </div>   
            </div>      
         </div>
    </Fragment>
)}

export default SearchForm;
