import Box from "../UI/Box.tsx";
import Button from "../Button/Button.tsx";
import {Camera, Image, Paperclip2, Location, EmojiHappy} from "iconsax-react";
import img from "../../assets/images/img_avatar.png";
import {useState} from "react";
import {createPost} from "../../api/posts.ts";
import {useSelector} from "react-redux";

function NewPost() {
    const [text, setText] = useState("");
    const userId = useSelector((state: any) => state.session.userId);

    function handleSubmit(){
        createPost(text, '', '', userId)
        setText("");
    }

    return (
        <Box classes="new-post">
            <div className="new-post_add">
                <img src={img} alt="A profile picture." className="new-post_image"/>
                <form className="new-post_form">
                    <input
                        value={text}
                        onChange={value => setText(value.target.value)}
                        className="new-post_input"
                        type="text"
                        placeholder="No que você está pensando?"
                    />
                </form>
            </div>

            <div className="new-post_actions">
                <div className="new-post_icons">
                    <Camera size="24"/>
                    <Image size="24"/>
                    <Paperclip2 size="24"/>
                    <Location size="24"/>
                    <EmojiHappy size="24"/>
                </div>

                <Button onClick={handleSubmit}>Postar</Button>
            </div>
        </Box>
    );
}

export default NewPost;