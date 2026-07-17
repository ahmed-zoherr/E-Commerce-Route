import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCodeCompare,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts } from "../../services/Product-ser";
import Loading from "../Loading/Loading";
import { calcTimeLeft } from "../../utils/counter-down";
import useProducts from "../../Hooks/useProducts";
import HomeDealsSkelton from "../Skelton/HomeDealsSkelton";
import { useSearchParams } from "react-router";

export default function HomeDelas() {
  const { products, isLoading, error, isError } = useProducts(1, 20);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calcTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <HomeDealsSkelton />;
  }

  const deals = products
    ?.filter((product) => product.priceAfterDiscount)
    ?.filter((product) => product.title.toLowerCase().includes(searchQuery))
    .slice(0, 5);

  return (
    <section id="HomeDeals" className="p-4 sm:p-10 md:p-20">
      <div className="container">
        <div className="view-deals-div flex flex-wrap justify-between items-center gap-3 mb-4">
          <div className="right-side space-y-2">
            <h2 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
              deals of today
            </h2>
            <div className="flex flex-wrap gap-2 items-center">
              <p className="text-sm sm:text-base md:text-xl whitespace-nowrap">
                end of .....
              </p>
              <div className="counters flex gap-1 items-center">
                <div className="counter1 rounded-md text-xs sm:text-sm size-6 sm:size-7 flex items-center justify-center bg-gray-900/50">
                  {timeLeft.hours}
                </div>
                <span>:</span>
                <div className="counter2 size-6 sm:size-7 rounded-md text-xs sm:text-sm flex items-center justify-center bg-gray-900/50">
                  {timeLeft.minutes}
                </div>
                <span>:</span>
                <div className="counter3 size-6 sm:size-7 rounded-md text-xs sm:text-sm flex items-center justify-center bg-gray-900/50">
                  {timeLeft.seconds}
                </div>
              </div>
            </div>
          </div>
          <Link
            to={`/deals`}
            className="text-sm sm:text-base whitespace-nowrap"
          >
            all deals
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 py-8 sm:py-15">
          {deals?.length > 0 ? (
            deals.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg py-10">
              No deals found
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
