import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="shell">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/" className="logo">Share<span>Me</span></Link>
                    </div>

                    <div className="header__nav">
                         <nav className="nav">
                             <ul>
                                 <li>
                                     <Link to="/">Feed</Link>
                                 </li>

                                 <li>
                                     <Link to="/about">About Us</Link>
                                 </li>

                                 <li>
                                     <Link to="/login">Login</Link>
                                 </li>

                                 <li>
                                     <Link to="/register">Register</Link>
                                 </li>
                             </ul>
                         </nav>
                     </div>
                </div>
            </div>
        </header>
    );
}

export default Header;