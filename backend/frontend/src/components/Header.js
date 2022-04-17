import { Fragment } from "react";
import Navbar from './Navbar';
import '../sass/components/header.scss';

const Header = () => {
    return <Fragment>
        <header className='header'>
            <Navbar />
        </header>
        
    </Fragment>
}

export default Header;