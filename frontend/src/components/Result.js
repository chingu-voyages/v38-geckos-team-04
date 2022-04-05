import { Fragment } from "react";
import '../sass/components/result.scss';
import '../sass/base/typography.scss';

const Result = ({name, description, link}) => (
    <Fragment>
            <div class="result">
                <div className="result__name">
                <h3 className="heading-result">{name}</h3> 
                </div>
                <div class="result__description">
                     <span className="paragraph">
                         {description}
                     </span>
                </div>
                <a href={link} className="result__link link-result">
                    MORE
                </a>
            </div>
    </Fragment>
)

export default Result;
