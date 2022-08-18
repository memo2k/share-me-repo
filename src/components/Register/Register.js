import { useSelector, useDispatch } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import Home from '../../components/Home/Home';
import { useState } from "react";
import { auth } from "../../firebase";

const Register = () => {
    const user = useSelector(selectUser);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    }
    const handleRegister = () => {
        if (!email || !password) {
            return alert("Please fill all the fields below.")
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
            ).catch((err) => alert(err))
        }
      };

    return (
        user ? <Home /> : (
        <section className="section-form">
            <form action="">
                <div className="form">
                    <div className="form__head">
                        <h2>Register</h2>
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
                                <input type="password" className="field" id="rePass" />
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