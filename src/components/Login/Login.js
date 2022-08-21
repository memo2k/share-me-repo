import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const user = useSelector(selectUser);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {
        if (!email) {
            return setErrors("Email is invalid.")
        }

        if (!password) {
            return setErrors("Password is invalid.")
        }

        else {
            auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName
                }))
            });
        }
        
    }

    return (
        user ? navigate('/') : (
        <section className="section-form">
            <form action="" onSubmit={handleSubmit}>
                <div className="form">
                    <div className="form__head">
                        <h2>Login</h2>
                        <div className="form__errors">
                            {errors !== "" ? <div className="error">{errors}</div> : null}
                        </div>
                    </div>

                    <div className="form__body">
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
                    </div>

                    <div className="form__actions">
                        <button type="submit" className="btn btn--blue btn--width-250">Login</button>
                    </div>
                </div>
            </form>
        </section>)
    );
}

export default Login;