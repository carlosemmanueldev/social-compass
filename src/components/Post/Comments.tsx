import img from "../../assets/images/img_avatar.png";

function Comments({comment}) {
    const avatar = comment.author.image ? comment.author.image : img;

    return (
        <div className="comments">
            <img className="comments_image" src={avatar} alt=""/>
            <div className="comments_content">
                <p>{comment.author.name}:</p>
                <p className="comments_content_p">{comment.content}</p>
            </div>
        </div>
    );
}

export default Comments;