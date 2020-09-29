import Head from 'next/head';
import Navbar from '../components/Navbar'
import TeamMember from '../components/TeamMember'
import PartnerCarousel from '../components/PartnerCarousel'
import ExchangesCarousel from '../components/ExchangesCarousel'

export default function Home() {
  
  return (
    <div className="appContainer">
      <Head>
        <title>FinNexus Options</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="sizeRestrictor">
      <main> 
        <header className="section_1"> 
          <Navbar />   
          
          <div className="mainContents">  
            <h1 className="mainTitle">
            FinNexus Options v1.0
            </h1>
            <div className="mainContentsText_1">
              FinNexus Protocol For Options is a pioneering multi-blockchain decentralized options protocol based on the innovative MASP (Multi-Asset Single Pool) liquidity model. 
            </div>
            <p className="instructions">Join our email list to get the latest news about FinNexus's upcoming decentralized derivative products.</p>
            <button className="is-rounded button is-danger">Sign-up</button>
          </div>

          <img className="section_1_bg" src="bgshape_01.svg"/>
          <div className="transparent-controller">
            <img className="section_1_large_bg" src="top_illustration.svg"/>
          </div>
        </header>

        <div className="section_2"> 
          <img className="section_2_img" src="FNX_liquidity.svg"/>
          <div className="subSectionContainer">
            <div className="section_2_imageAside">
              <h3 className="section-header">Earn Now!</h3>
              <p clasName="section-2-text">With FPO v1.0, liquidity providers earn attractive rewards for trustlessly locking their assets in the the MASP liquidity pool.</p>
              <div className="float-container section_2_button">
                <button className="is-rounded float-left button is-danger">Provide Liquidity</button>
              </div>
            </div>          
          </div>
        </div>

        <div className="section_3"> 
          <img className="section_3_img" src="FNX_options.svg"/>
          <div className="section_3_imageAside">
            <h3 className="section-header"> Hedge & Leverage</h3>
            <p className="section-3-text">FPO's wide variety of options makes it easy to find just the solution for your investment needs, and our MASP liquidity pool ensures you never need to worry if there's enough liquidity.</p>
            <button className="is-rounded button section_ is-danger">Buy FPO Options</button>
          </div>
        </div>
        
     

        <div className="purplePill">
          <div className="purplePill_1">
            <div className="pillContainer">
              <div className="squareLabel">
                <img className="square_label_img" src="blue_FNX_logo.svg"/>
                <p className="label-options">Options</p>
                <div className="versionLabel">
                  v0.1
                </div>
              </div>
              <div className="labelTitle">
                <h4>FPO</h4>
                <h5>v0.1</h5>
              </div>
            </div>
            <div className="pill-text-container vertical-reverse">
              <p className="pillText_1">FinNexus Protocol For options FPO v0.1 is the first decentralized options product launched by FinNexus. It allows sophisticated individual investors writers to write their own specific options through the platform.</p>
              <div className="float-container">
                <button className="pill_1_button float-right is-rounded button is-warning">Write Options</button>
              </div>
            </div>
            </div>
            <img className="pill_section_2_img" src="earn.svg"/>
            <img className="pill_bg_image" src="bgshape_01.svg"/>

        </div>
        
        <div className="team-header-container">
          <h3 className="section-header team-title">Team</h3>
        </div>
        <div className="grid team">
          <TeamMember name="Boris Yang" title="Founder & CEO" image="Boris Yang - Founder & CEO.png" />
          <TeamMember name="Bob Chen" title="Co-founder & CTO" image="Bob Chen - Co-founder & CTO.png" />
          <TeamMember name="Ryan Tian" title="Financial Specialist" image="Ryan Tian - Financial Specialist.png" />
          <TeamMember name="Veerender Singh" title="Community Manager" image="Veerender Singh - Community Manager.png" />
          <TeamMember name="Jack Tung" title="Legal Expert" image="Jack Tung - Legal Expert.png" />
          <TeamMember name="Nicholas Krapels" title="Strategy Advisor" image="Nicholas Krapels - Strategy Advisor.png" />
          <TeamMember name="Noah Maizels" title="Global Marketing Adviser" image="Noah Maizels - Global Marketing Adviser.png" />
          <TeamMember name="Eason Zhang" title="FP of River Capital" image="Eason Zhang.png" />
          <TeamMember name="Jack Lu" title="Wanchain Founder & CEO" image="Jack Lu.png" />

        </div>
      </main>
      <p className="partners-title sub-section-header">Partners</p>
      <div className="carousel-container">
        <PartnerCarousel />
      </div>
      <p className="exchanges-title sub-section-header">Exchanges</p>
      <div className="carousel-container">
        <ExchangesCarousel />
      </div>
      <footer>
        <div className="footer_1">
          <p className="socials-title">
            <span className="big-text">Join</span> the FinNexus community <strong>NOW</strong>
          </p>
          <div className="socials-grid socials">
            <a href="https://twitter.com/fin_nexus/">
              <img className="social-logo" src="/twitter.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a href="https://t.me/FinNexusOfficial">
              <img className="social-logo" src="/telegram.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a href="https://medium.com/finnexus/">
              <img className="social-logo" src="/medium.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a href="https://www.linkedin.com/company/finnexus/">
              <img className="social-logo" src="/linkedin.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a href="https://www.facebook.com/FinNexus/">
              <img className="social-logo" src="/facebook.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a href="https://discord.gg/bCDMHN7">
              <img className="social-logo" src="/discord.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a>
              <img className="social-logo" src="/wechat.svg" alt="social-logo" width="100" height="100" />
            </a>
            <a href="mailto:info@finnexus.io">
              <img className="social-logo" src="/email.svg" alt="social-logo" width="100" height="100" />
            </a>
             
          </div>
        </div>
        
        <div className="footer_2">
          <img className="logo" src="/fnxLogo.svg" alt="FinNexus" width="150" height="100" />
        </div>
        <div className="footer_3">© 2020 FinNexus. All Rights Reserved.</div>
      </footer>

      </div>

      <style jsx>{`
        .sizeRestrictor{
          max-width: 1200px;
          margin: auto;
        }
        .float-left {
          float: left;
        }
      
        strong {
          color: inherit;
        }
         
        
         
       
        .social-logo {
           filter: invert(100);
        }
        
          
        * {
          box-sizing: border-box;
          position: relative;
        }
      
        .grid {
          max-width: 1000px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          /* This is better for small screens, once min() is better supported */
          /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
          grid-gap: 4rem;
          height: 100%;
        }
        .float-right {
          float: right;
        }
        .float-left {
          float: left;
        }
        .button {
          margin-top: 10px;
        } 
        .instructions {
          font-size: 1rem;
          font-weight: 400;
          font-style: italic;
        }
        h1 {
          font-size: 3rem;
          font-weight: 900;
          line-height: 3.5rem;
        }
        .sub-section-header {
          color: #9F66A9;
          font-size: 3rem;
          font-weight: 900;
          line-height: 3.7rem;
          margin-bottom: 1rem;
        }
        .section-header {
          color: #9F66A9;
          font-size: 4rem;
          font-weight: 900;
          line-height: 3.7rem;
          margin-bottom: 2rem;
        }
      
      
        html,
        body {
          font-weight: 900;
          overflow:   visible;
          padding: 0;
          width: 100%;
          margin: 0;
          background-color: #F1F1F2; 
        }
        ::-webkit-scrollbar {
          display: none;
          width: 0px;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .appContainer, main {
          position: relative;
          overflow: hidden;
        }       
        @media(min-width: 1200px){
          .pillText_1, 
          .section-1-text, 
          .section-2-text,{
            font-size: 1.5rem;
          }
          .section-3-text {
            width: 28rem;
          }
          .button {
            font-size: 1.4rem;
          }
          .section_1 {
            height: 60vh;
            border-radius: 0 0 200px 200px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
            
            width: 100%;
            color: #F1F1F2;
          }
          .mainContents {
            width: 40%;
            font-weight: 600;
            font-size: 1.3rem;
            line-height: 1.3;
            left: 9rem;
            max-height: 20rem;
          }
          
          .carousel-container {
              padding-bottom: 3rem;
              max-width: 80%;
              margin: auto;
            }
           
          .section_1_large_bg {
            position: absolute;
            max-width: 25rem;
            right: 3rem;
            top: -15rem;
            z-index: 1; 
            /* opacity: 0.5; */
          }
          .section_1_bg{
            display: none;
            position: absolute;
            max-width: 18rem;
            left: 33rem;
            top: 5rem;
            z-index: 1; 
          }
          .mainContents {
            width: 40%;
            font-weight: 600;
            font-size: 1.3rem;
            line-height: 1.3;
            left: 9rem;
            max-height: 20rem;
          }
          
          .mainTitle{
            font-size: 3rem;
            line-height: 4rem;
            margin-bottom: 20px;
            margin-top: 20px;
          } 
         
         
        
       
          .mainContentsText_1 {
            margin-bottom: 20px;
          }
        
          main {
            width: 100%;
            margin: auto;
            overflow: visible;
          }
          .section_2_imageAside {
            max-width: 28rem;
            top: 0rem;
            font-size: 1.5rem;
          }    
          .section_2_img{
            margin-top: 40px;
            max-width: 30rem;
            margin-bottom: 30px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            bottom: 9rem;
           }
          
          .section_2 {
            top: 2rem;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            margin-bottom: 2rem;
            position: relative;
          }
          .section_2_button {
            margin-top: 1rem;
          }
          .section_3_imageAside {
            width: 25rem;
            max-width: 22rem;
            bottom: 7rem;
          }    
         
          .section_3_img{
            margin-top: 40px;
            margin-bottom: 30px;
            transform: translateX(1.6rem);
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            bottom: 6rem;
            width: 30rem;
           }
          
          .section_3 {
            margin: auto;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 80%;
            bottom: 2rem;
            position: relative;
            margin-top: 9rem;
          }
        
        
        
          .section_2 {
            width: 90%;
            margin: auto;
            display: block;
            margin-bottom: 80px;
            position: relative;
            bottom: 70px;
            /* transform: translateY(-100px); */
          }
          .section_2_img {
            width: 100%;
            margin-bottom: 50px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
           }

          
          .appContainer {
            overflow: hidden;
          }
          
          
          
         
         
          .section_2 {
            margin: auto;
            display: flex;
            justify-content: space-between;
          }
          .headerContentContainer {
            display: flex;
            justify-content: space-around;
            max-height: 10rem;
          }
      
         
          
           
          
          .pillText_1 {
            margin-top: 20px;
            
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
         
          .team-title{
            width: 60%;
            margin: 6rem auto;
            font-size: 5rem;
          }
          .team {
            width: 60%;
            margin: auto;
          }
     
          .section_2_img{
            margin-top: 40px;
            width: 100%;
            /* transform: translateY(-100px); */
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
          }

          .pill_bg_image {
            position: absolute; 
            bottom: 0rem;
            top: 5rem;
            right: -7rem;
            max-width: 20rem;
            z-index: 2;
          }
          .label-options {
            text-align: center;
          }
          .versionLabel {
            transform: scale(1.2, 1.2);
            float: right;
            margin-top: 5px;
            width: 30px;
            height: 15px;
            color: #F1F1F2;
            padding-top: 1px;
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
            transform: scale(.8, .8); 
            box-sizing: content-box;
            margin-right: 10px;
            display: inline-block;
            padding: 15px;
            font-size: 1.2rem;
            font-weight: 900;
            color: black;
            width: 110px;
            height: 110px;
            background-color: #EFF0EB;
            border-radius: 20px;
            margin-bottom: 8px;
            top: 20px;
          }
          .pill_1_button {
            margin-top: 3rem;
            bottom: 50px;
            float: left;
          } 
        
          .pillText_1 {
            bottom: 20px;
            width: 100%;
          }
          .pill_section_2_img {
            transform: translateX(-15px);
            width: 100%;
            display: block;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            z-index: 3;

          }
          .purplePill {
            display: flex;
             margin-bottom: 60px;
            justify-content: space-between;
            color: #F1F1F2;
             padding-left: 40px;
            padding-right: 40px;
            width: 95%;
            background-color: #9F66A9;
            border-radius: 150px;
          }
          .pillText_1 {
            margin-top: 2rem;
            max-width: 28rem;
          }
          .purplePill_1{
            width: 100%;
            margin-left: 30px;
           }
          
         
          
          .pillContainer {
            display: flex;
            align-items: flex-end; 
            justify-content: flex-start;
          }
        
          

          .partners-title {
            margin-bottom: 5rem;
            font-size: 5rem;
            margin-top: 10rem;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
          }
          .exchanges-title {
            margin-bottom: 50px;
            font-size: 5rem;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
          }
          .carousel-container {
            margin-bottom: 5rem;
          }

          footer {
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            /* margin-top: 6rem; */
            color: #F1F1F2;
            background-color: #224099;
            height: 60vh;
            max-height: 800px;
            border-radius: 300px 300px 0 0;
            position: static;
            width: 100%;
          } 
          .social-logo {
            width: 3rem;
          }
          .socials-grid {
            max-width: 400px;
            display: grid;
            /* grid-template-columns: repeat(auto-fill, minmax(40px, 1fr)); */
            /* This is better for small screens, once min() is better supported */
            grid-template-columns: repeat(auto-fill, minmax(min(100px, 100%), 1fr));
            grid-gap: 1rem;
            height: 8rem;
            /* margin-right: 10rem; */
            margin:auto;
            margin-bottom: 4rem;
          }
          .socials-title {
            max-width: 30rem;
            font-size: 2rem;

            margin: auto;
          }
          strong {
            font-size: 2.5rem;
          }
          .big-text{
            font-size: 3rem;
          }
          .footer_1 {
            display: flex;
            justify-content: space-evenly;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 12rem;          
          }
          .footer_2 {
            text-align: center;
            background-color: #203c88;
          }
          .footer_3 {
            background-color: #1d357a;
            font-size: .8rem;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
           }
        }
        @media (min-width: 1000px) and (max-width: 1600px){
          .carousel-container {
              padding-bottom: 5rem;
              max-width: 80%;
              margin: auto;
            }
            
          .section_1 {
          
            height: 75vh;
            border-radius: 0 0 200px 200px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
            
            width: 100%;
            color: #F1F1F2;
          }
           
          .section_1_large_bg {
            position: absolute;
            max-width: 22rem;
            right: 3rem;
            top: -12rem;
            z-index: 1; 
          }
          .section_1_bg{
            display: none;
            position: absolute;
            max-width: 18rem;
            left: 33rem;
            top: 5rem;
            z-index: 1; 
          }
          .mainContents {
            display: block;
            width: 40%;
            font-weight: 600;
            font-size: .8rem;
            line-height: 1;
            right: -5rem;
            top: 2rem;
          }
          
          .mainTitle{
            font-size: 2rem;
            line-height: 2rem;
            margin-bottom: 20px;
          } 
         
         
        
       
          .mainContentsText_1 {
            margin-bottom: 20px;
          }
        
          main {
            width: 100%;
            margin: auto;
            overflow: visible;
          }
          .section_2_imageAside {
            max-width: 25rem;
            top: 6rem;
            font-size: 1.3rem;
          }    
          .section_2_img{
            margin-top: 40px;
            max-width: 25rem;
            margin-bottom: 30px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            bottom: 9rem;
           }
          
          .section_2 {
            top: 2rem;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            margin-bottom: 2rem;
            position: relative;
          }
          .section_2_button {
            margin-top: 1rem;
          }
          .section_3_imageAside {
            max-width: 30rem;
            bottom: 7rem;
            font-size: 1.3rem;
          }    
         
          .section_3_img{
            margin-top: 40px;
            width: 30rem;
            margin-bottom: 30px;
            transform: translateX(1.6rem);
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            bottom: 2rem;
           }
          
          .section_3 {
            margin: auto;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 80%;
            bottom: 2rem;
            position: relative;
            margin-top: 9rem;
            padding-bottom: 3rem;
          }
        
        
        
          .section_2 {
            width: 90%;
            margin: auto;
            display: block;
            margin-bottom: 80px;
            position: relative;
            bottom: 70px;
            /* transform: translateY(-100px); */
          }
          .section_2_img {
            width: 100%;
            margin-bottom: 50px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
           }

          
          .appContainer {
            overflow: hidden;
          }
          
          
          
         
         
          .section_2 {
            margin: auto;
            display: flex;
            justify-content: space-between;
          }
          .headerContentContainer {
            display: flex;
            justify-content: space-around;
            
          }
      
         
          
           
          
          .pillText_1 {
            margin-top: 20px;
            
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
          
         
     
          .section_2_img{
            margin-top: 40px;
            width: 100%;
            /* transform: translateY(-100px); */
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
          }

          .pill_bg_image {
            position: absolute; 
            bottom: 0rem;
            top: 5rem;
            right: -7rem;
            max-width: 20rem;
            z-index: 2;
          }
          .label-options {
            text-align: center;
          }
          .versionLabel {
            transform: scale(1.2, 1.2);
            float: right;
            margin-top: 5px;
            width: 30px;
            height: 15px;
            color: #F1F1F2;
            padding-top: 1px;
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
            transform: scale(.8, .8); 
            box-sizing: content-box;
            margin-right: 10px;
            display: inline-block;
            padding: 15px;
            font-size: 1.2rem;
            font-weight: 900;
            color: black;
            width: 110px;
            height: 110px;
            background-color: #EFF0EB;
            border-radius: 20px;
            margin-bottom: 8px;
            top: 20px;
          }
          .pill_1_button {
            margin-top: 3rem;
            bottom: 50px;
            float: left;
          } 
        
          .pillText_1 {
            bottom: 20px;
            width: 100%;
          }
          .pill_section_2_img {
            transform: translateX(-15px);
            width: 100%;
            display: block;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            z-index: 3;

          }
          .purplePill {
            display: flex;
            margin-bottom: 60px;
            justify-content: space-between;
            color: #F1F1F2;
            padding-left: 40px;
            padding-right: 40px;
            width: 95%;
            background-color: #9F66A9;
            border-radius: 150px;
          }
          .pillText_1 {
            margin-top: 2rem;
            /* line-height: 1.3rem; */
            max-width: 28rem;
          }
          .purplePill_1{
            width: 100%;
            margin-left: 30px;
           }
          
         
          
          .pillContainer {
            display: flex;
            align-items: flex-end; 
            justify-content: flex-start;
          }
          .team-title {
            font-size: 4rem;
            padding-bottom: 4rem;
            margin: auto;
            max-width: 60%;
            padding-top: 3rem;

          }
          .team-header-container {
            
          }
          .team {
            max-width: 60%;
            margin: auto;
          }
         
          .partners-title {
            margin-bottom: 50px;
            font-size: 5rem;
            margin-top: 10rem;
          }
          .exchanges-title {
            margin-bottom: 50px;
            font-size: 5rem;
            margin-top: 5rem;

          }
          footer {
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            margin-top: 6rem;
            color: #F1F1F2;
            background-color: #224099;
            height: 70vh;
            max-height: 800px;
            border-radius: 300px 300px 0 0;
            position: static;
            width: 100%;
          } 
          .socials-grid {
            max-width: 300px;
            display: grid;
            /* grid-template-columns: repeat(auto-fill, minmax(40px, 1fr)); */
            /* This is better for small screens, once min() is better supported */
            grid-template-columns: repeat(auto-fill, minmax(min(60px, 100%), 1fr));
            grid-gap: 1rem;
            height: 8rem;
            margin-right: 10rem;
            padding-top: 3rem;
          }
          .socials-title {
            max-width: 20rem;
            margin-right: 0rem;
          }
          .footer_1 {
            display: flex;
            justify-content: space-evenly;
            max-width: 100%;
            margin: auto 2rem;
          }
          .footer_2 {
      
            background-color: #203c88;
          }
          .footer_3 {
            background-color: #1d357a;
            font-size: .8rem;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
           }
        }

        @media (min-width: 700px) and (max-width: 1000px)  {
          .instructions {
            font-size: .7rem;
          }
          
          .carousel-container {
              padding-bottom: 8rem;
              max-width: 80%;
              margin: auto;
            }
          .section_1_large_bg {
            position: absolute;
            max-width: 23rem;
             right: 5rem;
            top: -18rem;
            z-index: 1; 
           }
          
          .section_1 {
            height: 75vh;
            border-radius: 0 0 200px 200px;
            background-color: #224099;
            background-size: 100% 800px;
            /* margin: auto; */
            /* width: 100%; */
            color: #F1F1F2;
          }
       
          .section_1_bg{
            display: none;
            position: absolute;
             max-width: 18rem;
            left: 33rem;
            top: 5rem;
            z-index: 1; 
          }
          .mainContents {
            display: block;
            width: 40%;
            font-weight: 600;
            font-size: .5rem;
            line-height: 1rem;
            left: 5rem;
          }
          
          .mainTitle{
            font-size: 1.7rem;
            max-width: 15rem;
            line-height: 1.8rem;
            margin-bottom: 20px;
            margin-top: 20px;
          } 
         
         
        
       
          .mainContentsText_1 {
            margin-bottom: 20px;
            font-size: 0.8rem;
          }
        
          main {
            width: 100%;
            margin: auto;
            overflow: visible;
          }
          .section_2_imageAside {
            max-width: 16rem;
            font-size: .8rem;
            top: 0rem;
          }    
          .section_2_img{
            margin-top: 40px;
            max-width: 22rem;
            margin-bottom: 30px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            bottom: 7rem;
           }
          
          .section_2 {
            top: 2rem;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            margin-bottom: 2rem;
            position: relative;
          }
          .section_2_button {
            margin-top: 1rem;
          }
          .section_3_imageAside {
            width: 25rem;
            max-width: 22rem;
            bottom: 7rem;
          }    
         
          .section_3_img{
            margin-top: 40px;
            width: 25rem;
             transform: translateX(1.6rem);
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            bottom: 4rem;
           }
          
          .section_3 {
            margin: auto;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 80%;
            bottom: 3rem;
            position: relative;
            margin-top: 9rem;
          }
        
        
        
          .section_2 {
            width: 90%;
            margin: auto;
            display: block;
            margin-bottom: 80px;
            position: relative;
            bottom: 70px;
            /* transform: translateY(-100px); */
          }
          .section_2_img {
            width: 100%;
            margin-bottom: 50px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
           }

          
          .appContainer {
            overflow: hidden;
          }
          
          
          
         .section-header {
           font-size: 3rem;
         }
         
          .section_2 {
            margin: auto;
            display: flex;
            justify-content: space-between;
          }
          .headerContentContainer {
            display: flex;
            justify-content: space-around;
          }
      
         
          
           
          
          .pillText_1 {
            margin-top: 20px;
            
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
          
          .team-header-container{
            max-width: 500px;
            margin-bottom: 4rem;
          }
     
          .section_2_img{
            margin-top: 40px;
            width: 100%;
            /* transform: translateY(-100px); */
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
          }

          .pill_bg_image {
            position: absolute; 
            bottom: 0rem;
            top: 5rem;
            right: -7rem;
            max-width: 20rem;
            z-index: 2;
          }
          .label-options {
            text-align: center;
          }
          .versionLabel {
            transform: scale(1.2, 1.2);
            float: right;
            margin-top: 5px;
            width: 30px;
            height: 15px;
            color: #F1F1F2;
            padding-top: 1px;
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
            transform: scale(.8, .8); 
            box-sizing: content-box;
            margin-right: 10px;
            display: inline-block;
            padding: 15px;
            font-size: 1.2rem;
            font-weight: 900;
            color: black;
            width: 110px;
            height: 110px;
            background-color: #EFF0EB;
            border-radius: 20px;
            margin-bottom: 8px;
            top: 20px;
          }
          .pill_1_button {
            margin-top: 3rem;
            bottom: 50px;
            float: left;
          } 
        
          .pillText_1 {
            bottom: 20px;
            width: 100%;
          }
          .pill_section_2_img {
            transform: translateX(-15px);
            width: 100%;
            display: block;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            z-index: 3;

          }
          .purplePill {
            display: flex;
             margin-bottom: 60px;
            justify-content: space-between;
            color: #F1F1F2;
             padding-left: 40px;
            padding-right: 40px;
            width: 95%;
            background-color: #9F66A9;
            border-radius: 150px;
          }
          .pillText_1 {
            margin-top: 2rem;
            /* line-height: 1.3rem; */
            max-width: 18rem;
          }
          .purplePill_1{
            width: 100%;
            margin-left: 30px;
           }
          
         
          
          .pillContainer {
            display: flex;
            align-items: flex-end; 
            justify-content: flex-start;
          }
          .team-header-container {
            margin-left: 6rem;
          }
          .team {
            max-width: 80%;
            margin: auto;
          }

          .partners-title {
            margin-bottom: 50px;
          }
          .exchanges-title {
            margin-bottom: 50px;
          }
          footer {
            justify-content: flex-end;
            display: flex;
      
            flex-direction: column;
            margin-top: 6rem;
            color: #F1F1F2;
            background-color: #224099;
            height: 70vh;
            max-height: 800px;
            border-radius: 200px 200px 0 0;
            position: static;
            width: 100%;
          } 
          .socials-grid {
            max-width: 10rem;
            top: 0rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(min(17px, 100%), 1fr));
            grid-gap: 1rem;
            margin: auto;
          }
          .socials-title {
            max-width: 15rem;
            
          }
          .footer_1 {
            display: flex;
            justify-content: center;
            max-width: 100%;
            margin: auto 2rem;
            padding-right: 3rem;
            padding-left: 3rem;
          }
          .footer_2 {
      
            background-color: #203c88;
          }
          .footer_3 {
            background-color: #1d357a;
            font-size: .8rem;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
           }
        }
        @media (max-width: 700px) {
          
          .pill_bg_image {
            position: absolute; 
            bottom: 0rem;
            top: 20rem;
            right: -7rem;
            max-width: 20rem;
            z-index: 1;
          }
                  
          .team {
            transform: translateX(-11px);
          }
          .grid {
            width: 60%;
            margin: auto;
            display: grid;
            min-width: 330px;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-gap: 1.5rem;
      
          }
          .team-header-container{
            min-width: 500px;
            margin-bottom: 2rem;
            text-align: center;
          }
       
       
          .versionLabel {
            float: right;
            margin-top: 5px;
            width: 30px;
            height: 15px;
            color: #F1F1F2;
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
            margin-bottom: 8px;
          }
          .pill_1_button {
            margin-top: 10px;
            bottom: 50px;
          } 
        
          .pillText_1 {
            bottom: 20px;
          }
          .purplePill {
            margin-bottom: 60px;
            justify-content: space-evenly;
            color: #F1F1F2;
            padding-top: 40px;
            padding-bottom: 50px;
            width: 90%;
            background-color: #9F66A9;
            border-radius: 25px;
          }
          .pillText_1 {
            margin-top: 0px;
            /* line-height: 1.3rem; */
          }
          .purplePill_1{
            margin: auto;
            width: 90%;
          }
          .purplePill_2{
            margin: auto;
            width: 90%;
          }
          .pill_section_2_img {
            width: 90%;
            display: block;
            margin: auto;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            z-index: 3;
   
          }

          .pillContainer {
            display: flex;
            align-items: flex-end; 
            justify-content: flex-start;
          }
          .section_1_bg{
            position: none;
            display: none;
            width: 500px;
            left: 200px;
            top: 400px;
          }
          .mainContents {
            display: inline-block;
            padding-top: 15px;
            padding-left: 20px;
            padding-right: 15px;
            width: 100%;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3;
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
            color: #F1F1F2;
            margin-bottom: 3rem;
          }
          .mainContentsText_1 {
            margin-bottom: 20px;
          }

          .section_2 {
            width: 90%;
            margin: auto;
            display: block;
            margin-bottom: 80px;
            position: relative;
            bottom: 70px;
           }
          .section_2_img {
            width: 100%;
            margin-bottom: 50px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
          }

          .section_3 {
            width: 90%;
            display: block;
            position: relative;
            margin: auto;
            bottom: 100px;
          }
          .section_3_img{
            margin-top: 40px;
            width: 100%;
            margin-bottom: 30px;
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
            z-index: 3;
          }
          .section_3_imageAside {
            width: 100%;
          }         
          .mainTitle{
            font-size: 2rem;
            line-height: 2rem;
            margin-bottom: 20px;
            margin-top: 20px;
          }
          .vertical-reverse {
            display: flex;
            flex-direction: column-reverse;
          }
          .labelTitle {
            margin-bottom: 50px;           
          }
          .labelTitle h4 {
            font-size: 2.5rem;
            line-height: 2rem;
            font-weight: 900;
          }
          .labelTitle h5 {
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 900;
          }       
          p {
            font-weight: 900;
          }
          .section_3_imageAside p {
            margin: 15px 0;
          }
          .button {
            font-weight: 900;
          }
          
          footer {
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            margin-top: 6rem;
            color: #F1F1F2;
            background-color: #224099;
            height: 70vh;
            max-height: 800px;
            border-radius: 50px 50px 0 0;
            position: static;
            width: 100%;
          } 
          .socials-grid {
            max-width: 7rem;
            top: 0rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(min(17px, 100%), 1fr));
            grid-gap: 1rem;
            margin: auto;
          }
          .socials-title {
            width: 12rem;
          }
          .footer_1 {
            display: flex;
            justify-content: center;
            max-width: 100%;
            margin: auto 1rem;
          }
          .footer_2 {
      
            background-color: #203c88;
          }
          .footer_3 {
            background-color: #1d357a;
            font-size: .8rem;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
           }
           .carousel-container {
              padding-bottom: 7rem;
              max-width: 80%;
              margin: auto;
            }
            .instructions {
              font-size: 1rem;
            }
          .mainContentsText_1, 
          .section_2_imageAside,  {
            font-size: 1rem;
          }
         
      `}</style>
    </div>
  )
}

