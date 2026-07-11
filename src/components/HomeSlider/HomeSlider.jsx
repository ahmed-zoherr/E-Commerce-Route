import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import HomeSliderImg from "../../assets/Images/home-slider-1.png";
import HomeSliderSecondImg from "../../assets/Images/pexels-photo-264636.avif";
import HomeSliderThirdImg from "../../assets/Images/pexels-lifeofnacchi-4124939.jpg";
export default function HomeSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div
            className="img"
            style={{
              backgroundImage: `url(${HomeSliderImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white p-25 bg-gradient-to-r from-primary-600/95 to-primary-700/40">
              <div className="container space-y-3">
                <h2 className="text-2xl font-bold">
                  Fresh Products Deliver <br /> To Your Door{" "}
                </h2>
                <p> Get 20% Of Your First Product !</p>
                <div className="buttons flex gap-3">
                  <button className="btn border-2 border-white bg-white text-primary-600 text-sm sm:text-base">
                    Shop Now
                  </button>
                  <button className="btn px-6 sm:px-10 border-2 border-white bg-transparent text-white hover:text-primary-600 hover:bg-white text-sm sm:text-base">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="img"
            style={{
              backgroundImage: `url(${HomeSliderSecondImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white p-25 bg-gradient-to-r from-primary-600/95 to-primary-700/40">
              <div className="container space-y-3">
                <h2 className="text-2xl font-bold">
                  Fresh Products Deliver <br /> To Your Door{" "}
                </h2>
                <p> Get 20% Of Your First Product !</p>
                <div className="buttons flex gap-3">
                  <button className="btn border-2 border-white bg-white text-primary-600 text-sm sm:text-base">
                    Shop Now
                  </button>
                  <button className="btn px-6 sm:px-10 border-2 border-white bg-transparent text-white hover:text-primary-600 hover:bg-white text-sm sm:text-base">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="img"
            style={{
              backgroundImage: `url(${HomeSliderThirdImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white p-25 bg-gradient-to-r from-primary-600/95 to-primary-700/40">
              <div className="container space-y-3">
                <h2 className="text-2xl font-bold">
                  Fresh Products Deliver <br /> To Your Door{" "}
                </h2>
                <p> Get 20% Of Your First Product !</p>
                <div className="buttons flex gap-3">
                  <button className="btn border-2 border-white bg-white text-primary-600 text-sm sm:text-base">
                    Shop Now
                  </button>
                  <button className="btn px-6 sm:px-10 border-2 border-white bg-transparent text-white hover:text-primary-600 hover:bg-white text-sm sm:text-base">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
