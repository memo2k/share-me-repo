const Login = () => {
    return (
        <section class="section-form">
            <form action="">
                <div class="form">
                    <div class="form__head">
                        <h2>Login</h2>
                    </div>

                    <div class="form__body">
                        <div class="form__row">
                            <label htmlFor="email" class="form__label">Email</label>

                            <div class="form__field">
                                <input type="email" class="field" id="email" />
                            </div>
                        </div>

                        <div class="form__row">
                            <label htmlFor="password" class="form__label">Password</label>

                            <div class="form__field">
                                <input type="password" class="field" id="password" />
                            </div>
                        </div>
                    </div>

                    <div class="form__actions">
                        <input type="submit" value="Login" class="btn btn--blue btn--width-250" />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Login;