import { useEffect, useState } from "react";
// import {
//   faCartShopping,
//   faTruck,
//   faRotateLeft,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Stars from "../../components/stars/Stars";
import ProductTabs from "../../components/ProductTaps/ProductTaps";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { getProductById } from "../../services/Product-ser";
import { useProductDetails } from "../../Hooks/useProductsDetails";
import MetaData from "../../components/MetaData/MetaData";
// import Rating from "../components/Rating/Rating";

export default function ProductDetails() {
  //todo const params = useParams(); ممكن تشتغل بالطريقة دي
  //?
  const { id } = useParams();
  const { productDetails, isLoading, isError } = useProductDetails({ id: id });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MetaData
        title="Product Details - Fresh Cart"
        description="View detailed information about this product"
      />
      <ProductInfo productDetails={productDetails} />
      <ProductTabs productDetails={productDetails} />
      <RelatedProducts productDetails={productDetails} />
    </>
  );
}
