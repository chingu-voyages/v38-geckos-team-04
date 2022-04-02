import { Fragment } from "react";
import '../sass/components/resultslist.scss';
import '../sass/base/typography.scss';
import Result from './Result';

const ResultsList = () => (
    <Fragment>
        <div className="results">
            <Result />
        </div>
    </Fragment>
)

export default ResultsList;
