import { Link } from "react-router-dom";
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
                            <ul>
                                <li>
                                    <div className="post">
                                        <div className="post__content">
                                            <div className="post__user">
                                                <Link to="/">Pesho</Link>
                                            </div>

                                            <div className="post__description">
                                                <h5>my new puppy</h5>
                                            </div>

                                            <div className="post__image">
                                                <img src="images/puppy.jpg" alt="" width="500" height="500"/>
                                            </div>

                                            <div className="post__buttons">
                                                <div className="post__likes">
                                                    <Link to="/">Like</Link>
                                                    
                                                    <div className="likes-count">0</div>
                                                </div>

                                                <Link to="/details" className="btn btn--transparent btn--lowercase details__btn">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {posts.map((post) => {
                                    return (
                                        <li>
                                            <div className="post">
                                                <div className="post__content">
                                                    <div className="post__user">
                                                        <Link to="/">Pesho</Link>
                                                    </div>

                                                    <div className="post__description">
                                                        <h5>{post.description}</h5>
                                                    </div>

                                                    <div className="post__image">
                                                        <img src="images/puppy.jpg" alt="" width="500" height="500"/>
                                                    </div>

                                                    <div className="post__buttons">
                                                        <div className="post__likes">
                                                            <Link to="/">Like</Link>
                                                    
                                                            <div className="likes-count">0</div>
                                                        </div>

                                                        <Link to="/details" className="btn btn--transparent btn--lowercase details__btn">Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;