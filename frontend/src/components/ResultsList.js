import { Fragment } from "react";
import '../sass/components/resultslist.scss';
import '../sass/base/typography.scss';
import Result from './Result';

const appIdeas= [
        {
            name: "Bin2Dec",
            description: "Binary-to-Decimal number converter",
            link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md",
            difficulty: "beginner",
        },
        {
            name: "Border Radius Previewer",
            description: "Preview how CSS3 border-radius values affect an element",
            link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md",
            difficulty: "beginner",
        },
        {
            name: "Bit Masks",
            description: "Using Bit Masks for Conditions",
            link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Bit-Masks-App.md",
            difficulty: "intermediate",
        },
        {
            name: "Card Memory Game",
            description: "Memorize and match hidden images",
            link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Card-Memory-Game.md",
            difficulty: "intermediate",
        },
        {
            name: "Battleship Game Engine",
            description: "Create a callable engine to play the Battleship game",
            link: "https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Game-Engine.md",
            difficulty: "advanced",
        },
        {
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
                            name={app.name} 
                            description={app.description} 
                            link={app.link} 
                        />
            
            )}   
        </div>
    </Fragment>
)

export default ResultsList;
