import '../sass/components/searchform.scss';

const SearchForm = () => (
    <div class="search-form">

            <label for="name">App name:</label>
            <input type="text" id="name" name="name" /> 

            <div class="radio-bar-container">
                <div class="radio-choice-container">
                    <input type="radio" id="beginner" name="select" value="beginner" checked />
                    <label for="beginner">
                        <h2>Beginner</h2>
                        <p>Developers in the early stages of their learning journey. Those who are typically focused on creating user-facing applications.</p>
                    </label>
                </div>
                <div class="radio-choice-container">
                    <input type="radio" id="intermediate" name="select" value="intermediate" />
                    <label for="intermediate">
                        <h2>Intermediate</h2>
                        <p>Developers at an intermediate stage of learning and experience. They are comfortable in UI/UX, using development tools, and building apps that use API services.</p>
                    </label>
                </div>
                <div class="radio-choice-container">
                    <input type="radio" id="control_03" name="select" value="advanced" />
                    <label for="intermediate">
                        <h2>Difficult</h2>
                        <p>Developers who have all of the above, and are learning more advanced techniques like implementing backend applications and database services.</p>
                    </label>
                </div>   
            </div>      
               
    </div>
)

export default SearchForm;
