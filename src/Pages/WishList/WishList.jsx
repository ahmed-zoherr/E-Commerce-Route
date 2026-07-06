import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrash,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useGetWishlist } from "../../Hooks/useWishlist";
import Loading from "../../components/Loading/Loading";
import WishlistSkelton from "../../components/Skelton/WishlistSkelton";

const wishlistItems = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    category: "Electronics",
    price: 45999,
    originalPrice: 52000,
    rating: 4.8,
    reviews: 320,
    image: "https://placehold.co/200x200?text=iPhone",
  },
  {
    id: 2,
    title: "Nike Air Max 270",
    category: "Shoes",
    price: 3200,
    originalPrice: 4500,
    rating: 4.5,
    reviews: 185,
    image: "https://placehold.co/200x200?text=Nike",
  },
  {
    id: 3,
    title: 'Samsung 65" QLED TV',
    category: "Electronics",
    price: 28999,
    originalPrice: 35000,
    rating: 4.7,
    reviews: 210,
    image: "https://placehold.co/200x200?text=Samsung",
  },
  {
    id: 4,
    title: "Dyson V15 Vacuum",
    category: "Home Appliances",
    price: 12500,
    originalPrice: 15000,
    rating: 4.6,
    reviews: 98,
    image: "https://placehold.co/200x200?text=Dyson",
  },
];

export default function WishList() {
  const { wishlist, isLoading } = useGetWishlist();
  if (isLoading) {
    return <WishlistSkelton />;
  }
  return (
    <div className="container p-10">
      <div className="px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">My Wishlist</h1>
            <p className="text-sm text-gray-400 mt-0.5">
              {wishlist?.length} items saved
            </p>
          </div>
          <button className="text-sm text-red-400 hover:text-red-600 font-medium transition-colors">
            Clear All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlist?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* صورة المنتج */}
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                <img
                  src={item.imageCover}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* تفاصيل المنتج */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                    {item.category.name}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800 mt-1.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {/* الريتينج */}
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

                {/* السعر والأكشن */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900">
                      {item?.priceAfterDiscount} EGP
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* حذف */}
                    <button className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all">
                      <FontAwesomeIcon icon={faTrash} className="text-xs" />
                    </button>
                    {/* إضافة للكارت */}
                    <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-green-500 hover:bg-green-600 text-white transition-colors">
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

        {/* لو الويشلست فاضية */}
        {wishlistItems.length === 0 && (
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
            <button className="mt-4 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
