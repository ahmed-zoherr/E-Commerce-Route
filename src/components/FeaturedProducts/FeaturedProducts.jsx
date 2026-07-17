import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import useProducts from "../../Hooks/useProducts";
import FeaturedProductsSkelton from "../Skelton/FeaturedProductsSkelton";
import { useSearchParams } from "react-router";

export default function FeaturedProducts() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const { products, metadata, isLoading, error, isError } = useProducts(page);

  if (isLoading) {
    return <FeaturedProductsSkelton />;
  }

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery),
  );

  const totalPages = metadata?.numberOfPages || 1;

  return (
    <section id="FeaturedProducts">
      <div className="container p-6">
        <h2 className="text-xl font-semibold py-8">Featurd Product</h2>

        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-6 space-y-6">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg py-10">
              No products found
            </p>
          )}
        </div>

        {!searchQuery && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              disabled={page === 1}
              onClick={() => {
                setPage((p) => p - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>

            <span className="text-sm font-medium">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => {
                setPage((p) => p + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
