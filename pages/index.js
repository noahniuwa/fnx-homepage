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
            <div className="section_1_container"> 
              <div className="mainContents">
                <h1 className="mainTitle">
                  FinNexus Options v1.0
                </h1>
                <div className="mainContentsText_1">
                  FinNexus Protocol For Options is a pioneering multi-blockchain decentralized options protocol based on the innovative MASP (Multi-Asset Single Pool) liquidity model.
                </div>
                <p className="instructions em-1">Join our email list to get the latest news about FinNexus's upcoming decentralized derivative products.</p>
                <button className="is-rounded button sign-up is-danger">Sign-up</button>
              </div>
              <img className="section_1_bg" src="bgshape_01.svg" />
              <img className="section_1_large_bg" src="top_illustration.svg" />
            </div>
           
       
          </header>

          <div className="section_2">
            <img className="section_2_img" src="earn.svg" />
              <div className="section_2_imageAside">
                <h3 className="section-2-header em-3 section-header">Earn Now!</h3>
                <p className="section-2-text">With FPO v1.0, liquidity providers earn attractive rewards for trustlessly locking their assets in the the MASP liquidity pool.</p>
                <div className="float-container section_2_button">
                  <button className="is-rounded float-left button is-danger">Provide Liquidity</button>
                </div>
              </div>
          </div>

          <div className="section_3">
            <img className="section_3_img" src="FNX_options.svg" />
            <div className="section_3_imageAside">
              <h3 className="section-3-header section-header em-3"> Hedge & Leverage</h3>
              <p className="section-3-text">FPO's wide variety of options makes it easy to find just the solution for your investment needs, and our MASP liquidity pool ensures you never need to worry if there's enough liquidity.</p>
              <button className="is-rounded button section_ is-danger">Buy FPO Options</button>
            </div>
          </div>

          <div className="team-section">
            <div className="team-size-restrictor">
            <div className="team-header-container">
              <h3 className="section-header em-3 team-title">Team</h3>
            </div>
            <div className="team">
              <TeamMember name="Boris Yang" title="Founder & CEO" image="BorisYang.png" />
              <TeamMember name="Bob Chen" title="Co-founder & CTO" image="BobChen.png" />
              <TeamMember name="Ryan Tian" title="Financial Specialist" image="RyanTian.png" />
              <TeamMember name="Veerender Singh" title="Community Manager" image="VeerenderSingh.png" />
              <TeamMember name="Jack Tung" title="Legal Expert" image="JackTung.png" />
             </div>
            <div className="team-header-container">
              <h3 className="section-header em-3 team-title">Advisory</h3>
            </div>
            <div className="team">
              <TeamMember name="Nicholas Krapels" title="Strategy Advisor" image="NicholasKrapels.png" />
              <TeamMember name="Noah Maizels" title="Marketing Adviser" image="NoahMaizels.png" />
              <TeamMember name="Eason Zhang" title="FP of River Capital" image="EasonZhang.png" />
              <TeamMember name="Jack Lu" title="Wanchain Founder" image="JackLu.png" />
            </div>
            <img className="team_bg_image" src="bgshape_01.svg" />

            </div>
           
          </div>
          
        </main>
        <p className="partners-title em-3 sub-section-header">Partners</p>
        <div className="carousel-container">
          <PartnerCarousel />
        </div>
        <p className="exchanges-title em-3 sub-section-header">Exchanges</p>
        <div className="carousel-container">
          <ExchangesCarousel />
        </div>
        <footer>
          <div className="footer_1">
            <p className="socials-title">
              <span className="big-text">Join</span> the FinNexus community 
            </p>
            <div className="socials-grid">
              <a href="https://twitter.com/fin_nexus/">
                <img className="social-logo" src="/twitter.svg" alt="social-logo" />
              </a>
              <a href="https://t.me/FinNexusOfficial">
                <img className="social-logo" src="/telegram.svg" alt="social-logo" />
              </a>
              <a href="https://medium.com/finnexus/">
                <img className="social-logo" src="/medium.svg" alt="social-logo" />
              </a>
              <a href="https://www.linkedin.com/company/finnexus/">
                <img className="social-logo" src="/linkedin.svg" alt="social-logo" />
              </a>
              <a href="https://www.facebook.com/FinNexus/">
                <img className="social-logo" src="/facebook.svg" alt="social-logo" />
              </a>
              <a href="https://discord.gg/bCDMHN7">
                <img className="social-logo" src="/discord.svg" alt="social-logo" />
              </a>
              <a>
                <img className="social-logo" src="/wechat.svg" alt="social-logo" />
              </a>
              <a href="mailto:info@finnexus.io">
                <img className="social-logo" src="/email.svg" alt="social-logo" />
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
        .em-3 {
          font-size: 3em;
        }
        .em-2 {
          font-size: 2em;
        }
        .em-1 {
          font-size: 1em;
        }
        .em-4 {
          font-size: 4em;
        }
        .em-5 {
          font-size: 5em;
        }
        .section-header {
            color: #9F66A9;
          }
        .social-logo {
            -webkit-filter: invert(100);
                     filter: invert(100);
        }      
        main {
          overflow: visible;  
        }
        .float-left {
            float: left
        }
        strong {
            color: inherit
        }
        * {
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          position: relative
        }
        .float-right {
          float: right
        }
        .instructions {
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          margin-bottom: 1em;
        }
        .sub-section-header {
          color: #9F66A9;   
        }
        html, body {
          font-weight: 900;
          overflow: visible;
          padding: 0;
          width: 100%;
          margin: 0;
          background-color: #F1F1F2; 
        }
        ::-webkit-scrollbar {
          display: none;
          width: 0;
          -ms-overflow-style: none;
          scrollbar-width: none
        }
        .appContainer, main {
          position: relative;
          overflow: hidden
        }
        .carousel-container {
          padding-bottom: 3rem;
          max-width: 80%;
          margin: auto auto 5rem;
          width: 1200px;
          bottom: 2.5em;
        }
        .team {
          width: 1000px;
          justify-content: center;
          margin: auto;
          padding: 30px 30px;
          display: flex;
          flex-wrap: wrap;
          background-color: rgb(208, 180, 213);
          border-radius: 50px;
        }
        .team_bg_image {
          position: absolute;
          bottom: 5em;
          top: 5rem;
          right: -15rem;
          width: 50rem;
          z-index: -10;
        }
        .team-section {
          bottom: 200px;
          width: 100%;
          justify-content: center;
          margin: auto;
          padding-bottom: 80px;
          padding-top: 100px;
          padding-left: 100px;
          padding-right: 100px;
          display: flex;
          flex-wrap: wrap;
          background-color: rgba(159, 102, 169, 0.2);
          }
          .team-size-restrictor {
            max-width: 1920px;
          }
        .team-title {
          width: 750px;
          margin: 1em auto;
          font-weight: 900;
        }
        .partners-title {
          width: 1200px;
          margin: auto;
          bottom: 1em;
          margin-bottom: 1em;
          font-weight: 900;
        }
        .exchanges-title {
          width: 1200px;
          margin: auto;
          margin-top: 2em;
          margin-bottom: 1em;
          font-weight: 900;
          bottom: 1em;
        }
        .section_3_imageAside {
          width: 500px; 
        }
        .section-3-text {
          width: 90%;
          margin: 1em 0;
          font-size: 1.3em;
        }
        .section_3_img {  
          -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                  filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
          width: 650px;
          transform: translateY(-50px);
          z-index: 10;
        }
        .section-3-header {
          line-height: 1em;
          font-weight: 900;
          width: 90%;
        }
        .section_3 {
          margin: auto;
          margin-bottom: 100px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: reverse;
          -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          width: 1200px;
          position: relative
        }
        


        .section_2_imageAside {
          width: 500px; 
        }
        .section-2-text {
          margin: 1em 0;
          font-size: 1.3em;
        }
        .section_2_img {  
          -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                  filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
          width: 650px;
          left: -80px;
          bottom: 200px;
        }
        .section-2-header {
          line-height: 1em;
          font-weight: 900;
          width: 90%;
        }
        .section_2 {
          margin: auto;
          margin-top: 150px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-direction: row;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          width: 1200px;
          position: relative
        }
        .section_1_container {
          width: 1200px;
          margin: auto;
          overflow: visible;
          height: 300px;
        }
        .section_1 {
          height: 700px;
          border-radius: 0 0 200px 200px;
          background-color: #224099;
          background-size: 100% 800px;
          margin: auto;
          width: 95%;
          color: #F1F1F2;
          overflow: hidden;
        }
       
        .mainContents {
          display: inline-block;
          padding-top: 15px;
          padding-left: 20px;
          padding-right: 15px;
          width: 500px;
          line-height: 1.5;
        }

        .section_1_large_bg {
          position: absolute;
          width: 650px;
          right: -10rem;
          top: 1rem;
          z-index: 1
        }
        .section_1_bg {
          display: none;
          position: absolute;
          max-width: 18rem;
          left: 33rem;
          top: 4rem;
          z-index: 1
        }
        .mainTitle {
          margin-top: 0.5em;
          line-height: 4rem; 
          font-weight: 900;
          width: 300px;
          font-size: 3em;
        }
        .mainContentsText_1 {
          margin: 1.5em 0;
          font-size: 1.5em;
        }
        main {
          width: 100%;
          margin: auto;
          overflow: visible
        }
          
          
        .appContainer {
          overflow: hidden
        }
        .headerContentContainer {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          max-height: 10rem
        }
            
        h4 {
          font-weight: 900;
          margin: 0;
          padding: 0;
          line-height: 1.5rem
        }
        h5 {
          font-weight: 900;
          margin: 0;
          padding: 0
        }
          
          
        .socials-title {
          font-size: 30px;
          width: 30%;
        }
        .social-logo {
          width: 40px;
          margin-right: 20px;
        }
        .socials-grid {
          width: 30%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        footer {
          width: 1600px;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          color: #F1F1F2;
          background-color: #224099;
          height: 300px;
          overflow: hidden;
          border-radius: 300px 300px 0 0;
          position: static;
          margin: auto;
        }
        .footer_1 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-top: auto;
          margin-bottom: auto;
        }
        .footer_2 {
          text-align: center;
          background-color: #203c88
        }
        .footer_3 {
          background-color: #1d357a;
          text-align: center;
          padding-top: 5px;
          padding-bottom: 5px
        }


        @media (min-width: 1700px) {
         
        }

        @media (min-width: 1200px) and (max-width: 1700px) {
          /*
            Fonts:
              Main Title: font-size: 2.3em;
              Instructions: font-size: 0.9em;
              Main content: font-size: 1.1em;

          */
          .section_1 {
            height: 500px;  
          }
          .mainContents {
            padding-left: 120px;
            width: 700px;          }
          .mainTitle {
            line-height: 40px; 
            font-size: 40px;
          }
          .instructions {
            font-size: 16px;
          }
          .mainContentsText_1 {
            font-size: 20px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }
          .section_2_imageAside {
            width: 400px; 
            bottom: 50px;
          }
          .section-2-text {
            font-size: 1.1em;
          }
          .section_2_img {  
            width: 450px;    
          }
          .section-2-header {
            font-size: 40px;
          }
          .section_2 {
            justify-content: center;
            width: 1200px;
          }
          
          .section_3_imageAside {
            width: 400px; 
            bottom: 100px;
          }
          .section-3-text {
            font-size: 1.1em;
          }
          .section_3_img {  
            width: 450px;    
          }
          .section-3-header {
            font-size: 40px;
          }
          .section_3 {
            justify-content: center;
            width: 1200px;
          }
          .team-title {
            font-size: 40px;
          }
          .socials-title {
            font-size: 30px;
            width: 40%;
            bottom: 0.2em;
          }
          .social-logo {
            width: 30px;
            margin-right: 15px;
          }
          .socials-grid {
            width: 40%;
          }
          footer {
            width: 1100px;
          }
          .footer_1 {
            margin-top: auto;
            margin-bottom: 3em; 
          } 
          .partners-title {
            width: 80%;
            font-size: 40px;
          }
          .exchanges-title {
            max-width: 80%;
            font-size: 40px;
          }        
        }

        @media (min-width: 700px) and (max-width: 1200px) {
          .section_1 {
            height: 500px;  
            border-radius: 0 0 100px 100px;
          }
          .mainContents {
            padding-left: 50px;
            width: 400px;          
          }
          .mainTitle {
            line-height: 35px; 
            font-size: 40px;
          }
          

         

          
          .instructions {
            font-size: 14px;
          }
          .mainContentsText_1 {
            font-size: 18px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 27rem;
            top: 1rem; 
          }
          .section_2_imageAside {
            width: 400px; 
            bottom: 50px;
          }
          .section-2-text {
            font-size: 1.1em;
          }
          .section_2_img {  
            width: 450px;    
          }
          .section-2-header {
            font-size: 40px;
          }
          .section_2 {
            justify-content: center;
            width: 1200px;
          }
          
          .section_3_imageAside {
            width: 400px; 
            bottom: 100px;
          }
          .section-3-text {
            font-size: 1.1em;
          }
          .section_3_img {  
            width: 450px;    
          }
          .section-3-header {
            font-size: 40px;
          }
          .section_3 {
            justify-content: center;
            width: 1200px;
          }
          .team-title {
            font-size: 40px;
          }
          .socials-title {
            font-size: 30px;
            width: 40%;
            bottom: 0.2em;
          }
          .social-logo {
            width: 30px;
            margin-right: 15px;
          }
          .socials-grid {
            width: 40%;
          }
          footer {
            width: 1100px;
          }
          .footer_1 {
            margin-top: auto;
            margin-bottom: 3em; 
          } 
          .partners-title {
            width: 80%;
            font-size: 40px;
          }
          .exchanges-title {
            max-width: 80%;
            font-size: 40px;
          }     
        }

        @media (max-width:700px) {
          .social-logo {
            width: 100px;
          }
          .socials-grid {
            max-width: 800px;
            display: flex;
            margin: auto;
          }
          .team {
            width: 300px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            -webkit-transform: translateX(-11px);
                  -ms-transform: translateX(-11px);
                      transform: translateX(-11px)
          } 
            
           
        
            
            .team-header-container {
                min-width: 500px;
                margin-bottom: 2rem;
                text-align: center
            }
            .versionLabel {
                float: right;
                margin-top: 5px;
                width: 30px;
                height: 15px;
                color: #F1F1F2;
                background-color: #6E308B;
                
                text-align: center;
                border-radius: 10px
            }
            .square_label_img {
                width: 70%;
                margin: auto;
                display: block
            }
            .squareLabel {
                margin-right: 10px;
                display: inline-block;
                padding: 20px;
                
                font-weight: 900;
                color: #000;
                width: 110px;
                height: 110px;
                background-color: #EFF0EB;
                border-radius: 20px;
                margin-bottom: 8px
            }
           
            
          
            .section_1_bg {
                position: none;
                display: none;
                width: 500px;
                left: 200px;
                top: 400px
            }
           
            .section_1 {
                padding-left: 0;
                padding-right: 0;
                height: 600px;
                border-radius: 0 0 80px 80px;
                background-color: #224099;
                background-size: 100% 800px;
                margin: auto auto 3rem;
                width: 100%;
                color: #F1F1F2
            }
            .mainContentsText_1 {
                margin-bottom: 20px
            }
            .section_2 {
                width: 90%;
                margin: auto auto 80px;
                display: block;
                position: relative;
                bottom: 70px
            }
            .section_2_img {
                width: 100%;
                margin-bottom: 50px;
                -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                        filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3))
            }
            .section_3 {
                width: 90%;
                display: block;
                position: relative;
                margin: auto;
                bottom: 100px
            }
            .section_3_img {
                margin-top: 40px;
                width: 100%;
                margin-bottom: 30px;
                -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                        filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                z-index: 3
            }
            .section_3_imageAside {
                width: 100%
            }
            .mainTitle {
                
                line-height: 2rem;
                margin-bottom: 20px;
                margin-top: 20px
            }
            .vertical-reverse {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: reverse;
                -ms-flex-direction: column-reverse;
                flex-direction: column-reverse
            }
            .labelTitle {
                margin-bottom: 50px
            }
            .labelTitle h4 {
                
                line-height: 2rem;
                font-weight: 900
            }
            .labelTitle h5 {
                
                line-height: 2rem;
                font-weight: 900
            }
            p {
                font-weight: 900
            }
            .section_3_imageAside p {
                margin: 15px 0
            }
            .button {
                font-weight: 900
            }
            footer {
                -webkit-box-pack: end;
                -ms-flex-pack: end;
                justify-content: flex-end;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                margin-top: 3rem;
                color: #F1F1F2;
                background-color: #224099;
                height: 400px;
                max-height: 800px;
                border-radius: 50px 50px 0 0;
                position: static;
                width: 100%
            }
            
            .socials-title {
                
                padding-left: 1rem
            }
            .footer_2 {
                text-align: center;
                background-color: #203c88
            }
            .footer_3 {
                background-color: #1d357a;
                
                text-align: center;
                padding-top: 5px;
                padding-bottom: 5px
            }
            
          
         
            .partners-title {
              margin-top: 4rem;
              margin-left: 2rem
            }
            .exchanges-title {
              margin-left: 2rem;
            }
            .team-title {
              z-index: 100;
              margin-top: 3rem;
              float: left;
              margin-left: 3rem
            }
        }
      `}</style>
    </div>
  )
}

