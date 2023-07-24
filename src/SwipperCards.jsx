// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

export default function SwipperCards() {
  return (
    <div className="container mt-4 mx-auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://wallpaperaccess.com/full/2126183.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://wallpaperaccess.com/full/2126183.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://wallpaperaccess.com/full/2126183.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://wallpaperaccess.com/full/2126183.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://wallpaperaccess.com/full/2126183.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper>
        <SwiperSlide>
          {({ isActive }) => (
            <div>Current slide is {isActive ? "active" : "not active"}</div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
