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



      <style jsx>{`
        @media (min-width: 1000px)   {
        .carousel-cell {
          width: 20%; /* full width */
          /* height: 50%;   */
          margin-right: 30px;
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