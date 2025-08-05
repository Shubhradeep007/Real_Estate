import Carousel from 'react-bootstrap/Carousel';

const Caroserl = () => {
  return (
    <>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carasole-img/slide1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carasole-img/slide2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carasole-img/slide3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Caroserl;
