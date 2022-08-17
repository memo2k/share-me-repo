import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="shell">
                <div className="footer__logo">
                    <Link to="/" className="logo logo--large">Share<span>Me</span></Link>
                </div>

                <div className="footer__rights">
                    <p>Copyright ©2022 All rights reserved | ShareMe</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;