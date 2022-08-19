import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import Details from './components/Details/Details';
import EditPost from './components/EditPost/EditPost';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />

      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/details/:postId" element={<Details />}/>
          <Route path="/editpost/:postId" element={<EditPost />}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
