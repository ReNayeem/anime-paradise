import Link from "next/link";
import './homeUpcoming.css';

function homeUpcoming() {
    return <>
        <div>
            <div className="container">
                <div className="d-flex justify-content-between my-3">
                    <h1 className="home-upcoming-title">Upcoming</h1>
                    <Link href='/pages/upcoming'>
                        <button className="home-upcoming-btn">See all</button>
                    </Link>
                </div>
            </div>
        </div>
    </>;
}

export default homeUpcoming;
