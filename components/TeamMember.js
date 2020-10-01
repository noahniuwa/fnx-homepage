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
              transform: translate(0rem, -2.2rem);
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
            .team-member-container:hover {
              transform: scale(1.1, 1.1);
            }
        
            .team-header-container h3 {
              text-align: center;
            }
      `}</style>
    </div>
  )
}

