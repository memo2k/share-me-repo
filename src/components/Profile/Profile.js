const Profile = () => {
    return (
        <div className="section-profile">
            <div className="shell shell--small">
                <div className="section__content">
                    <div className="section__info">
                        <div className="section__profile-img">
                            <img src="images/user.jpg" alt="" width="256" height="256" />
                        </div>

                        <div className="section__details">
                            <h4>Name: Pesho</h4>

                            <h4>Email: pesho@abv.bg</h4>
                        </div>
                    </div>


                    <div className="section__actions">
                        <a href="#" className="btn btn--transparent btn--lowercase section__btn btn--width-250">Edit</a>

                        <a href="#" className="btn btn--red btn--lowercase section__btn btn--width-250">Delete Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;