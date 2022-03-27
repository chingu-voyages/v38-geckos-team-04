import { Fragment } from "react";
import '../sass/components/header.scss';

const Header = () => {
    return <Fragment>
        <header className='header'>
            <div className="header__media">
                <video className="header__video">

                </video>
            </div>
            <h1 className='header__heading'>abb - always be building</h1>
        </header>
    </Fragment>
}

export default Header;