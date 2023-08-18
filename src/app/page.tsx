import React from "react";
import Upcoming from "./Upcoming";
import Trending from "./Trending";
import MostRated from "./MostRated";
import Carousel from '../components/carousel/carousel'

//TODO: Implement the components
const page = () => {
  return (
    <>
      <Upcoming />
      <Trending />
      <MostRated />
      <Carousel />
    </>
  );
};

export default page;
