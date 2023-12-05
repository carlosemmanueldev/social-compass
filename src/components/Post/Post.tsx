import Box from "../UI/Box.tsx";
import {
    Like1,
    Message,
    Share,
    Clock,
    Camera,
    Image,
    Paperclip2,
    Location,
    EmojiHappy,
    ArrowCircleRight2
} from "iconsax-react";
import img from "../../assets/images/img_avatar.png";
import {useState, useEffect} from "react";
import {formatRelativeTime} from "../../utils/Time.ts";
import {createComment} from "../../api/comments.ts";
import {useSelector} from "react-redux";
import Comments from "./Comments.tsx";
import {likePost} from "../../api/posts.ts";

export interface PostProps {
    id: string,
    text: string,
    location: string,
    likes: string,
    image?: string,
    createdAt: string,
    updatedAt: string,
    author: {
        image: string,
        name: string,
        id: string,
    }
    comments: {
        "id": string,
        "content": string,
        "authorId": string,
        "postId": string,
        "createdAt": string,
        "updatedAt": string,
        "author": {
            "image": string,
            "name": string,
            "id": string,
        }
    }
}

function Post({post: props}: { post: PostProps }) {
    const [focus, setFocus] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(props.comments);
    const avatar = props.author.image ? props.author.image : img;
    const formatedTime = formatRelativeTime(props.createdAt);
    const userId = useSelector((state: any) => state.session.userId);
    const [like, setLike] = useState(false);


    useEffect(() => {
        if (comment.length > 0) {
            setFocus(true)
        } else {
            setFocus(false)

        }
    }, [comment])

    function handleSendComment() {
        createComment(comment, userId, props.id)
        setComment('')
    }

    function handleLike() {
        likePost(props.id, userId)
    }

    // @ts-ignore
    return (
        <Box classes="post">
            <div className="post_info">
                <img className="post_image" src={avatar} alt="A profile picture."/>
                <div className="post_name-time-place">
                    <p className="post_name">{props.author.name}</p>

                    <div className="post_time-place">
                        <Clock size="12"/>
                        <p className="post_time"> {formatedTime} {props.location ? 'em' : ''} <b>{props.location}</b>
                        </p>
                    </div>
                </div>
            </div>

            <p className="post_description">{props.text}</p>

            <div className="post_buttons">
                <button onClick={handleLike} className="post_button like">
                    <Like1 size="16"/> Curtir
                    <div className="post_number-likes">{props.likes}</div>
                </button>

                <div className="post_button"><Message size="16"/>Comentários</div>
                <div className="post_button"><Share size="16"/>Compartilhar</div>
            </div>

            <div className="post_my-comment">
                <img src={img} alt="A profile picture." className="new-post_image"/>
                <div className="post_add-comment">
                    <input
                        className="new-post_input"
                        value={comment}
                        onChange={(value) => setComment(value.target.value)}
                        type="text-area"
                        placeholder="Tem algo a dizer?"
                    />

                    <div className="new-post_icons">
                        <Camera size="16"/>
                        <Image size="16"/>
                        <Paperclip2 size="16"/>
                        <Location size="16"/>
                        <EmojiHappy size="16"/>
                        {
                            focus &&
                            <button onClick={handleSendComment} className="post_send-comment">
                                <ArrowCircleRight2 size="16" color="#E9B425"/>
                            </button>
                        }
                    </div>
                </div>
            </div>

            <div className="post_comments">
                {comments && comments.map((comment: any) => (
                    <Comments key={comment.id} comment={comment}/>
                ))}
            </div>
        </Box>
    );
}

export default Post;