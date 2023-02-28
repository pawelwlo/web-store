import React from 'react';
import {
    Outlet,
    NavLink
  } from "react-router-dom";
  import './App.css';
import Footer from '../components/Footer';
 
export default

function RootLayout ({cartCounter}) {
  
    
    
    return(
      <div className="App">
  
      <header >
        <div className="App-header">
        <NavLink to="/"><img src="./Logo-web-store.png" className='logo'></img></NavLink> 
        
        
        </div>
        
        
        <div className='navHeader'>

        
        <NavLink className='nav-link' to="/" >Home</NavLink>
          <NavLink className='nav-link' to="about" >About</NavLink>
          <NavLink className='nav-link' to="contact">Contact</NavLink>
          
            <NavLink className="nav-link" to='cart' > <span >{cartCounter}<br></br> <img className='cartLogo' src='./cart.png'></img></span> 
          </NavLink>
          
        
        </div>
        
      </header>
     
      <Outlet/>
      <Footer/>
    </div>
    )
  }

