import { Link } from "react-router-dom";
import Home from '../../components/Home/Home';
import { logout, selectUser } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <header className="header">
            <div className="shell">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/" className="logo">Share<span>Me</span></Link>
                    </div>

                    <div className="header__nav">
                         <nav className="nav">
                            {user ? (
                             <ul>
                                 <li>
                                     <Link to="/">Feed</Link>
                                 </li>

                                 <li>
                                     <Link to="/about">About Us</Link>
                                 </li>

                                 <li>
                                     <Link onClick={handleLogout} to="/">Logout</Link>
                                 </li>
                             </ul>) :
                             (
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
                             )}
                         </nav>
                     </div>
                </div>
            </div>
        </header>
    );
}

export default Header;