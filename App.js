import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import { useState } from 'react'; 

const App = () => {
  
  
  
  return(
    <>

    <nav className='top'>
          <Link to='/'>Home</Link>
          <Link to='/aboutme'>About_ME</Link> 
          <Link to='/contact'>Contact</Link> 
    </nav>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
    </>
  )
}



  
export default App;
