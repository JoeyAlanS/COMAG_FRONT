import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

export function ImgCarousel() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <img
            className="d-block w-100 carousel-image"
            src="https://placehold.co/600x400"
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100 carousel-image"
            src="https://placehold.co/600x400"
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100 carousel-image"
            src="https://placehold.co/600x400"
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default ImgCarousel;