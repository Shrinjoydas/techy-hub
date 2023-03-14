import React from "react";
import { Carousel, Thumbs } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";

function Services() {
    return (
        <>
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                interval={2000}
                >
                <div>
                    <img src={img1} alt="Img1" />
                    <p className="legend">Frontend Developer</p>
                </div>
                <div>
                    <img src={img2} alt="Img2" />
                    <p className="legend">Peer-to-peer Support</p>
                </div>
            </Carousel>
        </>
    );
}

export default Services;
