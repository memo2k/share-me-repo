const Create = () => {
    return (
        <section className="section-form">
            <form action="">
                <div className="form-create">
                    <div className="form__head">
                        <h2>Create Post</h2>
                    </div>

                    <div className="form__body">
                        <div className="form__row">
                            <label htmlFor="description" className="form__label">Description</label>

                            <div className="form__field">
                                <textarea type="text" className="field-textarea" id="description"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form__actions">
                        <input type="submit" value="Post" className="btn btn--blue btn--width-250" />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Create;