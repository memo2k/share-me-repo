import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doPost } from "../../features/actionCreators/postCreator";
import { selectUser } from "../../features/userSlice";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Login from '../../components/Login/Login';
import { serverTimestamp } from "firebase/firestore";

const Create = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    
    const createPost = (e) => {
        e.preventDefault();

        if (!description) {
            return setErrors("Please fill the description.");
        }

        if (!image) {
            return setErrors("Please add an image.");
        }

        else {
            const data = {
                comments: [],
                name: user.displayName,
                description: description,
                image: "",
                userId: user.uid,
                timestamp: serverTimestamp()
            }
        
            dispatch(doPost(data, image, setProgress))
            navigate('/');
        }
    }

    return (
        !user ? <Login /> : (
        <section className="section-form">
            <form action="">
                <div className="form-create">
                    <div className="form__head">
                        <h2>Create Post</h2>
                        <div className="form__errors">
                            {errors !== "" ? <div className="error">{errors}</div> : null}
                        </div>
                    </div>

                    <div className="form__body">
                        <div className="form__row">
                            <label htmlFor="description" className="form__label">Description</label>

                            <div className="form__field">
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="field-textarea" id="description"></textarea>
                            </div>
                        </div>

                        <div className="form__row">
                            <label htmlFor="image" className="form__label">Image</label>

                            <div className="form__field">
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="" id="image"></input>
                            </div>
                        </div>
                    </div>

                    <div className="form__actions">
                        <button onClick={createPost} type="submit" className="btn btn--blue btn--width-250">Post</button>
                    </div>
                </div>
            </form>
        </section>
        )
    );
}

export default Create;