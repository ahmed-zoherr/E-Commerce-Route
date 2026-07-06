import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/Product-ser";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import useProducts from "../../Hooks/useProducts";
import FeaturedProductsSkelton from "../Skelton/FeaturedProductsSkelton";
// import { ProductsContext } from "../../context/Product.Context";
// import { getAllProducts } from "../../services/products-service";
// import ProductCard from "../ProductCard/ProductCard";

export default function FeaturedProducts() {
  const { products, isLoading, error, isError } = useProducts();
  if (isLoading) {
    return <FeaturedProductsSkelton />;
  }
  return (
    <>
      <section id="FeaturedProducts">
        <div className="container p-6">
          <h2 className="text-xl font-semibold py-8">Featurd Product</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-6 space-y-6 ">
            {products?.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
