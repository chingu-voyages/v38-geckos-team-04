import { Fragment } from "react";
import '../sass/components/header.scss';

const Header = () => {
    return <Fragment>
        <header className='header'>
            <div className="header__bg-video">
                <video className="header__video" autoPlay muted loop>
                    <source  src="../assets/coding-video.mp4" type="video/mp4"/>
                    Please, upgrade your browser to see this video
                </video>
            </div>
            <h1 className='header__heading'>abb - always be building</h1>
        </header>
    </Fragment>
}

export default Header;