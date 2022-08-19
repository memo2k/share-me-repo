import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const {postId} = useParams();
    const history = useNavigate();

    return (
        <div>{postId}</div>
        // <section className="section-form">
        //     <form action="">
        //         <div className="form-create">
        //             <div className="form__head">
        //                 <h2>Edit Post</h2>
        //             </div>

        //             <div className="form__body">
        //                 <div className="form__row">
        //                     <label htmlFor="description" className="form__label">Description</label>

        //                     <div className="form__field">
        //                         <textarea type="text" className="field-textarea" id="description"></textarea>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="form__actions">
        //                 <button type="submit" className="btn btn--blue btn--width-250">Post</button>
        //             </div>
        //         </div>
        //     </form>
        // </section>
  )
}

export default EditPost