import Head from 'next/head';
 import Navbar from '../components/Navbar'

export default function Home() {
  
  return (
    <div className="appContainer">
      <Head>
        <title>FinNexus</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet"></link>
      </Head>
     

      <main>
        <header className="section_1"> 
          <Navbar />   
          <div className="headerContentContainer">
          <div className="mainContents">  
            <h1 className="mainTitle">
              FinNexus
            </h1>
            <div className="mainContentsText">
              DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve:
            </div>
            <div className="buttons-list">
              <button className="is-rounded button is-warning">Dark</button>
              <button className="is-rounded button is-danger">Dark</button>
            </div>
          </div>
          <div className="mainAside">
            {/* <img className="section_1_bg" src="bgshape_01.svg"/> */}
            {/* <img className="section_1_bg" src="top_illustration.svg"/> */}
           </div>
        </div>  
          <img className="section_1_bg" src="bgshape_01.svg"/>
        </header>

        <div className="section_2"> 
          <div className="subSectionContainer">
            <img className="section_2_img" src="FNX_liquidity.svg"/>
          </div>
          <div className="subSectionContainer">
            <div className="section_2_imageAside">
              <h3>Liquidity</h3>
              <p>DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve:</p>
              <button className=" btn_right is-rounded button is-danger">Dark</button>
            </div>          
          </div>
          
        </div>

        <div className="section_3"> 
          <img className="section_3_img" src="FNX_options.svg"/>
          <div className="section_3_imageAside">
            <h3>Options</h3>
            <p>DeFi has come to represent the forefront of blockchain based finance. However, from the perspective of investors, there are a number of key issues the DeFi ecosystem is still not able to solve:
            </p>
            <button className="asideButton  is-rounded button is-danger">Dark</button>
          </div>
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
            <button className="asideButton .btn_right is-rounded button is-warning">Dark</button>
            </div>
          <div className="purplePill_2">
            <img className="pill_section_2_img" src="earn.svg"/>
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
        @media (min-width: 700px) {
          main {
            max-width: 80%;
          }
          .subSectionContainer {
            width: 45%;
          }
          .section_1_bg {
            display: none;
          }
          .appContainer {
            overflow: hidden;
          }
          .btn_right {
            float: right;
          }
          
          html,
          body {
            padding: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            font-family: 'Open Sans Condensed', sans-serif;
            font-weight: 600;
            overflow: hidden;
          }
          html {
            overflow:   hidden;
            font-size: 200% !important;
          }
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
          }
          
          * {
            box-sizing: border-box;
            position: relative;
          }
        
          .mainContentsText {
            margin-bottom: 40px;
          }
          .section_1 {
            color: white;
            padding-left: 100px;
            padding-right: 100px;
            color: white;
            background-color: #224099;
            height: 90vh;
            max-height: 800px;
            margin: auto;
            border-radius: 0 0 250px 250px;
          }
          .section_3 {
            margin: auto;
            display: flex;
          }
          .section_2 {
            margin: auto;
            display: flex;
            justify-content: space-between;
          }
          .headerContentContainer {
            
            display: flex;
            justify-content: space-around;
            height: 100%;
          }
          .mainAside {
            margin-top: 0px;
            z-index: 99;
            width: 40%;
            background-image: url("/top_illustration.svg");
            background-repeat: no-repeat;
            background-position: right;
            background-size: 500px 500px;
          }

        
          .mainContents {
            width: 35%;
            font-size: 1rem;
          }
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
            margin-top: 50px;
            width: 90%;
          }
          .pillText_1 {
            margin-top: 30px;
          }
          .purplePill_1{
            width: 100%;
            padding: 50px;
          }
          .purplePill_2{
            width: 100%;
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
            height: 500px;
            background-color: #9F66A9;
            border-radius: 300px;
          }
          .aside_3 {
            transform: translateY(-50px);
          }
          .asideButton {
            margin-top: 20px;
          }

          
          .section_2_img{
            margin-top: 40px;
            width: 100%;
            /* transform: translateY(-100px); */
            filter: drop-shadow(0px 10px 15px #585858);
          }
          .section_2_imageAside {
            width: 100%;
          }
          
          h3 {
            color: #9F66A9;
            font-size: 4rem;
            font-weight: 900;
          }
          
        
          
          .mainTitle{
            margin-bottom: 20px;
            margin-top: 20px;
          }
          
          .buttons-list {
            display: flex;
          }
          .button {
            width: 120px;
            margin-right: 30px;
          }
          
          h1 {
            font-size: 5rem;
            font-weight: 900;
          }
          main {
            width: 90%;
            margin: auto;
            overflow: hidden;
          }
          
        }
          @media (max-width: 700px) {
            
          .subSectionContainer {
            width: 100%;
          }
            .purplePill {
              overflow: visible;
              display: block;
              color: white;
              margin-top: 0;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              width: 100%;
              height: 600px;
              background-color: #9F66A9;
              border-radius: 50px;
          }
         
          .pillText_1 {
            margin-top: 30px;
          }
          .purplePill_1{
            width: 100%;
          }
          .pill_section_2_img {
            width: 80%;
            display: block;
            margin: auto;
            filter: drop-shadow(0px 10px 15px #585858);

          }
          .purplePill_2{
            display: block;
            width: 100%;
           }
          .pillContainer {
            display: flex;
            align-items: flex-end; 
            justify-content: flex-start;
          }
          .section_1_bg{
            position: absolute;
            display: block;
            /* transform: translateX(200px); */
            width: 100%;
            transform: translate(309px, -350px);
          }
       
          .buttons-list {
            display: flex;
          }
          .button {
            width: 120px;
            margin-right: 30px;
            
          }
          .mainAside {
            background-image: none;
          }
          .mainContents {
            display: inline-block;
            padding-top: 45px;
            padding-left: 55px;
            padding-right: 15px;
            width: 95%;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.3;
          }
          
          h1 {
            font-size: 3.5rem;
            font-weight: 900;
          }
          main {
            width: 100%;
            margin: 0;
          }
          .section_1 {
            padding-left: 0px;
            padding-right: 0px;
            height: 90vh;
            border-radius: 0 0 80px 80px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
            width: 100%;
            color: white;
          }
          .mainContentsText {
            margin-bottom: 20px;
          }
        
          .section_2 {
            width: 80%;
            display: block;
            margin-bottom: 0px;
            transform: translateY(-100px);
          }
          .section_2_img{
            width: 100%;
            margin-bottom: 30px;
            filter: drop-shadow(0px 10px 15px #585858);

           }
          .section_2_imageAside {
            width: 100%;
          }
          
          .section_3 {
            width: 80%;
            display: block;
            transform: translateY(-100px);
            margin: auto;
          }
          .section_3_img{
            margin-top: 40px;
            width: 100%;
            margin-bottom: 30px;
            filter: drop-shadow(0px 10px 15px #585858);

           }
          .section_3_imageAside {
            width: 100%;
          }
          
          .button {
            width: 100px;
            margin-right: 20px;
          } 
          .mainTitle{
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  )
}
