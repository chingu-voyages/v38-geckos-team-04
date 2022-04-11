import { Fragment } from "react";
import '../sass/components/resultslist.scss';
import '../sass/base/typography.scss';
import Result from './Result';

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

const ResultsList = () => (
    <Fragment>
        <div className="results-container">
            {appIdeas.map(app => 

                        <Result 
                            key={app.id}
                            name={app.name} 
                            description={app.description} 
                            link={app.link} 
                        />
            
            )}   
        </div>
    </Fragment>
)

export default ResultsList;
