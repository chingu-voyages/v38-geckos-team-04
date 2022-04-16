import { Fragment } from "react";
import '../sass/components/resultslist.scss';
import '../sass/base/typography.scss';
import Result from './Result';

const ResultsList = ({resultsData}) => (
    <Fragment>
        <div className="results-container">
            {resultsData.map(app => 

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
