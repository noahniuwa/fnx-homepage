 import { useState } from 'react';


export default function Navbar() {
  const [menu, setMenu] = useState(0);
  const handleMenuClick = () => {
    if (menu === 1) return setMenu(0)
    setMenu(1)
  }
  return (
    <div>
      <nav className="navbar   is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item"  >
            <img className="logo" src="/fnxLogo.svg" alt="FinNexus" width="150" height="100" />
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
        .navbar-item img {
          max-height: 2.75rem;
        }
        
        .navbar-menu.is-active {
          display: block;
          position: absolute;
          width: 50%;
          right: 5px;
        }
        
         * {
           /* border: 1px dashed red; */
         }
        
        .navbar{
          width: 100%;
          margin: auto;
        }
        

      @media (min-width: 700px) {
        
      }
        @media (max-width: 700px) {
          .navbar-burger span {
            
          }
          .navbar{
            width: 100%;
            margin: auto;
            padding: 0 20px;
          }

       
        
          .navbar-item img {
            max-height: 2.75rem;
          }
        
          .navbar-menu.is-active {
            display: block;
            position: absolute;
            width: 100%;
            right: 0px;
          }
           
        }
      `}</style>
    </div>
  )
}
