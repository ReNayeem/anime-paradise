import Link from "next/link";
import "./../css/upcoming.css";
import Image from "next/image";
import { banners } from "@/data/banner.data";

function Upcoming() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between upcoming-heading">
          <h1 className="upcoming-title">Upcoming</h1>
          <Link href="/pages/upcoming">
            <button className="upcoming-btn">See all</button>
          </Link>
        </div>

        <div className="d-flex flex-wrap justify-content-between gap-3 mb-5">
          {banners.slice(0, 5).map((banner, index) => {
            return (
              <div className="upcoming-anime">
                <Image
                  src={banner.image2}
                  className="upcoming-anime-img"
                  width={281}
                  height={400}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
