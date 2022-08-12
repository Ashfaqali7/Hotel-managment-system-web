import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 wah"
          src={require("../../images/hotelm3.jpg")} width={100} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Save money. Live better</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 wah"
          src={require("../../images/hotelm2.jpg")} width={100} 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>A diamond is forever</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 wah"
          src={require("../../images/hotelm1.jpg")} width={100} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Just do it</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;