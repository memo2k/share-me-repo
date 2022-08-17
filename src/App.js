//import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';

function App() {
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
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
