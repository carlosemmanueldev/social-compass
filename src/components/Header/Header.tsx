import Button from "../Button/Button.tsx";
import {ArrowLeft3, Global, Notification} from "iconsax-react";
import img from "../../assets/images/img_avatar.png";

interface HeaderProps {
    name: string;
    picture: string;
}

function Header({name, picture}: HeaderProps ) {
    const avatar = picture ? picture : img;

    return (
        <nav className="navbar">
            <div className="navbar_item">
                <button className="navbar_button"><ArrowLeft3 size="24"/></button>
                <p>SocialCompass</p>
            </div>

            <div className="navbar_item">
                <Global size="24"/>
                <Notification size="24"/>
                <p>{name}</p>
                <img src={avatar} alt="A profile picture." className="new-post_image"/>
            </div>
        </nav>
    );
}

export default Header;