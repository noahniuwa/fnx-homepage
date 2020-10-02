import Footer from '../components/Footer'
import Section_1 from '../components/Section_1'
import TeamMember from '../components/TeamMember'
import PartnerCarousel from '../components/PartnerCarousel'
import ExchangesCarousel from '../components/ExchangesCarousel'



export default function Home() {
  return (
    <div className="appContainer">
      <div className="sizeRestrictor">
        <main>
          <Section_1>
            <div className="main-contents">
              <h1 className="main-title">
                About FinNexus...
              </h1>
              <div className="main-aside">
                <p className="section-2-text"> <em><span className="section-2-opener">Redefining finance is </span></em>
                <span  className="section-2-closer">FinNexus's founding mission. The project was initiated by a group of blockchain industry veterans in 2019 with a focus on offerring new DeFi products that offer greater diversity, convenience, and value to investors.</span> </p>
              </div>
            </div>
            <img className="about_bg" src="bgshape_01.svg" />

          </Section_1>
      
          
          <div className="team-section">
            <div className="team-size-restrictor">
            
            <div className="team core-team">
              <div className="team-header-container">
                <h3 className="section-header em-3 team-title">Meet the Team</h3>
              </div>
            <div className="team-member-container">
              <TeamMember name="Boris Yang" title="Founder & CEO" image="BorisYang.png" />
              <TeamMember name="Bob Chen" title="Co-founder & CTO" image="BobChen.png" />
              <TeamMember name="Ryan Tian" title="Financial Specialist" image="RyanTian.png" />
              <TeamMember name="Veerender Singh" title="Community Manager" image="VeerenderSingh.png" />
              <TeamMember name="Jack Tung" title="Legal Expert" image="JackTung.png" />
              </div>
            </div>
           
            <div className="team advisor-team">
              <div className="team-header-container">
                <h3 className="section-header em-3 team-title">Advisory</h3>
              </div>
              <div className="team-member-container">
                <TeamMember name="Nicholas Krapels" title="Strategy Advisor" image="NicholasKrapels.png" />
                <TeamMember name="Noah Maizels" title="Marketing Adviser" image="NoahMaizels.png" />
                <TeamMember name="Eason Zhang" title="FP of River Capital" image="EasonZhang.png" />
                <TeamMember name="Jack Lu" title="Wanchain Founder" image="JackLu.png" />
              </div>
            
            </div>
 
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
         <Footer />
      </div>

      <style jsx>{`

        .section_1_large_bg{
          display: none;
        }
         .sub-section-header {
          color: #9F66A9;   
        }
        .carousel-container {
          padding-bottom: 3rem;
          max-width: 80%;
          margin: auto auto 5rem;
          width: 1000px;
          bottom: 2.5em;
          overflow: hidden;
        }
        .team-member-container{
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: auto;
          flex-wrap: wrap;
        }
        .team-header-container {
           margin-bottom: 0rem;
          text-align: center
        }
        .team {
          justify-content: center;
          margin: auto;
          margin-top: 100px;
          padding: 0px 0px;
          padding-bottom: 100px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          background-color: rgb(208, 180, 213);
          border-radius: 50px;
          border: 15px solid rgba(159, 102, 169, 0.08);
          max-width: 1000px;
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
          
          display: flex;
          flex-wrap: wrap;
          background-color: rgba(159, 102, 169, 0.2);
        }
        .team-size-restrictor {
          max-width: 1920px;
        }
        .team-title {
          margin: 1em auto;
          font-weight: 700;
          font-size: 40px;
          color: #9F66A9;
          width: 250px;
          padding-bottom: 40px;

        }
        .partners-title {
          width: 1000px;
          margin: auto;
          bottom: 1em;
          margin-bottom: 1em;
          margin-top: 150px;
          font-weight: 700;
          font-size: 40px;
        }
        .exchanges-title {
          font-size: 40px;
          width: 1000px;
          margin: auto;
          margin-top: 2em;
          margin-bottom: 1em;
          font-weight: 900;
          bottom: 1em;
        }
        .section_1_large_bg {
          position: relative;
          width: 650px;
          right: -10rem;
          top: 800px;
          z-index: 1
        }
       .main-title {
          margin-top: 0em;
          line-height: 4rem; 
          font-weight: 900;
          width: 300px;
          font-size: 4.5em;
          margin-bottom: 40px;

        }
        main {
          width: 100%;
          margin: auto;
          overflow: visible
        }    
        .appContainer {
          overflow: hidden
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
          
           
          .section-2-closer {
            font-size: 26px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
         
         .about_bg{
            left: 800px;
            bottom: 400px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
        @media (min-width: 1700px) {
          .main-contents, .main-aside {
            width: 600px;
          }
          .about_bg{
            left: 800px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .team-member-container {
           width: 100%;
          }
          .team {
            width: 100%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;


          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            line-height: 1.5;
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
         
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
        }

        @media (min-width: 1200px) and (max-width: 1700px) { 
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 30px;
            padding-right: 0px;
            line-height: 1.5;
            width: 500px;
          }
          .about_bg{
            left: 500px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
          .main-title {
            line-height: 65px; 
            font-size: 65px;
            padding-top: 80px;
          }
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
          }
          .team {
            width: 100%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            padding-bottom: 40px;
            width: 250px;
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
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 30px;
            padding-right: 0px;
            line-height: 1.5;
            width: 500px;
          }
          .about_bg{
            left: 500px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
          .main-title {
            line-height: 65px; 
            font-size: 65px;
            padding-top: 80px;
          }
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
           max-width: 1000px;
          }
          .team {
            width: 100%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;
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

       @media (max-width: 1024px){
        .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 500px;
            min-width: 360px;
          }
          .about_bg{
            left: 500px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
          .main-title {
            line-height: 65px; 
            font-size: 75px;
            padding-top: 80px;
          }
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           
           max-width: 450px;
           margin: auto;
          }
          .team {
            width: 100%;
            max-width: 600px;
            margin: auto;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            max-width: 800px;
            margin: auto;
            padding-bottom: 40px;
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
       @media (max-width: 700px){
        .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 100%;
            max-width: 330px;
          }
          .main-aside {
            width: 100%;
            padding-top: 0px;
            max-width: 300px;
            margin-left: 30px;
          }
          .about_bg{
            left: 500px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 20px;
          }
          .section-2-opener {
            font-size: 30px;
            font-weight: 700;
          }
          .main-title {
            box-sizing: content-box;
            line-height: 65px; 
            font-size: 50px;
            padding-top: 80px;
            max-width: 330px;
            margin: auto;
          }
      
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
           min-width: 360px;
          }
          .team {
            width: 100%;
            max-width: 1000px;
          }

          .core-team {
            margin-bottom: 100px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;
          }
          .partners-title {
            max-width: 400px;
            font-size: 40px;
          }
          .exchanges-title {
            max-width: 400px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            max-width: 400px;
          }   
          .team-section {
            padding: 100px 50px;
            margin-top: 100px;
          }
       }
      `}
      </style>
    </div>)}
