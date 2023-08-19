"use client";

import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../../public/nice-a.png";
import Image from "next/image";
import { banners } from "@/data/banner.data";

//TODO: Implement the data with carousel
function UncontrolledExample() {
  return (
    <div>
      <Carousel className="container">
        {banners.map((banner, index) => {
          return <Carousel.Item>
            <div className="d-flex">
              <Image src={ExampleCarouselImage} alt="" />

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
