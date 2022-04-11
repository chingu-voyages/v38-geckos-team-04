import { Fragment }from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return <Fragment>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/learn">Learn</Link></li>
            </ul>
        </nav>    
    </Fragment>
  }

export default Navbar;