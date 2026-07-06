import {
  faPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stars from "../stars/Stars";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/Product-ser";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// import Stars from "../components/Stars/Stars";

export default function RelatedProducts({ productDetails }) {
  const {
    id,
    title,
    description,
    category,
    images,
    price,
    priceAfterDiscount,
    ratingsAverage,
    quantity,
    ratingsQuantity,
  } = productDetails;
  const [relatedproducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  async function getRelatedProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: category._id });
      if (response.success) {
        console.log(response);

        setRelatedProducts(response.data.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }
  useEffect(() => {
    getRelatedProducts();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="py-8">
      {/* الهيدر */}
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">You May Also Like</h2>
          <div className="flex items-center gap-2">
            <button className="previous-btn w-8 h-8 rounded-full border hover:bg-primary-400 hover:transition-colors hover:duration-200 border-gray-200 flex items-center justify-center text-gray-500 transition-colors">
              <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
            </button>
            <button className="rel-btn w-8 h-8 rounded-full border hover:bg-primary-400 hover:transition-colors hover:duration-200 border-gray-200 flex items-center justify-center text-gray-500 transition-colors">
              <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            </button>
          </div>
        </div>

        {/* الكروت */}
        <div className="">
          <Swiper
            modules={[Navigation]}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 30 },
              540: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
            }}
            loop={true}
            navigation={{ nextEl: ".rel-btn", prevEl: ".previous-btn" }}
          >
            {relatedproducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
