import { Fragment }from 'react'
import { Link } from 'react-router-dom';
import '../sass/components/navbar.scss';

function Navbar() {
    return <Fragment>
        <nav className='navbar'>
            <div className='navbar__logo'>develapp</div>
            <ul className='navbar__nav'>
                <li className='navbar__nav--item'><Link to="/" className='navbar__nav--link'>Home</Link></li>
                <li className='navbar__nav--item'><Link to="/about" className='navbar__nav--link'>About</Link></li>
            </ul>
        </nav>    
    </Fragment>
  }

export default Navbar;