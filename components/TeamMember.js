import { useState } from 'react';


export default function Navbar(props) {
  
  return (
     
    <div className="team-member-container">
      
      <img className="team-member-frame" src="bgshape_03.svg"/>
      <img className="team-member" src={props.image}/>
      <div className="team-member-title">
        <p className="team-name">{props.name}</p>
        <p className="team-title">{props.title}</p>
      </div>
    
  

      <style jsx>{`
              .team-member-container {
                transform: scale(.7, .7);
              }
              .team-member-container:hover {
                transform: scale(.8, .8);
              } 
            .team-member-title {
              position: absolute;
              background-color: #224099;
              border-left: .5rem solid #224099;
              border-right: .5rem solid #224099;
              border-top: .6rem solid #224099;
              border-bottom: .6rem solid #224099;
              text-align: center;
              border-radius: 1.3rem;
              bottom: 0px;
              z-index: 100;
            }
            .team-name {
              text-align: center;
              margin: auto;
              color: white;
              font-weight: 900;
              line-height: 1.3rem;
              width: 10rem;
              font-size: 1em;
            }
            .team-title {
              text-align: center;
              margin: auto;
              color: white;
              width: 10rem;
              font-weight: 300;
              line-height: 1.3rem;
              font-size: 1em;
            }
            .team-member-frame {
              top: -3px;
              left: 6px;
              transform: scale(1.11, 1.11);
              position: absolute;
              z-index: 100;
            }
            .team-member {
              width: 100%;
            }
            .team-member-container {
              position: relative; 
              width: 175px;
              height: 200px;
              margin: 25px 50px;
              transform: scale(1.1, 1.1);
              transition: all .1s ease-in-out;
            }
            .team-member-container:hover {
                transform: scale(1.2, 1.2);
              }
            
            .team-header-container h3 {
              text-align: center;
            }

            @media (max-width: 1024px) {
              .team-member-container {
                transform: scale(.7, .7);
                width: 125px;
                height: 200px;
                margin: 40px 50px;
              }
              .team-member-container:hover {
                transform: scale(.8, .8);
              }
              .team-member-frame {
                transform: scale(1.85, 1.85);
                top: -4px;
              }
              .team-member {
                transform: scale(1.7, 1.7);
              }
              .team-title {
                font-size: 18px;
                width: 210px;
                line-height: 25px;
              }
              .team-member-title {
                bottom: -10px;
                right: -39px;
              }
              .team-name {
                width: 210px;
                line-height: 20px;
                font-size: 25px;
              }
            }

            @media (max-width: 700px){
              .team-member-container {
                transform: scale(.7, .7);
              }
              .team-member-container:hover {
                transform: scale(.8, .8);
              } 

              .team-member-container {
                transform: scale(.6, .6);
                width: 135px;
                height: 200px;
                margin: 0px 15px;
              }
              .team-member-title {
                bottom: -10px;
                right: -39px;
                line-height: 25px;
                
              }
              .team-name {
                width: 210px;
                line-height: 25px;
                font-size: 25px;
              }
              .team-member-title {
                right: -45px;
              }
            }

      `}</style>
    </div>
  )
}

