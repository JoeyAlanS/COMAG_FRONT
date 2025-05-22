import Carousel from 'react-bootstrap/Carousel';
import SlideImage from './SlideImage';

export function ImgCarousel() {
  const imageClassName = "d-block w-100 carousel-image";
  return (
    <>
    <Carousel
    className={imageClassName}>
      <Carousel.Item>
      <SlideImage text="primeiro" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <SlideImage text="segundo" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <SlideImage text="terceiro" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <SlideImage text="quarto" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default ImgCarousel;