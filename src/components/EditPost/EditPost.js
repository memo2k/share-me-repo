import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from "../../firebase";
import Login from '../../components/Login/Login';
import { selectUser } from '../../features/userSlice';
import { useSelector } from "react-redux";

function EditPost() {
    const user = useSelector(selectUser);
    const [data, setData] = useState({ description: "" });
    const [errors, setErrors] = useState("");

    const {postId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      postId && getDetails();
    }, [postId]);

    const getDetails = async () => {
      const docRef = doc(db, "posts", postId);
      const snapshot = await getDoc(docRef);
      setData({ ...snapshot.data() })
    }

    const handleChange = (name) => (e) => {
      e.preventDefault();
      setData({ ...data, [name]: e.target.value});
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!data.description) {
        return setErrors("Description cannot be empty.")
      }

      else {
        const docRef = doc(db, "posts", postId);
        const newDesc = { description: data.description }
        await updateDoc(docRef, newDesc).then(navigate(`/details/${postId}`));
      }
    }

    return (
        !user ? <Login /> : (
        <section className="section-form">
          {user.uid !== data.userId ? (
            <h2>You don't have permission to that page</h2>
          ) : (
            <form action="">
              <div className="form-create">
                  <div className="form__head">
                      <h2>Edit Post</h2>
                      <div className="form__errors">
                          {errors !== "" ? <div className="error">{errors}</div> : null}
                      </div>
                  </div>

                  <div className="form__body">
                      <div className="form__row">
                          <label htmlFor="description" className="form__label">Description</label>

                          <div className="form__field">
                              <textarea value={data.description} onChange={handleChange('description')} type="text" className="field-textarea" id="description" name="description"></textarea>
                          </div>
                      </div>
                  </div>

                  <div className="form__actions">
                      <button onClick={handleSubmit} type="submit" className="btn btn--blue btn--width-250">Update</button>
                  </div>
              </div>
          </form>
          )}
        </section>)
  )
}

export default EditPost