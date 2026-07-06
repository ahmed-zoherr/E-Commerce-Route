import {
  faCodeCompare,
  faEye,
  faHeart,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setDiscount } from "../../utils/calc-dicount";
import Stars from "../stars/Stars";
import { Link } from "react-router";
import { useContext } from "react";
// import { CartContext } from "../../context/Cart.context";
import { useAddWishlist } from "../../Hooks/useWishlist";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useGetCart } from "./../../Hooks/useGetCart";
import { useAddToCart } from "../../Hooks/useAddTocart";
import { toast } from "react-toastify";

export default function ProductCard({ productInfo } = {}) {
  const {
    imageCover,
    id,
    priceAfterDiscount,
    price,
    ratingsQuantity,
    ratingsAverage,
    title,
    category,
  } = productInfo;
  const { addToCart } = useAddToCart();
  // const { handleAddingToCart } = useContext(CartContext);
  const { mutate, isLoading, isError, addProductToWishlist } = useAddWishlist();
  function handleAddToWishlist() {
    toast.success("your product added to wishlist");
    addProductToWishlist({ productId: productInfo.id });
  }
  return (
    <>
      <div className=" card  overflow-hidden relative rounded-xl shadow-lg bg-white">
        <div
          className="card-img aspect-square
      overflow-hidden rounded-lg"
        >
          {" "}
          <Link
            className="w-full  h-full object-contain"
            to={`/products/${id}`}
          >
            <img
              className="w-full  h-full object-contain"
              src={imageCover}
              alt={title}
            />
          </Link>
        </div>
        <div className="card-content p-2.5 space-y-2">
          <div className="card-content_name">
            <span className=" text-sm w-full"> {category.name}</span>

            <Link
              className="font-semibold line-clamp-1 "
              to={`/products/${id}`}
            >
              <h2 className="font-semibold line-clamp-1 ">{title}</h2>
            </Link>
          </div>
          <div className="card-content_rating flex items-center gap-8">
            <div className="stars">
              <Stars rating={ratingsAverage} />
            </div>
            <div className="space-x-2">
              <span>{ratingsAverage}</span>
              <span>({ratingsQuantity})</span>
            </div>
          </div>
          <div className="card-content_price flex items-center justify-between">
            <div className="space-x-6">
              {" "}
              {priceAfterDiscount ? (
                <>
                  {" "}
                  <span className="text-primary-500 font-semibold ">
                    {priceAfterDiscount}EGP
                  </span>
                  <del>{price}EGP</del>
                </>
              ) : (
                <>
                  {" "}
                  <span className="text-primary-500 font-semibold  ">
                    <span>{price}EGP</span>
                  </span>
                </>
              )}
            </div>
            <button
              onClick={() => addToCart({ id })}
              className="py-2 text-white px-2.5 bg-primary-500 rounded-full"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="cations *:hover:text-primary-600 *:hover:transition-colors *:hover:duration-200  flex flex-col absolute top-4 right-2 gap-2 text-gray-500">
          <button className="" onClick={handleAddToWishlist}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCodeCompare} />
          </button>
          <button>
            <Link to={`/products/${id}`}>
              {" "}
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </button>
        </div>
        {priceAfterDiscount && (
          <span className="badge absolute px-3 top-4 left-2 bg-red-500 rounded-sm py-0.5 text-white">
            -{setDiscount(productInfo)}%
          </span>
        )}
      </div>
    </>
  );
}
