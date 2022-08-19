import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from "../../firebase";

function Details() {
    const {postId} = useParams();
    const [details, setDetails] = useState({});

    function getDetails() {
        db.collection("posts").doc(postId).get()
        .then((snapshot) => {
            setDetails(snapshot.data());
        });
    }

    getDetails();
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
                                        <Link to="/">{details.name}</Link>
                                    </div>

                                    <div className="section__description">
                                        <h5>{details.description}</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='grid__col grid__col--1of2'>
                                <div className="section__comments">
                                    <section className='section-form--comment'>
                                        <form>
                                            <div className='form-comment'>
                                                <div className='form__body'>
                                                    <div className='form__field'>
                                                        <textarea type="text" className="field-textarea" id="comment" placeholder='Comment...'></textarea>
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
                                        <li>
                                            <div className='comment'>
                                                <div className='comment__user'>
                                                    <Link to="/">Misho</Link>
                                                </div>

                                                <div className="comment__description">
                                                    <h5>Helloooooooooo guys</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className='comment'>
                                                <div className='comment__user'>
                                                    <Link to="/">Misho</Link>
                                                </div>

                                                <div className="comment__description">
                                                    <h5>Helloooooooooo guys</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className='comment'>
                                                <div className='comment__user'>
                                                    <Link to="/">Misho</Link>
                                                </div>

                                                <div className="comment__description">
                                                    <h5>Helloooooooooo guys</h5>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='section__user-actions'>
                            <Link to="/edit" className="btn btn--transparent btn--lowercase section__btn btn--width-250">Edit</Link>

                            <Link to="/delete" className="btn btn--red btn--lowercase section__btn btn--width-250">Delete Post</Link>
                        </div>
                    </div>
                </div>
        </section>
  )
}

export default Details;