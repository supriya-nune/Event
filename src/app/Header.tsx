import React from 'react';
import Image from 'next/image';
import './styles/Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <div className="image-container">
          <Image
            src="/PD-logo.png" 
            alt="logo"
            width={100} 
            height={100} 
          />
        </div> 
       
        
        <h1 className="heading">Demo</h1>
        <div className="search">
                <input className="srch" type="search" name="" placeholder="Type To text"/>
                <a href="#"> <button className="btn">Search</button></a>
            </div>  
     
      </header>
    </div>
  );
}

export default Header;