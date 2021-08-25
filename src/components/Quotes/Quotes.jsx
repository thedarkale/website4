import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
};

const Quote = ({ children }) => {

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default Quote;
