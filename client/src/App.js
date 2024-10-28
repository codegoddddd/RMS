import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
// import logo from './logo.svg';
// import './App.css';
import { Route,Routes } from 'react-router-dom';
import Terms from './components/Terms';
import Admin from './components/Admin';
import Admintable2 from './components/Admintable2';
import Admintable1 from './components/Admintable1';
import Secondyrfirst from './components/Secondyrfirst';
import Update from './components/Update';
import Secondyrfirstmarks from './components/Secondyrfirstmarks';
import Secondyrsecond from './components/Secondyrsecond';
import Secondyrsecondmarks from './components/Secondyrsecondmarks';
import Thirdyrfirst from './components/Thirdyrfirst';
import Thirdyrfirstmarks from './components/Thirdyrfirstmarks';
import Thirdyrsecond from './components/Thirdyrsecond';
import Thirdyrsecondmarks from './components/Thirdyrsecondmarks';
import Workinprogress from './components/Workinprog';
import Reccomendation from './components/Reccomendation';
import AdSEfirst from './components/AdSEfirst';
import AdSEsecond from './components/AdSEsecond';
import AdTEfirst from './components/AdTEfirst';
import AdTEsecond from './components/AdTEsecond';
import UpdateSE1 from './components/UpdateSE1';
import { useState } from 'react';
// import AuthenticatedRoute from './components/AuthenticatedRoute';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        {/* <Route path="/Login" element={<Login/>}/> */}
        <Route
          path="/Login"
          element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Update/:userEmail" element={<Update/>}/>
        <Route path="/Admintable1" element={<Admintable1/>}/>
        <Route path="/Admintable2" element={<Admintable2/>}/>
        <Route path="/Secondyrfirst" element={<Secondyrfirst/>}/>
        <Route path="/Secondyrfirstmarks" element={<Secondyrfirstmarks/>}/>
        <Route path="/Secondyrsecond" element={<Secondyrsecond/>}/>
        <Route path="/Secondyrsecondmarks" element={<Secondyrsecondmarks/>}/>
        <Route path="/Thirdyrfirst" element={<Thirdyrfirst/>}/>
        <Route path="/Thirdyrfirstmarks" element={<Thirdyrfirstmarks/>}/>
        <Route path="/Thirdyrsecond" element={<Thirdyrsecond/>}/>
        <Route path="/Thirdyrsecondmarks" element={<Thirdyrsecondmarks/>}/>
        <Route path="/WIP" element={<Workinprogress/>}/>
        <Route path="/Recom" element={<Reccomendation/>}/>
        <Route path="/AdSEfirst" element={<AdSEfirst/>}/>
        <Route path="/AdSEsecond" element={<AdSEsecond/>}/>
        <Route path="/AdTEfirst" element={<AdTEfirst/>}/>
        <Route path="/AdTEsecond" element={<AdTEsecond/>}/>
        <Route path="/UpdateSE1/:studRoll" element={<UpdateSE1/>}/>

        <Route path="/Profile" element={<Profile/>}/>
        {/* <AuthenticatedRoute path="/Profile" element={<Profile/>} isLoggedIn={isLoggedIn}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
