"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { banners } from "@/data/banner.data";
import './carousel.css'

//TODO: Implement the data with carousel
function UncontrolledExample() {
  return (
    <div className="custom-carousel">
      <Carousel className="container">
        {banners.map((banner, index) => {
          return <Carousel.Item>
            <div className="d-flex custom-carousel-2">
              <Image src={banner.image} className="banner-img" width={3000} height={951} alt="" />

              <p>
                {banner.name}
              </p>
            </div>
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
