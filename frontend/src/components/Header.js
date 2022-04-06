import { Fragment } from "react";
import '../sass/components/header.scss';
import '../sass/base/typography.scss';
import video from '../assets/coding-video.mp4';

const Header = () => {
    return <Fragment>
        <header className='header'>
            <div className="header__bg-video">
                <video className="header__video" autoPlay muted loop>
                    <source  src={video} type="video/mp4"/>
                    Please, upgrade your browser to see this video
                </video>
            </div>
        </header>
    </Fragment>
}

export default Header;