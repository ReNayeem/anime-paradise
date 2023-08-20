import React from "react";
import Upcoming from "./Upcoming";
import Trending from "./Trending";
import MostRated from "./MostRated";
import Banner from "@/components/banner/Banner";

const page = () => {
  return (
    <>
      <Banner />
      <Upcoming />
      <Trending />
      <MostRated />
    </>
  );
};

export default page;
