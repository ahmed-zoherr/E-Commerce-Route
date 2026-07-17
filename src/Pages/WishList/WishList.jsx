import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrash,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useGetWishlist, useRemoveFromWishlist } from "../../Hooks/useWishlist";
import { useAddToCart } from "../../Hooks/useAddToCart";
import WishlistSkelton from "../../components/Skelton/WishlistSkelton";
import MetaData from "../../components/MetaData/MetaData";
import { Link } from "react-router";

export default function WishList() {
  const { wishlist, isLoading } = useGetWishlist();
  const { removeFromWishlist, isPending: isRemoving } = useRemoveFromWishlist();
  const { addToCart } = useAddToCart();

  if (isLoading) {
    return <WishlistSkelton />;
  }

  return (
    <>
      <MetaData
        title="My Wishlist - Fresh Cart"
        description="View and manage the products you've saved to your wishlist on Fresh Cart."
      />
      <div className="container p-10">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800">My Wishlist</h1>
              <p className="text-sm text-gray-400 mt-0.5">
                {wishlist?.length} items saved
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wishlist?.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                  <img
                    src={item.imageCover}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                      {item.category.name}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-800 mt-1.5 leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1 mt-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400 text-xs"
                      />
                      <span className="text-xs text-gray-500">
                        {item.ratingsAverage} ({item.ratingsQuantity})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        {item?.priceAfterDiscount ?? item.price} EGP
                      </span>
                      {item?.priceAfterDiscount && (
                        <span className="text-xs text-gray-400 line-through">
                          {item.price.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          removeFromWishlist({ productId: item.id })
                        }
                        disabled={isRemoving}
                        className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all disabled:opacity-40"
                      >
                        <FontAwesomeIcon icon={faTrash} className="text-xs" />
                      </button>

                      <button
                        onClick={() => addToCart({ id: item.id })}
                        className="w-8 h-8 flex items-center justify-center rounded-xl bg-green-500 hover:bg-green-600 text-white transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="text-xs"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {wishlist?.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red-300 text-2xl"
                />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg">
                Your wishlist is empty
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Save items you love to your wishlist
              </p>
              <Link
                to={`/`}
                className="mt-4 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
