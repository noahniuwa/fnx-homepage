export default function PurplePill(props) {
  
  return (
     
    <div className="purplePill">
    
       
    <div className="purplePill">
            <div className="purplePill_1">
              <div className="pillContainer">
                <div className="squareLabel">
                  <img className="square_label_img" src="blue_FNX_logo.svg" />
                  <p className="label-options">Options</p>
                  <div className="versionLabel">
                    v0.1
                </div>
                </div>
                <div className="labelTitle">
                  <h4>FPO</h4>
                  <h5>v0.1</h5>
                </div>
              </div>
              <div className="pill-text-container vertical-reverse">
                <p className="pillText_1">FinNexus Protocol For options FPO v0.1 is the first decentralized options product launched by FinNexus. It allows sophisticated individual investors writers to write their own specific options through the platform.</p>
                <div className="float-container">
                  <button className="pill_1_button float-right is-rounded button is-warning">Write Options</button>
                </div>
              </div>
            </div>
            <img className="pill_section_2_img" src="earn.svg" />
            <img className="pill_bg_image" src="bgshape_01.svg" />
          </div>

      <style jsx>{` 

@media (min-width:1600px) {
     
      
            .label-options {
                text-align: center
            }
            .versionLabel {
                -webkit-transform: scale(1.2, 1.2);
                    -ms-transform: scale(1.2, 1.2);
                        transform: scale(1.2, 1.2);
                float: right;
                margin-top: 5px;
                width: 30px;
                height: 15px;
                color: #F1F1F2;
                padding-top: 1px;
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
                -webkit-transform: scale(.8, .8);
                    -ms-transform: scale(.8, .8);
                        transform: scale(.8, .8);
                -webkit-box-sizing: content-box;
                        box-sizing: content-box;
                margin-right: 10px;
                display: inline-block;
                padding: 15px;
                 font-weight: 900;
                color: #000;
                width: 110px;
                height: 110px;
                background-color: #EFF0EB;
                border-radius: 20px;
                margin-bottom: 8px;
                top: 20px
            }
             
           
    .pillText_1, .section-1-text, .section-2-text {
        font-size: 1.5rem
    } 
    .pillText_1 {
        margin-top: 20px;
        bottom: 20px;
        width: 100%;
        margin-top: 2rem;
        max-width: 28rem
    }
    .pillContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    } 
    .pill_bg_image {
        position: absolute;
        bottom: 0;
        top: 5rem;
        right: -7rem;
        max-width: 20rem;
        z-index: 2
    } 
    .pill_1_button {
        margin-top: 3rem;
        bottom: 50px;
        float: left
    }
    .pill_section_2_img {
        -webkit-transform: translateX(-15px);
            -ms-transform: translateX(-15px);
                transform: translateX(-15px);
        width: 100%;
        display: block;
        -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
        z-index: 3
    }
    .purplePill {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 60px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: #F1F1F2;
        padding-left: 40px;
        padding-right: 40px;
        width: 95%;
        background-color: #9F66A9;
        border-radius: 150px
    }
    .purplePill_1 {
        width: 100%;
        margin-left: 30px
    } 
}

@media (min-width:1000px) and (max-width:1600px) {
     
    .pillText_1 {
        margin-top: 20px;
        bottom: 20px;
        width: 100%;
        margin-top: 2rem;
        max-width: 28rem
    }
    .pillContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    } 
    .pill_bg_image {
        position: absolute;
        bottom: 0;
        top: 5rem;
        right: -7rem;
        max-width: 20rem;
        z-index: 2
    } 
    .pill_1_button {
        margin-top: 3rem;
        bottom: 50px;
        float: left
    }
    .pill_section_2_img {
        -webkit-transform: translateX(-15px);
            -ms-transform: translateX(-15px);
                transform: translateX(-15px);
        width: 100%;
        display: block;
        -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
        z-index: 3
    }
    .purplePill {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 60px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: #F1F1F2;
        padding-left: 40px;
        padding-right: 40px;
        width: 95%;
        background-color: #9F66A9;
        border-radius: 150px
    }
    .purplePill_1 {
        width: 100%;
        margin-left: 30px
    } 
}

@media (min-width:700px) and (max-width:1000px) {
     
    .pillText_1 {
        margin-top: 20px;
        bottom: 20px;
        width: 100%;
        margin-top: 2rem;
        max-width: 18rem
    }
    .pillContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }  
    .pill_bg_image {
        position: absolute;
        bottom: 0;
        top: 5rem;
        right: -7rem;
        max-width: 20rem;
        z-index: 2
    } 
    .pill_1_button {
        margin-top: 3rem;
        bottom: 50px;
        float: left
    }
    .pill_section_2_img {
        -webkit-transform: translateX(-15px);
            -ms-transform: translateX(-15px);
                transform: translateX(-15px);
        width: 100%;
        display: block;
        -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
        z-index: 3
    }
    .purplePill {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 60px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: #F1F1F2;
        padding-left: 40px;
        padding-right: 40px;
        width: 95%;
        background-color: #9F66A9;
        border-radius: 150px
    }
    .purplePill_1 {
        width: 100%;
        margin-left: 30px
    } 
}

@media (max-width:700px) {
    .pill_bg_image {
        position: absolute;
        bottom: 0;
        top: 20rem;
        right: -7rem;
        max-width: 20rem;
        z-index: 1
    } 
    .pill_1_button {
        margin-top: 10px;
        bottom: 50px
    }
    .pillText_1 {
        bottom: 20px;
        margin-top: 0
    }
    .purplePill {
        margin: auto;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        color: #F1F1F2;
        padding-top: 40px;
        padding-bottom: 50px;
        width: 90%;
        background-color: #9F66A9;
        border-radius: 25px
    }
    .purplePill_1 {
        margin: auto;
        width: 90%
    }
    .purplePill_2 {
        margin: auto;
        width: 90%
    }
    .pill_section_2_img {
        width: 90%;
        display: block;
        margin: auto;
        -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
        z-index: 3
    }
    .pillContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    } 
} 
      `}</style>
    </div>
  )
}

