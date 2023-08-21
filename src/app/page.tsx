import Carousel from "@/components/carousel";
import Upcoming from "./Upcoming";
import Trending from "./Trending";
import MostRated from "./MostRated";

function Home() {
  return (
    <>
      <Carousel />
      <Upcoming />
      <Trending />
      <MostRated />
    </>
  );
}

export default Home;
