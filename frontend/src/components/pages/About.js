import { Fragment } from 'react';
import '../../sass/components/about.scss';

function About() {
    return <Fragment>
        <div className='about'> 
            <h2>About Us</h2>
            <p>
            One difficulty in learning how to code is figuring out which project to build 
            to improve your skills. Most tutorials simply build a to-do app. Develapp takes 
            you beyond to-do list apps and helps you find projects you can build and be proud 
            to include in your portfolio. Develapp is made for you so that you can always be 
            building. 
            </p>
            <br />
            <p>
            Develapp was built by a remote team during the chingu voyage 38.
            </p>
        </div>
    </Fragment>
}

export default About