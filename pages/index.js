import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 

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
              <img className="section_1_large_bg" src="top_illustration.svg" />
            </div>
           
       
          </header>

          <div className="section_2">
            <img className="section_2_img" src="earn.svg" />
              <div className="section_2_imageAside">
                <h3 className="section-2-header section-header">Earn Now!</h3>
                <p className="section-2-text">With FPO v1.0, liquidity providers earn attractive rewards for trustlessly locking their assets in the the MASP liquidity pool.</p>
                <div className="float-container section_2_button">
                  <button className="is-rounded float-left button is-danger">Provide Liquidity</button>
                </div>
              </div>
          </div>

          <div className="section_3">
            <img className="section_3_img" src="FNX_options.svg" />
            <div className="section_3_imageAside">
              <h3 className="section-3-header section-header"> Hedge & Leverage</h3>
              <p className="section-3-text">FPO's wide variety of options makes it easy to find just the solution for your investment needs, and our MASP liquidity pool ensures you never need to worry if there's enough liquidity.</p>
              <button className="is-rounded button section_ is-danger">Buy FPO Options</button>
            </div>
          </div>

          
        </main>
        
        <Footer></Footer>

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
           
        main {
          overflow: visible: 
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
        .team-member-container{
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: auto;
          flex-wrap: wrap;
        }
        .team-header-container {
          /* min-width: 500px; */
          margin-bottom: 0rem;
          text-align: center
        }
        .team {
          /* width: 1000px; */
          justify-content: center;
          margin: auto;
          margin-bottom: 100px;
          padding: 0px 30px;
          padding-bottom: 100px;
          display: flex;
          flex-wrap: wrap;
          background-color: rgb(208, 180, 213);
          border-radius: 50px;
          border: 15px solid rgba(159, 102, 169, 0.08);
        }
        .team_bg_image {
          position: absolute;
          bottom: 500px;
     
          right: -500px;
          width: 800px;
          z-index: -10;
        }
        .team-section {
          bottom: 150px;
          width: 100%;
          justify-content: center;
          margin: auto;
          /* padding-bottom: 80px; */
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
          /* width: 750px; */
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
          width: 80%;
          margin: 1em 0;
          font-size: 1.3em;
        }
        .section_3_img {  
          filter: drop-shadow(0px 5px 8px rgba(9,9,9,0.2));
          width: 650px;
          transform: translateY(-50px);
          z-index: 10;
        }
        .section-3-header {
          line-height: 1em;
          font-weight: 900;
          width: 90%;
          font-size: 40px;
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
          width: 80%;
        }
        .section_2_img {  
          filter: drop-shadow(0px 5px 8px rgba(9,9,9,0.2));
        }
        .section-2-header {
          line-height: 1em;
          font-weight: 900;
          width: 90%;
          font-size: 40px;

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
           
          width: 90%;
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
          width: 600px;
          right: -50px;
          top: 50px;
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
          
          .section_1_container {
            width: 1200px;
            margin: auto;
            overflow: visible;
            height: 300px;
          }
          .section_1 {
            height: 700px;  
            min-width: 1600px;
          }
          
          .section-23-header {
           font-size: 40px;
          }
          .section_2_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 650px;
            left: -80px;
            bottom: 200px;
          }
          .team-member-container{
           width: 100%;
          }
          .team  {
            width: 100%;
          }
          .team-size-restrictor {
            width: 1000px;
          }
        }

        @media (min-width: 1200px) and (max-width: 1700px) {
          
          .section_1 {
            height: 500px;  
            min-width: 1200px;
            width: 90%;
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
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 450px;
            left: -80px;
            bottom: 200px;
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
        
          
          footer {
            max-width: 1200px;
            width: 90%;
          }
          .footer_1 {
            margin-top: auto;
            margin-bottom: 3em; 
           } 
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
          }   
        }

        @media (min-width: 1024px) and (max-width: 1200px) {
          .section_1 {
            height: 500px;  
            width: 90%;
            min-width: 800px;
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
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 450px;
            left: -80px;
            bottom: 200px;
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
            left: 50px;
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

        @media (max-width: 1024px) {
          .partners-title {
            width: 80%;
            font-size: 40px;
          }
          .exchanges-title {
            max-width: 80%;
            font-size: 40px;
          }  
          .section_1_container {
            width: 90%;
            min-width: 360px;
            margin: auto;
            overflow: visible;
            height: 300px;
          }
          
          .section_1 {
            border-radius: 0 0 50px 50px;
            height: 650px;
            width: 100%;
          }
          .mainContents {
             width: 100%;  
            margin: auto;
          }
          .mainTitle {
            line-height: 50px; 
            font-size: 40px;
          }
          .instructions {
            font-size: 18px;
          }
          .mainContentsText_1 {
            font-size: 22px;
          }
          .section_1_large_bg {
            width: 400px;
            right: -15rem;
            top: 1rem; 
            display: none;
          }
         
          .section_2_imageAside {
            width: 100%;
          }
          .section-2-text {
            font-size: 18px;
          }
          .section_2_img {  
            width: 100%; 
          }
          .section-2-header {
            font-size: 35px;
            margin-top: 30px;
          }
          .section_2 {
            justify-content: center;
            width: 80%;
            flex-direction: column;
            align-items: center;
            margin: auto;
            margin-bottom: 50px;
            top: -30px;
          }
          
          .section_3_imageAside {
            width: 100%;
            bottom: 0;
            margin: auto;
          }
          
          .section_3_img {  
            width: 100%;    
          }
          .section-3-header {
            font-size: 35px;
          }
          p {
            margin: 0;
          }
          .section_3 {
            justify-content: center;
            width: 80%;
            flex-direction: column;
            align-items: center;
            margin: auto;
            margin-bottom: 50px;
            top: -30px;;
          }
          
           
         
          
          
          
          
        }
      `}</style>
    </div>
  )
}

