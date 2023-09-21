import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default  function Carouselll ()  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageStyle = {
    maxHeight: '400px',
    maxWidth: '500px',
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://github.com/charankosari/atharva/blob/main/ideogram%20(2).jpg?raw=true"
            alt="Image 1"
            style={imageStyle}
            className="mx-auto"
          />
        </div>
        <div>
          <img
            src="https://github.com/charankosari/atharva/blob/main/imagee.png?raw=true"
            alt="Image 2"
            style={imageStyle}
            className="mx-auto"
          />
        </div>
        <div>
          <img
            src="https://github.com/charankosari/atharva/blob/main/dummy/qwerty.jpg?raw=true"
            alt="Image 3"
            style={imageStyle}
            className="mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
};
