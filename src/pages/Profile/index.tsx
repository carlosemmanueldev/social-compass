import About from '../../components/About/About'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import UserInfo from '../../components/UserInfo/UserInfo'
import {getById} from "../../api/users.ts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SideMenu from "../../components/SideMenu/SideMenu.tsx";

const Profile = () => {
    const userId = useSelector((state: any) => state.session.userId);
    const [user, setUser] = useState([]);

    useEffect(() => {
        document.title = "Compass Video"
        fetchUser();
    }, []);

    async function fetchUser() {
        const response = await getById(userId);
        // @ts-ignore
        setUser(response.data);
    }

    return (
        <div className="home">
            <SideMenu/>
            <div className="home_main">
                <Header name={user.name} picture={user.image}/>
                <div className="profile">
                    <UserInfo user={user}/>

                    <div className="profile_about-posts">
                        <About user={user}/>

                        <div className="profile_posts">
                            <div className="profile_titles">
                                <p>Followers</p>
                                <p>Following</p>
                                <p className="profile_p-bold">Posts</p>
                            </div>

                            <div className="profile_line"/>
                            {user.posts && user.posts.map((post: any) => (
                                <Post key={post.id} post={post}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile