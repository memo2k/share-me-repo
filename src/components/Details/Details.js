import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from '../../features/userSlice';
import { doComment } from '../../features/actionCreators/postCreator';

function Details() {
    const user = useSelector(selectUser);
    const {postId} = useParams();
    const [details, setDetails] = useState({});
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function getDetails() {
        db.collection("posts").doc(postId).get()
        .then((snapshot) => {
            setDetails(snapshot.data());
        });
    }

    getDetails();

    const handleDelete = async () => {
        const docRef = doc(db, "posts", postId);
        await deleteDoc(docRef).then(navigate('/'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comment) {
            return setErrors("Comment field should not be empty.");
        }

        const data = {
            name: user.displayName,
            comment,
            userId: user.uid
        }

        dispatch(doComment(data, postId, details.comments));
    }

    return (
        <section className="section-details">
                <div className="shell shell--small">
                    <div className="section__header">
                        <h2 className="section__header-nouser">Details Page</h2>
                    </div>
                </div>

                <div className="shell">
                    <div className="section__inner">
                        <div className="grid section__inner-details">
                            <div className='grid__col grid__col--1of2'>
                                <div className="section__post">
                                    <div className="section__post-img">
                                        <img src={details.image} alt="" width="620" height="800"/>
                                    </div>

                                    <div className="section__post-user">
                                        <h3>{details.name}</h3>
                                    </div>

                                    <div className="section__description">
                                        <h5>{details.description}</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='grid__col grid__col--1of2'>
                                <div className="section__comments">
                                    <section className='section-form--comment'>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form__errors">
                                                {errors !== "" ? <div className="error">{errors}</div> : null}
                                            </div>
                                            <div className='form-comment'>
                                                <div className='form__body'>
                                                    <div className='form__field'>
                                                        <textarea value={comment} onChange={e => setComment(e.target.value)} type="text" className="field-textarea" id="comment" placeholder='Comment...'></textarea>
                                                    </div>
                                                </div>

                                                <div className='form__actions'>
                                                    <button type="submit" className="btn btn--blue btn--width-250">Comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </section>

                                    <div className="section__comments-head">
                                        <h2>Comments</h2>
                                    </div>
                                    
                                    <ul>
                                        {/* {details.comments.length > 0 ? (
                                            details.comments.map((cmt, id) => 
                                            <li key={id + 100}>
                                                <div className='comment'>
                                                    <div className='comment__user'>
                                                        <h3>{cmt.name}</h3>
                                                    </div>

                                                    <div className="comment__description">
                                                        <h5>{cmt.comment}</h5>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        ) :
                                        (
                                            <div>No comments...</div>
                                        )} */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        { user.uid === details.userId ? (
                        <div className='section__user-actions'>
                            <Link to={`/editpost/${postId}`} className="btn btn--transparent btn--lowercase section__btn btn--width-250">Edit</Link>

                            <button onClick={handleDelete} className="btn btn--red btn--lowercase section__btn btn--width-250">Delete Post</button>
                        </div>) : (
                            <div></div>)}
                    </div>
                </div>
        </section>
  )
}

export default Details;