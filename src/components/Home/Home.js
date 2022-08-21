import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { useEffect, useState } from "react";
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"

const Home = () => {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);

    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
         const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
         };

         getPosts();
     }, []);
    
    return (
        <section className="section-posts">
            <div className="shell shell--small">
                {user ? (
                <div className="section__header">
                    <h2>Welcome, {user.displayName}</h2>

                    <div className="section__nav">
                        <nav className="nav">
                             <ul>
                                 <li>
                                    <Link to="/profile">Profile</Link>
                                 </li>

                                 <li>
                                    <Link to="/create">Create Post</Link>
                                 </li>
                             </ul>
                         </nav>
                    </div>
                </div>
                ) : (
                    <div className="section__header">
                        <h2 className="section__header-nouser">Welcome</h2>
                    </div>
                )}
                

                <div className="section__inner">
                    <div className="section__content">
                        <div className="posts">
                            {posts.length > 0 ? (
                                <ul>
                                    {posts.map((post, id) => {
                                        return (
                                            <li key={id + 100}>
                                                <div className="post">
                                                    <div className="post__content">
                                                        <div className="post__user">
                                                            <h2>{post.name}</h2>
                                                        </div>

                                                        <div className="post__description">
                                                            <h5>{post.description}</h5>
                                                        </div>

                                                        <div className="post__image">
                                                            <img src={post.image} alt="" width="500" height="500"/>
                                                        </div>

                                                        <div className="post__buttons">
                                                            {!user ? (
                                                                <Link to="/login " className="btn btn--transparent btn--lowercase details__btn">Details</Link>
                                                            ) : (
                                                            <Link to={`/details/${post.id}`} className="btn btn--transparent btn--lowercase details__btn">Details</Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <h2>There are no posts yet...</h2>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;