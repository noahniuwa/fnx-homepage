import Particles from 'react-particles-js' 


export default function ParticlesDiv() {
  const my_params = {
    "particles": {
      "number": {
        "value": 82,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#a2d7db"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "rgba(0, 0, 0, 0)"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "",
          "width": 290,
          "height": 610
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 0,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 224.4776885211732,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  return (
    <Particles style={{top: 0, position: 'absolute', width: '2200px'}} params={my_params}>
       
      <style jsx>{`
            
        
          @media (min-width: 1700px) {
            
          }
  
          @media (min-width: 1200px) and (max-width: 1700px) {
            
            
          }
         

          @media (max-width: 800px) {
             
          }
        
          @media (min-width: 800px) and (max-width: 1200px) {
             
          }

          
      `}</style>
    </Particles>
    )}
