import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 2,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 3000,
  hash: true,
  
  
}

function Carousel() {
  return (
    <Flickity
      className='carousel' // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 

      <a  className="carousel-cell" href="https://www.bkex.com/"><img src="/bkex.png"/></a>
      <a className="carousel-cell" href="https://www.bitrue.com/"><img src="/bitrue.png"/></a>
      <a  className="carousel-cell" href="https://www.bkex.com/"><img src="/bkex.png"/></a>
      <a className="carousel-cell" href="https://www.bitrue.com/"><img src="/bitrue.png"/></a>
      <a  className="carousel-cell" href="https://www.bkex.com/"><img src="/bkex.png"/></a>
      <a className="carousel-cell" href="https://www.bitrue.com/"><img src="/bitrue.png"/></a>



      <style jsx>{`
             
      /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

  .carousel-cell:hover {
          -webkit-transform: scale(1.2, 1.2);
              -ms-transform: scale(1.2, 1.2);
                  transform: scale(1.2, 1.2);
        }
        .carousel-cell {
          -webkit-transform: scale(1.1, 1.1);
              -ms-transform: scale(1.1, 1.1);
                  transform: scale(1.1, 1.1);
          -webkit-transition: all .1s ease-in-out;
          -o-transition: all .1s ease-in-out;
          transition: all .1s ease-in-out;
          width: 20%; 
          margin-right: 40px;
        }
        @media (min-width: 1000px)   {
            
         
        .carousel-cell {
         
          width: 20%; /* full width */
          /* height: 50%;   */
          margin-right: 40px;
        }
      }
      
      @media (min-width: 700px) and (max-width: 1000px)   {
        .carousel-cell {
          width: 30%; /* full width */
          /* height: 50%;   */
          margin-right: 30px;
        }
      }
      @media   (max-width: 700px)   {
        .carousel-cell {
          width: 50%; /* full width */
          /* height: 50%;   */
          margin-right: 30px;
        }
      }
     
      `}</style>
    </Flickity>
  )
}

export default Carousel