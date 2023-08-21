import Link from "next/link";
import "./../css/trending.css";
import Image from "next/image";
import { banners } from "@/data/banner.data";

function Trending() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between trending-heading">
          <h1 className="trending-title">Trending</h1>
          <Link href="/pages/trending">
            <button className="trending-btn">See all</button>
          </Link>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {banners.slice(0, 5).map((banner, index) => {
            return (
              <Link href="">
                <div className="trending-anime">
                  <Image
                    src={banner.image2}
                    className="trending-anime-img"
                    width={281}
                    height={400}
                    alt=""
                  />
                  <div className="trending-anime-description">
                    {
                      banner.name.length < 21 ? <h5>{banner.name}</h5> : <h5>{banner.name.slice(0, 21) + "..."}</h5>
                    }
                    <h6>{banner.description.slice(0, 89) + "..."}</h6>
                    <p>TV <span className="trending-anime-dot"></span> 23m</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
