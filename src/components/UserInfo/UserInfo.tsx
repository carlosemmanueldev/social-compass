import Button from "../Button/Button";
import Box from "../UI/Box";
import cover from "../../assets/images/cover.png";
import img from "../../assets/images/img_avatar.png";

function UserInfo({user}) {

    return (
        <Box classes="user-info">
            <div className="user-info_images">
                <img className="user-info_cover" src={cover} alt="The profile header."/>

                <img className="user-info_picture" src={user.image ? user.image : img} alt="A profile picture."/>
            </div>

            <div className="user-info_bottom">
                <div>
                    <h3>{user.name}</h3>
                    <p className="user-info_bottom_p">{user.occupation}</p>
                </div>

                <Button>Editar Perfil</Button>
            </div>
        </Box>
    );
}

export default UserInfo;