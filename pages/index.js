import Head from 'next/head';
import Navbar from '../components/Navbar'
import Section_1 from '../components/Section_1'

import Footer from '../components/Footer'
import Link from 'next/link'

 

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
          <Section_1>
            <div className="mainContents">
              <div className="main_text_container">
                <h1 className="mainTitle">
                  FinNexus Options v1.0
                </h1>
                <div className="mainContentsText_1">
                  FinNexus Protocol For Options is a pioneering multi-blockchain decentralized options protocol based on the innovative MASP (Multi-Asset Single Pool) liquidity model.
                </div>
                <div className="instructions">Join our email list to get the latest news about FinNexus's upcoming decentralized derivative products.</div>
                <button className="is-rounded button sign-up is-danger">Sign-up</button>
                <img className="section_1_large_bg" src="top_illustration.svg" />
              </div>
            </div>
          </Section_1>
          
          <div className="section_2">
            <img className="section_2_img" src="earn.svg" />
              <div className="section_2_imageAside">
                <h3 className="section-2-header section-header">Earn Now!</h3>
                <p className="section-2-text">With FPO v1.0, liquidity providers earn attractive rewards for trustlessly locking their assets in the the MASP liquidity pool.</p>
                <div className="float-container section_2_button">
                <Link href="https://options-v2-testnet.vercel.app/#/">
                  <a  target="_blank">
                    <button className="is-rounded float-left section-2-button button is-danger">Provide Liquidity</button>
                  </a>
                </Link>
                </div>
              </div>
          </div>

          <div className="section_3">
            <img className="section_3_img" src="FNX_options.svg" />
            <div className="section_3_imageAside">
              <h3 className="section-3-header section-header"> Hedge & Leverage</h3>
              <p className="section-3-text">FPO's wide variety of options makes it easy to find just the solution for your investment needs, and our MASP liquidity pool ensures you never need to worry if there's enough liquidity.</p>
              <Link href="https://options-v2-testnet.vercel.app/#/">
                  <a  target="_blank">
                    <button className="is-rounded float-left section-2-button button is-danger">Buy FPO Options</button>
                  </a>
                </Link>
             </div>
          </div>

          
        </main>
        
        <Footer></Footer>

      </div>

      <style jsx>{`
        
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
          position: relative;
        }
        .float-right {
          float: right;
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
          scrollbar-width: none;
        }
        .appContainer, main {
          position: relative;
          overflow: hidden;
        }
        .section_3_imageAside {
          width: 500px; 
        }
        .section-3-text {
          width: 100%;
          margin: 1em 0;
          font-size: 1.3em;
          line-height: 25px;
           
        }
        .section_3_img {  
          filter: drop-shadow(0px 5px 8px rgba(9,9,9,0.2));
          width: 650px;
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
          position: relative;
        }
       .section_2_imageAside {
          width: 500px; 
        } 
        .section-2-text {
          margin: 1em 0;
          font-size: 1.3em;
          width: 100%;
          line-height: 25px;
         
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
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          position: relative;
        }
        main {
          width: 100%;
          margin: auto;
          overflow: visible;
        }
        .appContainer {
          overflow: hidden;
        } 

        .mainTitle {
          font-weight: 700;
        }
        .instructions {
          font-style: italic;
        }

        @media (min-width: 1700px) {
          .main_text_container {
            width: 650px;
          }
          .mainContentsText_1 {
            font-size: 20px;
            margin: 20px 0;
          }
          .mainContents {
            margin: auto;
            width: 1200px;
            margin-top: 40px;
          }
          .mainTitle {
            line-height: 40px; 
            font-size: 40px;
            margin-top: 90px;
          }
          .instructions {
            font-size: 16px;
            font-weight: 400;
            font-style: italic;
            line-height: 16px;
            margin-bottom: 20px;
          }
          .section_1_large_bg {
            width: 500px;
            left: 700px;
            bottom: 280px; 
          }
          
          .section_2 {
            width: 1200px;
          }
          .section_3 {
            width: 1200px;
          }
          .section-2-text {
            margin: 15px 0;
            font-size: 1.3em;
            width: 100%;
            line-height: 25px;
          }
          .section-2-header {
           font-size: 40px;
          }
          .section-3-header {
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
          
          .main_text_container {
            padding-left: 30px;
            width: 500px;
          }
          .mainContentsText_1 {
            font-size: 20px;
            margin: 20px 0;
          }
          .mainContents {
            margin: auto;
            width: 1000px;
            margin-top: 20px;
           }
          .mainTitle {
            line-height: 40px; 
            font-size: 40px;
            margin-top: 50px;
          }
          .instructions {
            font-size: 16px;
            font-weight: 400;
            font-style: italic;
            line-height: 16px;
            margin-bottom: 20px;
          }
          .section_1_large_bg {
            width: 500px;
            left: 550px;
            bottom: 330px; 
          }
         
          .section_3 {
            width: 1000px;
            margin: auto;
            display: flex;
            justify-content: center;
          }
            
          .section_2 {
            width: 1000px;
            margin: auto;
          }
          .section-2-header {
           font-size: 40px;
          }
          .section-2-text {
            margin: 15px 0;
            font-size: 1.3em;
            width: 100%;
            line-height: 25px;
          }
          .section-3-text {
            margin: 15px 0;
            font-size: 1.3em;
            width: 90%;
            line-height: 25px;
          }
          .section-3-header {
           font-size: 40px;
          }
          .section_2_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 45%;
            bottom: 100px;
           }
           .section_2_imageAside {
            width: 50%; 
           }
           .section_3_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 45%;
          }
          .section_3_imageAside {
            width: 50%; 
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

        @media (min-width: 700px) and (max-width: 1200px) {
          .main_text_container {
            padding-left: 30px;
            width: 55%;
          }
          .mainContentsText_1 {
            font-size: 20px;
            margin: 20px 0;
            line-height: 25px;
          }
          .mainContents {
            margin: auto;
            width: 700px;
            margin: 20px auto;
           }
          .mainTitle {
            line-height: 40px; 
            font-size: 38px;
            margin-top: 50px;
            width: 300px;
            white-space: nowrap;
          }
          .instructions {
            font-size: 16px;
            font-weight: 400;
            font-style: italic;
            line-height: 16px;
            margin-bottom: 20px;
          }
          .section_1_large_bg {
            width: 400px;
            left: 400px;
            bottom: 250px; 
          }
         
          .section_3 {
            width: 700px;
            margin: 100px auto;
            display: flex;
            justify-content: center;
          }
          .section-2-text {
            margin: 15px 0;
           
            font-size: 1.3em;
            width: 100%;
            line-height: 25px;
          }
          .section-2-button {

          }
          .section_2 {
            width: 700px;
            margin: auto;
          }
          .section-2-header {
           font-size: 40px;
          }
          .section-3-header {
           font-size: 40px;
          }
          .section-3-text {
          
            margin: 15px 0;
            font-size: 1.3em;
            width: 100%;
            line-height: 25px;
          }
          .section_2_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 50%;
            bottom: 50px;
           }
           .section_2_imageAside {
            width: 50%; 
            margin: 0 30px;
            top: 20px;
           }
           .section_3_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 45%;
          }
          .section_3_imageAside {
            width: 50%; 
            margin: 0 30px;
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

        @media (max-width: 700px) {
          .mainContents {
            font-size: 16px;  
            line-height: 25px;
            display: block;
            margin: auto;
            width: 70%;
            min-width: 300px;
          }
          .partners-title {
            width: 80%;
            font-size: 40px;
          }
          .exchanges-title {
            max-width: 80%;
            font-size: 40px;
          }  
         
          .mainTitle {
            line-height: 50px; 
            font-size: 40px;
            margin-bottom: 15px;
            font-weight: 700;
            margin-top: 45px;
          }
          .instructions {
            font-size: 18px;
            margin: 15px 0;
            font-style: italic;
          }
          .mainContentsText_1 {
            font-size: 20px;
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
            margin-top: 20px;
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
            margin-top: 20px;
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

