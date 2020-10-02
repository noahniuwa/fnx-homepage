import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
  const [menu, setMenu] = useState(0);
  const handleMenuClick = () => {
    if (menu === 1) return setMenu(0)
    setMenu(1)
  }
  return (
    <div className="navbar-container">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item"  >
            <Link href="/">
              <a className="navbar-item"> <img className="logo" src="/fnxLogo.svg" alt="FinNexus"  /></a>
            </Link>
            
            
           </div>
            <a role="button" onClick={handleMenuClick} className={`navbar-burger  ${menu === 0 ? "" : "is-active"}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span className="burger burger-1" aria-hidden="true"></span>
              <span className="burger burger-2" aria-hidden="true"></span>
              <span className="burger burger-3" aria-hidden="true"></span>
            </a>
        </div>

        <div id="basicNavbar" className={`navbar-menu ${menu === 0 ? "" : "is-active"}`}>
          <div className="navbar-end">
          

            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="https://www.docs.finnexus.io/">
              <a  target="_blank" className="navbar-item">Documentation</a>
            </Link>  
            <Link href="about">
              <a className="navbar-item">About</a>
            </Link>
            <Link href="https://medium.com/finnexus">
              <a className="navbar-item">Blog</a>
            </Link>
           
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Products
              </a>
              <div className="navbar-dropdown">
                <Link href="https://liquidity.finnexus.io/">
                  <a  target="_blank" className="navbar-item">FNX Mining</a>
                </Link>  
                <Link href="https://options-v2-testnet.vercel.app/#/">
                  <a  target="_blank" className="navbar-item">FPO v1.0</a>
                </Link>
                <Link href="https://options.finnexus.io/#/">
                  <a  target="_blank" className="navbar-item">FPO v0.1</a>
                </Link>
                <Link href="https://wandora.finnexus.app/#/">
                  <a  target="_blank" className="navbar-item">Wandora Box</a>
                </Link>
                <Link href="https://jackspot.finnexus.app/#/">
                  <a  target="_blank" className="navbar-item">Jack's Pot</a>
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </nav>


      <style jsx>{`
        /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.navbar {
          margin: auto;
          
          min-width: 1000px;
        }
        .navbar-item img {
          width: 160px;
          max-height: 100px;
          position: absolute;
        }
        .logo {
          max-width: 900px;
          margin-top: 30px;
        } 
        .navbar-item {
          font-size: 16px;
        }
      @media (min-width: 1700px){
        .navbar {
          margin: auto;
          width: 1200px;
        }
        .navbar-item img {
          width: 180px;
        }
        .navbar-item {
          font-size: 20px;
        }
      }
 
      @media (min-width: 1000px) and (max-width: 1700px){
        .navbar {
          width: 1000px;
        }
      }
      

      @media (max-width: 360px){
        .navbar {
          margin: auto;
          min-width: 1000px;
        }
      }
      @media (max-width: 1024px){
        .navbar-burger, span:nth-child(1) {
          left: 0px; 
        }
        .navbar-burger, span:nth-child(2) {
          left: 0px;      
        }
        .navbar-burger, span:nth-child(3) {
          left: 0px;
        }
        .burger {
          position: relative;
          width: 40px;
          margin: auto;
          right: 500px;
          height: 2px;
        } 
        .navbar-burger {
          width: 60px;
          height: 60px;
          
        }
        .navbar {
          max-width: 1000px;
          min-width: 90%;
          margin: auto;
        }
        .navbar-item {
          font-size: 17px;
        }
        .navbar-item img {
          width: 140px;
          max-height: 100px;
          position: absolute;
        }
        .logo {
          max-width: 400px;
          margin-top: 30px;
        }
          
        .navbar-menu.is-active {
          top: 80px;
          opacity: 1;
          position: absolute;
          pointer-events: auto;
        }
        .navbar-menu {
          -webkit-transition: top .4s ease-in-out;
          -o-transition: top .4s ease-in-out;
          transition: top .4s ease-in-out;
          right: 0px;
          display: block;
          width: 100%;
          position: absolute;  
          top: -600px;
          pointer-events: none;
        }
      }
     
       
      `}</style>
    </div>
    )}
