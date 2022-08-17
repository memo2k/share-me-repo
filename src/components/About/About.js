const About = () => {
    return (
        <div className="section-about">
            <div className="shell">
                <div className="grid grid-no-gutter grid-space">
                    <div className="grid__col grid__col--1of2">
                        <div className="section__image">
                            <img src="images/about.jpg" alt="" width="640" height="999" />
                        </div>
                    </div>

                    <div className="grid__col grid__col--1of2">
                        <div className="section__content">
                            <h2>About Us</h2>

                            <p>We are constantly iterating, solving problems and working together to connect people all over the world. That's why it's important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone. We're committed to fostering a safe and supportive community for everyone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;