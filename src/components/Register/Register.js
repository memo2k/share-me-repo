import { useSelector, useDispatch } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import Home from '../../components/Home/Home';
import { useState } from "react";
import { auth } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const user = useSelector(selectUser);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    }
    const handleRegister = () => {
        if (!name && !email && !password) {
            return setErrors("Please fill all the fields below.");
        }

        if (!name) {
            return setErrors("Please enter a username.");
        }

        if (!email) {
            return setErrors("Please enter an email.");
        }

        if (!isValidEmail(email)) {
            return setErrors("Email is invalid.");
        }

        // if () {
        //     return setErrors("Email is already taken.");
        // }

        if (!password) {
            return setErrors("Please enter a password.");
        }

        if (password.length < 6) {
            return setErrors("Password should be at least 6 characters long.");
        }

        if (password !== confirmPassword) {
            return setErrors("Passwords do not match.");
        }

        else if (name && email && password !== "") {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => userAuth.user.updateProfile({
                displayName: name
            })
            .then(() => {
                dispatch(login({
                    displayName: name,
                    email: userAuth.user.email,
                    uid: userAuth.user.uid
                }))
            })
            )
        }
      };

    return (
        user ? navigate('/') : (
        <section className="section-form">
            <form action="">
                <div className="form">
                    <div className="form__head">
                        <h2>Register</h2>
                        <div className="form__errors">
                            {errors !== "" ? <div className="error">{errors}</div> : null}
                        </div>
                    </div>

                    <div className="form__body">
                        <div className="form__row">
                            <label htmlFor="username" className="form__label">Username</label>

                            <div className="form__field">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="field" id="username" />
                            </div>
                        </div>

                        <div className="form__row">
                            <label htmlFor="email" className="form__label">Email</label>

                            <div className="form__field">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="field" id="email" />
                            </div>
                        </div>

                        <div className="form__row">
                            <label htmlFor="password" className="form__label">Password</label>

                            <div className="form__field">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="field" id="password" />
                            </div>
                        </div>

                        <div className="form__row">
                            <label htmlFor="rePass" className="form__label">Repeat password</label>

                            <div className="form__field">
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="field" id="rePass" />
                            </div>
                        </div>
                    </div>

                    <div className="form__actions">
                        <button onClick={handleSubmit} type="submit" className="btn btn--blue btn--width-250">Register</button>
                    </div>
                </div>
            </form>
        </section>)
    );
}

export default Register;