import Carousel from 'react-bootstrap/Carousel';

function CarouselImg() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src="/images/image-1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src="/images/image-2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src="/images/image-3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImg;