import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({images}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="carousel-container mb-8 mx-auto relative px-4">
			<Slider {...settings}>
				{images.map((img, index) => (
					<div key={index} className="carousel-slide relative">
						<img
							src={img}
							alt={`carousel-${index}`}
							className="w-full h-72 object-cover"
							style={{marginLeft: "5px", marginRight: "5px"}}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
