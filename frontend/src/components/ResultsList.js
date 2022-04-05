import { Fragment } from "react";
import '../sass/components/resultslist.scss';
import '../sass/base/typography.scss';
import Result from './Result';

const ResultsList = () => (
    <Fragment>
        <div className="results-container">
            <Result name="Lorem dolor" description="Lorem dolor sit amet lorem dolor lorem dolor sit amet" link="http://www.google.com"/>
        </div>
    </Fragment>
)

export default ResultsList;
