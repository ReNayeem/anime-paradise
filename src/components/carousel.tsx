"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { banners } from "@/data/banner.data";
import "./../css/carousel.css";

function BannerCarousel() {
  return (
    <div className="custom-carousel">
      <Carousel>
        {banners.slice(0, 3).map((banner, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="d-flex container custom-carousel-2">
                <Image
                  src={banner.image}
                  className="banner-img"
                  width={3000}
                  height={951}
                  alt=""
                />
                <div className="d-flex flex-column banner-anime-details">
                  <h3 className="banner-anime-name">{banner.name}</h3>
                  <p className="banner-anime-description">
                    {banner.description.slice(0, 700) + "..."}
                  </p>
                  <button className="banner-btn">Watch now</button>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
