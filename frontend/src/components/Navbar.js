import { Fragment }from 'react'
import { Link } from 'react-router-dom';
import '../sass/components/navbar.scss';

function Navbar() {
    return <Fragment>
        <nav className='navbar'>
            <div className='navbar__logo'>develapp</div>
            <ul className='navbar__nav'>
                <li className='nav__item'><Link to="/">Home</Link></li>
                <li className='nav__item'><Link to="/about">About</Link></li>
                {/* <li className='nav-item'><Link to="/learn">Learn</Link></li> */}
            </ul>
        </nav>    
    </Fragment>
  }

export default Navbar;