import Header from "../../components/Header/Header.tsx";
import NewPost from "../../components/Post/NewPost.tsx";
import Topics from "../../components/Topics/Topics.tsx";
import SideMenu from "../../components/SideMenu/SideMenu.tsx";
import {useEffect, useState} from "react";
import {getAll, getById} from "../../api/users.ts";
import {useSelector} from "react-redux";
import {getAllPosts} from "../../api/posts.ts";
import Post from "../../components/Post/Post.tsx";

function Home() {
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const userId = useSelector((state: any) => state.session.userId);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        document.title = "Compass Video"
        fetchUser();
        fetchPosts();
        fetchAllUsers();
        setIsLoading(false);
    }, []);

    async function fetchUser() {
        const response = await getById(userId);
        // @ts-ignore
        setUser(response.data);
    }

    async function fetchPosts() {
        const response = await getAllPosts();
        // @ts-ignore
        setPosts(response);
    }

    async function fetchAllUsers() {
        const response = await getAll();
        // @ts-ignore
        setUsers(response.data);
    }

    return (
        isLoading ? <div>Carregando...</div> :
        <div className="home">
            <SideMenu/>
            <div className="home_main">
                <Header name={user.name} picture={user.image}/>
                <div className="home_content">
                    <div className="home_posts">
                        <NewPost/>
                        {posts && posts.map((post: any) => (
                            <Post key={post.id} post={post}/>
                        ))}
                    </div>

                    <div className="home_topics">
                        <Topics title="Meus Amigos" users={users}/>
                        <Topics title="Itens em Destaque" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;