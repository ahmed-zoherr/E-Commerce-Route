import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setDiscount } from "../../utils/calc-dicount";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  faCartShopping,
  faTruck,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

// import { CartContext } from "../../context/Cart.context";
import Stars from "../stars/Stars";
import { useAddToCart } from "../../Hooks/useAddTocart";
import { useRemoveFromCart } from "../../Hooks/useRemoveFromCart";

const MySwal = withReactContent(Swal);
//? السطر دا معناه اية ؟

export default function ProductInfo({ productDetails }) {
  const [isAdded, setIsAdded] = useState(false);
  const [quantitySelected, setQuantitySelected] = useState(1);

  const { addToCart } = useAddToCart();
  const { removeProductsFromCart } = useRemoveFromCart();
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

  function handleAddedIsAdded() {
    addToCart({ id });
    setIsAdded(!isAdded);
  }

  // 3. ضفنا كلمة async هنا
  async function handleDeleteIsAdded() {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      removeProductsFromCart({ id });
      setIsAdded(false);
    }
  } // 4. القوس ده كان ناقص في الكود بتاعك!

  return (
    <section className="container mx-auto px-4 py-8">
      {/* باقي الـ JSX بتاعك زي ما هو بالظبط مفيهوش أي مشكلة */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-10">
        {/* الجانب الأيسر — الصور */}
        <div className="flex flex-col xl:col-span-2 gap-4">
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            items={
              images?.map((image) => {
                return {
                  original: image,
                  thumbnail: image,
                };
              }) || []
            } // حماية إضافية لو الصور لسه بتحمل
          />
        </div>

        {/* الجانب الأيمن — التفاصيل */}
        <div className="flex flex-col xl:col-span-4 gap-5 py-2">
          {/* إن ستوك */}
          <span
            className={`w-fit text-xs font-medium ${quantity > 0 ? "bg-green-100 text-primary-700" : "bg-red-100 text-red-600/80"}  px-3 py-1 rounded-full`}
          >
            {quantity > 0 ? "InStock" : "Out Of Stock"}
          </span>

          {/* الاسم */}
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            {title}
          </h1>

          {/* الرايتينج */}
          <div className="flex items-center gap-2">
            <Stars rating={ratingsAverage} />
            <span className="text-sm text-gray-500">
              {ratingsAverage} ({ratingsQuantity} reviews)
            </span>
          </div>

          {/* السعر */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              {priceAfterDiscount || price} EGP
            </span>
            {priceAfterDiscount && (
              <>
                <span className="text-base text-gray-400 line-through">
                  {price} EGP
                </span>
                <span className="text-sm font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
                  {/* تأكد إن فانكشن setDiscount متعرفة عندك */}
                  Save {price - priceAfterDiscount} EGP
                </span>
              </>
            )}
          </div>

          <hr className="border-gray-200" />

          {/* الوصف */}
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

          {/* الكوانتيتي */}
          <p className="text-sm text-gray-500">
            Only {quantity} items left in stock
          </p>

          {/* الباتونات */}
          <div className="grid grid-cols-2 gap-3 mt-1">
            {isAdded ? (
              <button
                onClick={handleDeleteIsAdded}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm bg-red-500 hover:bg-red-600 text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={handleAddedIsAdded}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm bg-primary-500 hover:bg-primary-600 text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Add to Cart
              </button>
            )}

            <button className="flex items-center justify-center py-3 rounded-xl font-medium text-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200 text-gray-700">
              Buy Now
            </button>
          </div>

          <hr className="border-gray-200" />

          {/* الفيتشرز */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-primary-500 text-sm"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Free Delivery
                </p>
                <p className="text-xs text-gray-500">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon
                  icon={faRotateLeft}
                  className="text-primary-500 text-sm"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  30 Days Return
                </p>
                <p className="text-xs text-gray-500">
                  Satisfaction guaranteed or money back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
