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
        @media (min-width: 1600px) { 
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
          }
          .team-title {
            text-align: center;
            margin: auto;
            color: white;
            width: 10rem;
            font-weight: 300;
            line-height: 1rem;
            font-size: .8rem;
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
            width: 11rem;
            height: 11rem;
            margin: auto;
            transform: scale(0.9 , 0.9);
          }
      
          .team-header-container h3 {
            text-align: center;
          }
        }
        @media (min-width: 1000px) and (max-width: 1600px){ 
          
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
          }
          .team-title {
            text-align: center;
            margin: auto;
            color: white;
            width: 10rem;
            font-weight: 300;
            line-height: 1rem;
            font-size: .8rem;
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
            width: 11rem;
            height: 11rem;
            margin: auto;
            transform: scale(0.9, 0.9);
          }
      
          .team-header-container h3 {
            text-align: center;
          }
        }
        @media (min-width: 700px) and (max-width: 1000px) { 

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
          }
          .team-title {
            text-align: center;
            margin: auto;
            color: white;
            width: 10rem;
            font-weight: 300;
            line-height: 1rem;
            font-size: .8rem;
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
            width: 11rem;
            height: 11rem;
            margin: auto;
            transform: scale(0.8, 0.8);
          }
      
          .team-header-container h3 {
            text-align: center;
          }
        }
        @media (max-width: 700px) { 
        .team-member-container {
          position: relative; 
          width: 11rem;
          height: 11rem;
        }
         *  {
           transform: scale(0.90, 0.90)
         }
         .team-member-container .team-member-frame {
          transform: scale(1, 1)
         }
         .team-member-container {
           margin-bottom: 1rem;
         }
         .team-member-title {
            position: absolute;
            background-color: #224099;
            /* border-left: .5rem solid #224099; */
            /* border-right: .5rem solid #224099; */
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
            width: 11rem;
            font-size: 1.2rem;
          }
          .team-title {
            text-align: center;
            margin: auto;
            color: white;
            width: 11rem;
            font-weight: 300;
            line-height: 1rem;
            font-size: 1rem;
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
            width: 11rem;
            height: 11rem;
            margin: auto;
            transform: scale(0.8, 0.8);
          }
      
          .team-header-container h3 {
            text-align: center;
          }
       }
      `}</style>
    </div>
  )
}

