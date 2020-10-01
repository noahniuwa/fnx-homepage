 import { useState } from 'react';


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
            <img className="logo" src="/fnxLogo.svg" alt="FinNexus"  />
           </div>
            <a role="button" onClick={handleMenuClick} className={`navbar-burger burger ${menu === 0 ? "" : "is-active"}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="basicNavbar" className={`navbar-menu ${menu === 0 ? "" : "is-active"}`}>
          <div className="navbar-end">
            <a className="navbar-item">
              Blog
            </a>
            <a className="navbar-item">
              Documentation
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Products
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  FNX Mining
                </a>
                <a className="navbar-item">
                  FPO 1.0
                </a>
                <a className="navbar-item">
                  FPO 0.1
                </a>
                <a className="navbar-item">
                  Wandora's Box
                </a>
                <a className="navbar-item">
                  Jack's Pot
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <style jsx>{`
        .navbar {
          margin: auto;
          width: 900px;
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
 
      @media (max-width: 1200px){
        .navbar {
          width: 900px;
        }
      }

      @media (max-width: 700px){
        .navbar {
          margin: auto;
          width: 400px;
        }
      }
      @media (max-width: 1024px){
        .navbar {
          margin: auto;
          width: 800px;
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
          max-width: 900px;
          margin-top: 30px;
        }
          
        .navbar-menu.is-active {
          top: 60px;
          opacity: 1;
          position: absolute;
          pointer-events: auto;
        }
        .navbar-menu {
          transition: top .4s ease-in-out;
          right: 0px;
          display: block;
          width: 100%;
          position: absolute;  
          top: -450px;
          pointer-events: none;
        }
      }
     
       
      `}</style>
    </div>
  )
}
