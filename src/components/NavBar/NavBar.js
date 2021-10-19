import React from 'react'
import './NavBar.css';
function NavBar() {
    return (
        <div className="navbar">
            <a href="">
            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" className="disnep" alt="hotstar-logo"></img>
            </a>
            
            <ul className="nav-links">
                <a className="pl" href=""><li className="nav-items1">TV</li></a>
                <a className="pl" href=""><li className="nav-items2">Movies</li></a>
                <a className="pl" href=""><li className="nav-items3">Sports</li></a>
                <a className="pl" href=""><li className="nav-items4">Premium</li></a>
                
                <input type="text" placeholder="search" className="search-button"></input>
                <a href="" className=""><button className="sub-but">Subscribe</button></a>
                <a href="" className="in"><h1 src="" className="log">LOGIN</h1></a>
            </ul> 
            
            
        </div>
          

          

          
          
       

    

          
        
          
          
            
            
            

        
    )
}

export default NavBar

