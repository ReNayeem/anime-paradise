"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { banners } from "@/data/banner.data";
import './carousel.css'

//TODO: Implement the data with carousel
function UncontrolledExample() {
  return (
    <div className="custom-carousel">
      <Carousel>
        {banners.map((banner, index) => {
          return <Carousel.Item>
            <div className="d-flex container custom-carousel-2">
              <Image src={banner.image} className="banner-img" width={3000} height={951} alt="" />
              <div className="d-flex flex-column banner-anime-details">
                <h3 className="banner-anime-name">{banner.name}</h3>
                <p className="banner-anime-description">{banner.description.slice(0, 700) + "..."}</p>
                <button className="banner-btn"><svg className="pe-2 banner-btn-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>Watch now</button>
              </div>
            </div>
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
