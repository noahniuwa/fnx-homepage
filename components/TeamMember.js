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
              line-height: 1.1rem;
              width: 10rem;
              font-size: 1em;
            }
            .team-title {
              text-align: center;
              margin: auto;
              color: white;
              width: 10rem;
              font-weight: 300;
              line-height: 1rem;
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
              transform: scale(1, 1);
              transition: all .1s ease-in-out;
            }
            
            .team-header-container h3 {
              text-align: center;
            }

            @media (max-width: 1024px) {
              .team-member-container {
                transform: scale(.7, .7);
                width: 145px;
                height: 200px;
                margin: 20px 20px;
              }
              .team-member-container:hover {
                transform: scale(.6, .6);
              }
              .team-member-frame {
                transform: scale(1.8, 1.8);
                top: -6px;
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

      `}</style>
    </div>
  )
}

