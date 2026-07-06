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
// import { ProductsContext } from "../../context/Product.Context";
import useProducts from "../../Hooks/useProducts";
import HomeDealsSkelton from "../Skelton/HomeDealsSkelton";

export default function HomeDelas() {
  const { products, isLoading, error, isError } = useProducts();
  // const [products, setProducts] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // async function fetchProducts() {
  //   try {
  //     setIsLoading(true);
  //     const response = await getAllProducts();
  //     if (response.success) {
  //       setIsLoading(false);

  //       setProducts(response.data.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
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
    .slice(0, 5);
  //   console.log(deals);

  return (
    <>
      <section id="HomeDeals" className="p-20">
        <div className="container">
          <div className="view-deals-div flex justify-between items-center">
            <div className="right-side space-y-2">
              <h2 className="capitalize font-bold text-2xl">deals of today</h2>
              <div className="flex gap-2 items-center">
                <p className="text-xl"> end of .....</p>
                <div className="counters flex gap-1 items-center">
                  <div className="counter1 rounded-md text-sm  size-7 flex items-center justify-center bg-gray-900/50">
                    {timeLeft.hours}
                  </div>
                  <span className="">:</span>
                  <div className="counter2 size-7 rounded-md text-sm flex items-center justify-center bg-gray-900/50">
                    {timeLeft.minutes}
                  </div>
                  <span>:</span>
                  <div className="counter3 size-7 rounded-md text-sm flex items-center justify-center bg-gray-900/50">
                    {timeLeft.seconds}
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/deals`}>all deals</Link>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-5 py-15">
            {deals?.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
