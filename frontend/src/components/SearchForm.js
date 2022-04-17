import { Fragment, useState, useEffect } from "react";
import '../sass/components/searchform.scss';
import '../sass/base/typography.scss';
import icon from '../assets/search-icon.png';

const SearchForm = ({setResultsDataHandler}) => {
    const [radioDifficulty, setRadioDifficulty] = useState('beginner');

    const difficultyHandler = (value) => {
        setRadioDifficulty(value);
    }

    useEffect(() => {

        const userSelect = {name: radioDifficulty};

        fetch("/api", {
            // set the method to post
            method: 'POST',
            // convert the payload object to json
            body: JSON.stringify(userSelect),
            // inform server that it is receiving json document
            headers: {"Content-Type": "application/json"}
        }).then(response => {
            // convert server response to json
            return response.json();
        }).then(result => {
            // call set state function (setResult) passed to this component
            // as props to update resultsData in Main component with the
            // result of the fetch
            setResultsDataHandler(result); 
        })
        .catch(error => {console.warn(error.message, "failed!")});
     
    }, [radioDifficulty, setResultsDataHandler]);

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
