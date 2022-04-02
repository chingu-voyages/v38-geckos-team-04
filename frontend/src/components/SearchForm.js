import { Fragment } from "react";
import '../sass/components/searchform.scss';
import '../sass/base/typography.scss';
import icon from '../assets/search-icon.png';

const SearchForm = () => (
    <Fragment>
         <div class="search-form">
            <div class="text-input-container">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Search for an app idea or simply choose the difficulty level below..."/> 
                <img className="search-icon" src={icon} alt="search"/>
            </div>

            <div class="radio-bar-container">
                <div class="radio-choice-container">
                    <input type="radio" id="beginner" name="select" value="beginner" />
                    <label for="beginner">
                        <h2 className="heading-secondary heading-radio">Beginner</h2>
                        <p>Developers in the early stages of their learning journey. Those who are typically focused on creating user-facing applications.</p>
                    </label>
                </div>
                <div class="radio-choice-container">
                    <input type="radio" id="intermediate" name="select" value="intermediate" />
                    <label for="intermediate">
                    <h2 className="heading-secondary heading-radio">Intermediate</h2>
                        <p>Developers at an intermediate stage of learning and experience. They are comfortable in UI/UX, using development tools, and building apps that use API services.</p>
                    </label>
                </div>
                <div class="radio-choice-container">
                    <input type="radio" id="advanced" name="select" value="advanced" />
                    <label for="advanced">
                    <h2 className="heading-secondary heading-radio">Advanced</h2>
                        <p>Developers who have all of the above, and are learning more advanced techniques like implementing backend applications and database services.</p>
                    </label>
                </div>   
            </div>      
         </div>
    </Fragment>
)

export default SearchForm;
