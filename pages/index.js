import Head from 'next/head';
import {useState} from 'react';


export default function Home() {
  const [menu, setMenu] = useState(0);
  const handleMenuClick = () => {
    if (menu === 0) return setMenu(1)
    setMenu(0)
  }
  
  return (
    <div className="">
      <Head>
        <title>FinNexus</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet"></link>
      </Head>
     

      <main>
        <div className="section_1"> 
        <nav className="navbar   is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item"  >
            <img className="logo" src="logo.png"/>
          </a>

          <a role="button" onClick={handleMenuClick} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="basicNavbar" className={`navbar-menu ${menu ? "" : "is-active" }`}>
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
          <div className="mainContents">  
            <h1 className="mainTitle">
              FinNexus
            </h1>
            <div>
              DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve:
            </div>
            <div className="buttons-list">
              <button className="is-rounded button is-warning">Dark</button>
              <button className="is-rounded button is-danger">Dark</button>
            </div>
          </div>
          <div className="mainAside">
            <img className="section_1_bg" src="bgshape_01.svg"/>
          </div>
        </div>
        <div className="section_2"> 
          <img className="section_2_img" src="FNX_liquidity.svg"/>
          <div className="imageAside">
            <h3 className="asideTitle">Liquidity</h3>
            <p className="asideText">DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve:
            <button className="asideButton is-rounded button is-danger">Dark</button>
            </p>
          </div>
        </div>
        <div className="section_3">
          <div className="imageAside aside_3">
            <h3 className="asideTitle">Options</h3>
            <p className="asideText">DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve.</p>
            <button className="asideButton is-rounded button is-danger">Dark</button>
          </div> 
          <img className="section_3_img" src="FNX_options.svg"/>
        </div>

        <div className="purplePill">
          <div className="purplePill_1">
            <div className="pillContainer">
              <div className="squareLabel">
                <img className="square_label_img" src="blue_FNX_logo.svg"/>
                <p>Options</p>
                <div className="versionLabel">
                  v1.0
                </div>
              </div>
              <div className="labelTitle">
                <h4>FPO</h4>
                <h5>V1.0</h5>
              </div>
            </div>
            <p className="pillText_1">DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve.</p>
            <button className="asideButton is-rounded button is-warning">Dark</button>
            </div>
          <div className="purplePill_2">
            <img className="pill_section_2_img" src="FNX_options.svg"/>
          </div>
        </div>

        <div className="p_e_container">
          <div className="partners">
          </div>
          <div className="exchanges">

          </div>
        </div>
      </main>

      <footer>
      
      </footer>

      <style jsx>{`

      .partners {
        transform: translateY(-40px);
        color: white;
        width: 100%;
        height: 450px;
        background-color: #A1D8D9;
        border-radius: 300px;
      }
      .p_e_container {
        margin-top: 200px;
        color: white;
        width: 100%;
        height: 750px;
        background-color: #6E308B;
        border-radius: 200px 200px 200px 200px;
      }
      .pill_section_2_img {
        width: 400px;
      }
      .pillText_1 {
        margin-top: 30px;
      }
      .purplePill_1{
        width: 300px;
      }
      .purplePill_2{
        width: 400px;
      }
      .pillContainer {
        display: flex;
        align-items: flex-end; 
        justify-content: flex-start;
      }
      h4 {
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
        padding: 0;
        line-height: 1.5rem;
      }
      h5 {
        font-size: 2rem;
        font-weight: 900;
        margin: 0;
        padding: 0;
      }
      .labelTitle {
        
        
      }
      .versionLabel {
        float: right;
        margin-top: 5px;
        width:30px;
        height: 15px;
        color: white;
        background-color: #6E308B;
        font-size: 0.5rem;
        text-align: center;
        border-radius: 10px;
      }
      .square_label_img {
        width: 70%;
        margin: auto;
        display: block;
      }
      .squareLabel {
        margin-right: 10px;
        display: inline-block;
        padding: 20px;
        font-size: 1.2rem;
        font-weight: 900;
        color: black;
        width: 110px;
        height: 110px;
        background-color: #EFF0EB;
        border-radius: 20px;
      }
      .purplePill {
        display: flex;
        justify-content: space-evenly;
        color: white;
        margin-top: 100px;
        padding-top: 40px;
        padding-left: 150px;
        padding-right: 80px;
        padding-bottom: 300px;
        width: 100%;
        height: 400px;
        background-color: #9F66A9;
        border-radius: 300px;
      }
      .aside_3 {
        transform: translateY(-50px);
      }
      .asideButton {
        margin-top: 20px;
      }

      .section_3 {
        margin-top: 50px;
        display: flex;
        justify-content: space-evenly;
      }
      .section_3_img{
        /* display: inline-block; */
        width: 40%;
        
        /* filter: drop-shadow(0 -.01mm 2mm #EFF0EB); */
        filter: drop-shadow(0px 10px 15px #585858);
      }
      .section_2 {
        margin-top: 50px;
        display: flex;
        justify-content: space-evenly;
      }
      .section_2_img{
        /* display: inline-block; */
        width: 40%;
        transform: translateY(-100px);
        /* filter: drop-shadow(0 -.01mm 2mm #EFF0EB); */
        filter: drop-shadow(0px 10px 15px #585858);
      }
      .imageAside {
        /* display: inline-block; */
        width: 30%;
      }
      h3 {
        color: #9F66A9;
        font-size: 4rem;
        font-weight: 900;
      }
      .navbar-menu.is-active {
        display: block;
        position: absolute;
        width: 100%;
      }
        .section_1_bg {
          width: 250px;
          margin-left: 170px;
          transform: translateY(30px);
        }
         * {
           /* border: 1px dashed red; */
         }
        .mainTitle{
          margin-bottom: 35px;
        }
        .navbar{
          width: 80%;
          margin: auto;
        }
        .buttons-list {
          display: flex;
        }
        .button {
          width: 120px;
          margin-right: 30px;
          
        }
        .mainAside {
          display: inline-block;
        }
        .mainContents {
          display: inline-block;
          padding-top: 50px;
          padding-left: 30px;
          width: 400px;
          font-size: 1em;
        }
        h1 {
          font-size: 4em;
          font-weight: 900;
        }
        main {
          width: 90%;
          margin: auto;
        }
        @media (min-width: 700px) {
          .section_1 {
            color: white;
            padding-left: 100px;
            padding-right: 100px;
            padding-bottom: 450px;
            color: white;
            background-color: #224099;
            width: 100%;
            height: 80vh;
            margin: auto;
            border-radius: 0 0 250px 250px;
          }
        }
        @media (max-width: 700px) {
          main {
            width: 100%;
            margin: 0;
          }
          .section_1 {
            height: 70vh;
            border-radius: 0 0 80px 80px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
            width: 100%;
            color: white;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          font-family: 'Open Sans Condensed', sans-serif;
          font-weight: 600;
          
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
