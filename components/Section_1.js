import Navbar from './Navbar'

export default function Section_1(props) {
  
    return (
        <div>
         <header className="section_1">
            <Navbar />
            <div className="section_1_container"> 
              <div className="mainContents">
                 {props.children}
              </div>
            </div>
          </header>
        <style jsx>{` 
        /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

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
        h3 {
          margin: 0;
          padding: 0;
        }
        .section-header {
            color: #9F66A9;
            font-weight: 700;
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
          position: relative;
          font-family: 'Noto Sans', sans-serif;
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
          font-weight: 700;
          overflow: visible;
          padding: 0;
          width: 100%;
          margin: 0;
          background-color: #F1F1F2; 
          min-width: 360px;
        }
        ::-webkit-scrollbar {
          display: none;
          width: 0;
          -ms-overflow-style: none;
          scrollbar-width: none
        }
        .appContainer, main {
         
          overflow: hidden
        }
       
        .section_3_img {  
          -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                  filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
          
      
          z-index: 10;
        }
        
        
       

       
        /* .section_1_bg {
          display: none;
          position: absolute;
          max-width: 18rem;
          left: 33rem;
          top: 4rem;
          z-index: 1
        } */
        /* .mainTitle {
          margin-top: 1em;
          line-height: 1.2em; 
          font-weight: 700;
          width: 450px;
          font-size: 5em;
        } */
        
      
          
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
        
          
        .socials-title {
          font-size: 30px;
          width: 30%;
        }
        .social-logo {
          width: 40px;
          margin-right: 30px;
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
          .mainContentsText_1 {
            font-size: 20px;
            width: 500px;
  
          }
          .section_1_bg {
            display: block;
            position: relative;
            bottom: 100px;
            right: -600px;
            width: 1500px;
            z-index: 1;
            float: right;
          }
          .section_1_large_bg {
            width: 600px;
            right: -7rem;
            top: 2rem; 
          }
          .mainContents{
            width: 500px; 
          }
          .section_1_container {
            width: 1200px;
            margin: auto;
            margin-top: 80px;
            overflow: visible;
            height: 600px;
          }
          .section_1 {
            border-radius: 0 0 200px 200px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
             color: #F1F1F2;
            overflow: hidden;
            height: 800px;  
            width: 1400px;
            margin-bottom: 300px;
          }
         
        }

        @media (min-width: 1024px) and (max-width: 1700px) {
          .section_1_bg {
            display: block;
            position: relative;
            bottom: 100px;
            right: -400px;
            width: 1200px;
            z-index: 1;
            float: right;
            height: 500px;
          }
          .section_1 {
            border-radius: 0 0 200px 200px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
            margin-bottom: 200px;
            color: #F1F1F2;
            overflow: hidden;
            height: 700px;  
            width: 95%;
          }
          
          .mainContents {
            padding-left: 0px;
            width: 100%;  
                   
          }
          .mainContentsText_1 {
            font-size: 20px;
            width: 50%;
            max-width: 500px;
          }
          .section_1_container {
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            max-width: 1000px;
            margin-top: 80px;
            margin: auto;
            overflow: visible;
            height: 600px;
          }
          .section_1_large_bg {
            border: 1px solid red;
            position: absolute;
            width: 650px;
            right: 0rem;
            top: 0rem;
            z-index: 111;
            display: block
          }
        }

  

        @media (max-width: 1024px) {
          .mainContents {
            font-size: 16px;  
            line-height: 20px;
            display: block;
            margin-left: 20px;
            margin-right: 20px;
            margin: auto;
             
          }
          .section_1_large_bg {
            width: 500px;
            right: -15rem;
            top: 2rem; 
            display: none;
          }
          .mainContentsText_1 {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-size: 24px;
            line-height: 1.3;
            text-align: justify;
            text-justify: auto;
             
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
           }
          .mainTitle {
            line-height: 40px; 
            font-size: 45px;
            line-height: 50px;
            font-weight: 700;
            margin: auto;
          }
          
          .section_1 {
            border-radius: 0 0 50px 50px;
            height: 700px;
        
            border-radius: 0 0 50px 50px;
            background-color: #224099;
            background-size: 100% 800px;
            margin: auto;
            color: #F1F1F2;
            overflow: hidden;
          }
          .section_1_container {
            padding-top: 30px;
            width: 100%; 
            margin: auto;
            max-width: 500px; 
          }
          
          
        }
     
        `}</style>
      </div>
    )
  }
  
  