import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SlickSlider extends Component{
	render(){
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}
		return(
			<div>
				<Slider {...settings}>
					<div className="slick-image"><img alt="" src="/slider-images/ferrari.jpg" /></div>
					<div className="slick-image"><img alt="" src="/slider-images/lamb.jpg" /></div>
					<div className="slick-image"><img alt="" src="/slider-images/train1.jpg" /></div>
					<div className="slick-image"><img alt="" src="/slider-images/schooner.jpg" /></div>
					<div className="slick-image"><img alt="" src="/slider-images/nyc.jpg" /></div>
					{/* <div className="slick-image"><img alt="" src="/slider-images/city.jpg" /></div> */}

				</Slider>
			</div>
		)
	}
}

export default SlickSlider;
