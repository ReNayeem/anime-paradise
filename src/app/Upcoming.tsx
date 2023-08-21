import Link from "next/link";
import "./../css/upcoming.css";

function Upcoming() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between my-3">
          <h1 className="upcoming-title">Upcoming</h1>
          <Link href="/pages/upcoming">
            <button className="upcoming-btn">See all</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
