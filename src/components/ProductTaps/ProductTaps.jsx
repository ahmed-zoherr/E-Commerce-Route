import React, { useState } from "react";
import ProductInfoTap from "../ProductInfoTap/ProductInfoTap";
import ReviewsTaps from "../ReviewsTaps/ReviewsTaps";
import ShippingTaps from "../ShippingTaps/ShippingTaps";

export default function ProductTabs({ productDetails }) {
  const [isActive, setIsActive] = useState("ProductDetails");
  function getActiveTab() {
    switch (isActive) {
      case "ProductDetails":
        return <ProductInfoTap productDetails={productDetails} />;
      case "Reviews":
        return <ReviewsTaps productDetails={productDetails} />;
      case "Shipping&Returns":
        return <ShippingTaps />;
    }
  }
  return (
    <>
      <div className="container">
        <div className="w-full text-left  p-6 bg-gray-50/50">
          {/* التابات العلوية (Tabs) */}
          <div className="flex flex-wrap gap-8 border-b border-gray-200 mb-8">
            <button
              onClick={() => setIsActive("ProductDetails")}
              className={`${isActive === "ProductDetails" ? "text-green-600 border-b-2 border-green-600" : ""} pb-3 font-medium text-sm text-gray-500 transition-colors duration-800 `}
            >
              Product Details
            </button>

            <button
              onClick={() => setIsActive("Reviews")}
              className={`${isActive === "Reviews" ? "text-green-600 border-b-2 border-green-600" : ""} pb-3 font-medium text-sm text-gray-500 transition-colors duration-800  `}
            >
              Reviews
            </button>
            <button
              onClick={() => setIsActive("Shipping&Returns")}
              className={`${isActive === "Shipping&Returns" ? "text-green-600 border-b-2 border-green-600" : ""} pb-3 font-medium text-sm text-gray-500 transition-colors duration-800  `}
            >
              Shipping & Returns
            </button>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="text-black text-sm leading-relaxed py-3 ">
            {getActiveTab()}
            {/* وصف المنتج */}

            {/* تقسيم الشاشة لعمودين */}

            {/* الشهادات (Certifications) */}
          </div>
        </div>
      </div>
    </>
  );
}
