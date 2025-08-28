import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  type Props = {
  images: string[];
};

function Slides({ images }: Props) {
  return (
    <div className='w-70 md:w-120 lg:w-4/4 mx-auto'>
        <Slider {...settings}>
            {images.map((image, i) => (
                console.log(image),
                <div key={i} className="w-full">
                <img
                    src={image}
                    alt={`slide-${i}`}
                    className="w-full h-auto object-cover rounded-lg"
                />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default Slides