import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import Home from '../../components/Home/Home';
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

const Login = () => {
    const user = useSelector(selectUser);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let errorsObj = { errorMessage: '' };
    const [errors, setErrors] = useState(errorsObj);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {
        let error = false;
        const errorObj = { ...errorsObj };

        if (!email || !password) {
            errorObj.errorMessage = "Email or password is invalid!";
            error = true;
        }

        setErrors(errorObj);

        if (!error) {
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
        user ? <Home /> : (
        <section className="section-form">
            <form action="" onSubmit={handleSubmit}>
                <div className="form">
                    <div className="form__head">
                        <h2>Login</h2>
                        {errors.errorMessage && <div>{errors.errorMessage}</div>}
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