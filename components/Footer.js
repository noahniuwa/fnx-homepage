 

export default function Footer() {
  
  return (
   
    <footer>
      <div className="footer_1">
        <p className="socials-title">
            <span className="big-text">Join</span> the FinNexus community 
        </p>
          <div className="socials-grid">
            <a className="social-link" href="https://twitter.com/fin_nexus/">
              <img className="social-logo" src="/twitter.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://t.me/FinNexusOfficial">
              <img className="social-logo" src="/telegram.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://medium.com/finnexus/">
              <img className="social-logo" src="/medium.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://www.linkedin.com/company/finnexus/">
              <img className="social-logo" src="/linkedin.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://www.facebook.com/FinNexus/">
              <img className="social-logo" src="/facebook.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://discord.gg/bCDMHN7">
              <img className="social-logo" src="/discord.svg" alt="social-logo" />
            </a>
            <a className="social-link wechat">
              <img className="social-logo" src="/wechat.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="mailto:info@finnexus.io">
              <img className="social-logo" src="/email.svg" alt="social-logo" />
            </a>
          </div>
      </div>
      <div className="footer_2">
        <img className="logo" src="/fnxLogo.svg" alt="FinNexus" width="150" height="100" />
      </div>
      <div className="footer_3">© 2020 FinNexus. All Rights Reserved.</div>
 
      <style jsx>{`
        
      /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

 
        
.social-logo {
            -webkit-filter: invert(100);
                     filter: invert(100);
        }      
      
       
        footer {
          width: 1400px;
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
             
             
          .socials-title {
            font-size: 24px;
            max-width: 600px;
            bottom: 0.2em;
            margin-right: 30px;
           }
          .socials-grid {
            max-width: 500px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            height: 80%;
            margin-left: 30px;
          }
          
          .social-logo {
            width: 30px;
            margin-right: 15px;
          }
         
          footer {
            max-width: 1200px;
            width: 90%;
          }
          .footer_1 {
            margin-top: auto;
            margin-bottom: 3em; 
           } 
          
        
        }

        @media (min-width: 1024px) and (max-width: 1700px) {
          
           
          .socials-title {
            font-size: 24px;
            width: 80%;
            max-width: 200px;
            bottom: 0.2em;
            left: 50px;
            margin-right: 40px;
          }
          .socials-grid {
            width: 80%;
            max-width: 200px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            margin-left: 40px;
          }
          
          .social-logo {
            width: 30px;
            margin-right: 15px;
          }
         
          footer {
            max-width: 1200px;
            width: 90%;
          }
          .footer_1 {
            margin-top: auto;
            margin-bottom: 3em; 
           } 
          
        }

  

        @media (max-width: 1024px) {
           
         
          .social-link{
            height: 50px;
            display: block;
          }
          .social-logo {
            width: 30px;
            margin: 10px 10px;
          }
          
          .socials-title {
            font-size: 35px;
            width: 80%;
            max-width: 300px;
           
            margin: auto;
            text-align: center;
            margin-bottom: 40px;
          }
          .socials-grid {
            width: 80%;
            max-width: 200px;
            margin: auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            height: 150px;
          }
          footer {
            width: 100%;
            height: 550px;
            border-radius: 50px 50px 0 0;
          }
          .footer_1 {
            width: 100%;
            padding-bottom: 0px;
            margin: auto;
            margin-top: auto;
            margin-bottom: 3em; 
            -webkit-box-pack: center; 
                -ms-flex-pack: center; 
                    justify-content: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
          } 
           
        }
      `}</style>
    </footer>
  )
}
