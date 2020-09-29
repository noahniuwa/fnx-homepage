import Head from 'next/head';
import Navbar from '../components/Navbar'
import TeamMember from '../components/TeamMember'


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
          <div className="headerContentContainer">
            <div className="mainContents">  
              <h1 className="mainTitle">
              FinNexus Options v1.0
              </h1>
              <div className="mainContentsText_1">
                FinNexus Protocol For Options is a pioneering multi-blockchain decentralized options protocol based on the innovative MASP (Multi-Asset Single Pool) liquidity model. 
              </div>
              <p className="instructions">Join our email list to get the latest news about FinNexus's upcoming decentralized derivative products. ...</p>
              <button className="is-rounded button is-danger">Sign-up</button>
       
            </div>
            <div className="mainAside">
              <img className="section_1_large_bg" src="top_illustration.svg"/>
            </div>
          </div>  
          <img className="section_1_bg" src="bgshape_01.svg"/>
        </header>

        <div className="section_2"> 
          <img className="section_2_img" src="FNX_liquidity.svg"/>
          <div className="subSectionContainer">
            <div className="section_2_content">
              <h3 className="section-header">Earn Now!</h3>
              <p>With FPO v1.0, liquidity providers earn attractive rewards for trustlessly locking their assets in the the MASP liquidity pool.</p>
              <div className="float-container">
                <button className="is-rounded float-right button is-danger">Provide Liquidity</button>
              </div>
            </div>          
          </div>
        </div>

        <div className="section_3"> 
          <img className="section_3_img" src="FNX_options.svg"/>
          <div className="section_3_imageAside">
            <h3 className="section-header"> Hedge & Leverage</h3>
            <p>FPO's wide variety of options makes it easy to find just the solution for your investment needs, and our MASP liquidity pool ensures you never need to worry if there's enough liquidity.</p>
            <button className="is-rounded button is-danger">Buy FPO Options</button>
          </div>
        </div>
        
     

        <div className="purplePill">
          <div className="purplePill_1">
            <div className="pillContainer">
              <div className="squareLabel">
                <img className="square_label_img" src="blue_FNX_logo.svg"/>
                <p>Options</p>
                <div className="versionLabel">
                  v0.1
                </div>
              </div>
              <div className="labelTitle">
                <h4>FPO</h4>
                <h5>v0.1</h5>
              </div>
            </div>
              <div className="vertical-reverse">
                <p className="pillText_1">FinNexus Protocol For options FPO v0.1 is the first decentralized options product launched by FinNexus. It allows sophisticated individual investors writers to write their own specific options through the platform.</p>
                <div className="float-container">
                  <button className="pill_1_button float-right is-rounded button is-warning">Write Options</button>
                </div>
              </div>
              </div>
            <img className="pill_section_2_img" src="earn.svg"/>
        </div>

        <div className="p_e_container">
          <div className="partners">
          </div>
          <div className="exchanges">
          </div>
        </div>
        
        <div className="team-header-container">
          <h3 className="section-header">Team</h3>
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

      <footer>
        <div className="footer_1">
          <p className="socials-title">
            <span className="big-text">Join</span> the FinNexus community <strong>NOW</strong>
          </p>
          <div className="socials">
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
      strong {
        color: inherit;
      }
      .big-text {
        font-size: 2.5rem;
        font-weight: 900;
      }
      .socials-title {
        font-weight: 300;
        width: 70%;
        margin: auto;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.5rem;
      }
      .socials {
        width: 70%;
        margin: auto;
        margin-bottom: 2.5rem;
      }
      .social-logo {
        margin: 7px;

        fill: white;
        color: white;
        filter: invert(100);
        width: 2.7rem;
      }
      .logo {
        margin: auto;
        display: block;
    
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .float-container {
        height: 3rem;
      }
        .purplePill {
          width: 95%;
          margin: auto;
        }
        .team-header-container{
          max-width: 1000px;
          margin-bottom: 4rem;
        }
        *  
        {
          box-sizing: border-box;
          position: relative;
        }
    
          
        }
        .team {
          height: 500px;
          margin: auto;
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
            font-size: .7rem;
            font-weight: 400;
            font-style: italic;
          }
          h1 {
            font-size: 3rem;
            font-weight: 900;
            line-height: 3.5rem;
          }
          .section-header {
            color: #9F66A9;
            font-size: 4rem;
            font-weight: 900;
            line-height: 3.7rem;
            margin-bottom: 2rem;
          }
          .section_1_large_bg {
            display: block;
          }
          p, div {
            
          }
          html,
          body {
            font-weight: 900;
            overflow:   hidden;
            font-size: 200% !important;
            padding: 0;
            width: 10st0%;
            height: 100%;
            margin: 0;
            /* font-family: 'Open Sans Condensed', sans-serif; */
            font-weight: 600;
            overflow: hidden;
            background-color: #F1F1F2; 

          }
          ::-webkit-scrollbar {
            display: none;
            width: 0px;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
         
                  
          .appContainer,
            main {
              position: relative;
              overflow: hidden;
            }
          .sizeRestrictor{
            overflow: hidden;
            max-width: 80%;
            margin: auto; */
          }
        @media (min-width: 1000px) and (max-width: 1300px){
          ::-webkit-scrollbar {
            display: none;
            width: 0px;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
          .team-header-container{
            max-width: 700px;
            margin-bottom: 4rem;
          }
          .sizeRestrictor{
            max-width: 1000px;
          }
          .section_1 {
            color: #F1F1F2;
            padding-left: 100px;
            padding-right: 100px;
            color: #F1F1F2;
            background-color: #224099;
            height: 90vh;
            max-height: 800px;
            margin: auto;
            border-radius: 0 0 250px 250px;
          } 
          .section_1_bg {
            display: none;
          }
         
        }

        @media (min-width: 700px) and (max-width: 1000px)   {
          .team-header-container{
            max-width: 500px;
            margin-bottom: 4rem;
          }
          .sizeRestrictor{
            max-width: 700px;
          }
          main {
            max-width: 100%;
          }
          
          .section_1_bg{
            position: absolute;
            display: block;
            width: 500px;
            left: 200px;
            top: 400px;
          }
          .appContainer {
            overflow: hidden;
          }
          
          
          .mainContentsText_1 {
            margin-bottom: 40px;
          }
          .section_1 {
            color: #F1F1F2;
            padding-left: 100px;
            padding-right: 100px;
            color: #F1F1F2;
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
      
          .mainContents {
            width: 35%;
            font-size: 1rem;
          }
          .partners {
            /* transform: translateY(-40px); */

            color: #F1F1F2;
            width: 100%;
            height: 450px;
            background-color: #A1D8D9;
            border-radius: 300px;
          }
          .p_e_container {
            margin-top: 200px;
            color: #F1F1F2;
            width: 100%;
            height: 750px;
            background-color: #6E308B;
            border-radius: 200px 200px 200px 200px;
          }
          
          .pillText_1 {
            margin-top: 20px;
         
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
          
          
     
          .section_2_img{
            margin-top: 40px;
            width: 100%;
            /* transform: translateY(-100px); */
            filter: drop-shadow(0px 10px 15px rgba(9,9,9,0.3));
          }
          
          main {
            width: 100%;
            margin: auto;
            /* overflow: hidden; */
          }
          
        }
        @media (max-width: 700px) {
          .team {
            transform: translateX(-11px);
          }
          .grid {
            width: 60%;
            margin: auto;
            display: grid;
            min-width: 330px;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            /* This is better for small screens, once min() is better supported */
            /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
            grid-gap: 1.5rem;
            /* This is the standardized property now, but has slightly less support */
            /* gap: 1rem */
          }
          .team-header-container{
            min-width: 500px;
            margin-bottom: 2rem;
            margin-left: 2rem;
            margin-top: 6rem;
          }
          .section_1_large_bg {
            display: none;
          }
          
          .sizeRestrictor {
            max-width: 700px;
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
          .pill_section_2_img {
            width: 85%;
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
            line-height: 1.3rem;
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
          }
          
          .pillContainer {
            display: flex;
            align-items: flex-end; 
            justify-content: flex-start;
          }
          .section_1_bg{
            position: absolute;
            display: block;
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
            /* transform: translateY(-100px); */
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

           }
          .section_3_imageAside {
            width: 100%;
          }
         
          .mainTitle{
            font-size: 3rem;
            line-height: 4rem;
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
          .footer_1 {
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
          footer {
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            margin-top: 4rem;
            color: #F1F1F2;
            background-color: #224099;
            height: 70vh;
            max-height: 800px;
            border-radius: 25px 25px 0 0;
          } 
      `}</style>
    </div>
  )
}
