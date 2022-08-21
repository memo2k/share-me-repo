import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";


const Profile = () => {
    const user = useSelector(selectUser);

    return (
        <div className="section-profile">
            <div className="shell shell--small">
                <div className="section__content">
                    <div className="section__info">
                        <div className="section__profile-img">
                            <img src="images/user.jpg" alt="" width="256" height="256" />
                        </div>

                        <div className="section__details">
                            <h2>Name: {user.displayName}</h2>

                            <h3>Email: {user.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;