import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import carouselData from '../../utils/carouselData'
import { Link } from 'react-router-dom'
import './LandingCarousel.css';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow:4},
]


  

class LandingCarousel extends Component{
  state = {
    images: carouselData
  }
 
  
  render() {
    const { images } = this.state
    
    return (
        <Carousel breakPoints={breakPoints}>
        {images.map(image => <div key={image.id} className='image-container'>
            <Link to={`/adventures/${image.address}`}> 
            <img src={image.url} id='carousel-imgs' />
            <div className='image-text'>{image.textLocation}
              <br>
              </br><i class="fa fa-rub" aria-hidden="true"></i>{image.textPrice}</div>
          </Link>    
          </div>)}
        </Carousel>
      )
    }
  }
  
  
  
        
export default LandingCarousel;
