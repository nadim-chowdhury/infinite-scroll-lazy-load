import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex justify-content-around mt-5">
      <Link to="/infinite-scroll" className="btn btn-primary">
        Infinite Scroll
      </Link>
      <Link to="/lazy-loading" className="btn btn-primary">
        Lazy Image Loading
      </Link>
      <Link to="/swipper-cards" className="btn btn-primary">
        Swiper JS
      </Link>
    </div>
  );
}
