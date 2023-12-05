import {ArrowUp2} from "iconsax-react";
import Box from "../UI/Box.tsx";
import img from "../../assets/images/img_avatar.png";

interface TopicsProps {
    title: string;
    users?: any[];
}

function Topics({title, users}: TopicsProps) {
    const selectedUsers = users?.slice(0, 4);

    return (
        <Box classes="topics">
            <div className="topics_title">
                <p>{title}</p>
                <ArrowUp2 size="24"/>
            </div>

            <div className="topics_content">
                {selectedUsers?.map((user) => (
                    <div className="topics_user" key={user.id}>
                        <img className="topics_img" src={user.image ? user.image : img} alt="user"/>
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </Box>
    );
}

export default Topics;