import React, { useContext } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png"
import arrow_icon from "../../assets/arrow_icon.png"
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { useClerk,useUser } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

  const {setCurrency}=useContext(CoinContext);
  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser()

  const currencyHandler=(e)=>{
    switch(e.target.value){
      case "usd":
        setCurrency({name:"usd",symbol:"$"});
        break;
      case "eur":
        setCurrency({name:"eur",symbol:"€"});
        break;
      case "inr":
        setCurrency({name:"inr",symbol:"₹"});
        break;
      default:
        setCurrency({name:"usd",symbol:"$"});
        break;
    }
  }

  return (
    <div className='navbar'>
      <Link to="/"><img src={logo} className='logo'></img></Link>
      <ul                                                                 >
        <Link to='/'><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        
        {
        isSignedIn?<div className="bg-[#130071]">
          <UserButton className="bg-[#130071]"/>
        </div>:<button  onClick={()=>openSignIn({})} >
        Get started 
      </button>
        } 
      </div>
    </div>
  )
}

export default Navbar