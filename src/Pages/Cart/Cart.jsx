import {
  faTrash,
  faMinus,
  faPlus,
  faTruck,
  faShield,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import ProductCart from "../../components/ProductCart/ProductCart";
import { useGetCart } from "../../Hooks/useGetCart";
import CartSkelton from "../../components/Skelton/CartSkelton";
import MetaData from "../../components/MetaData/MetaData";

export default function Cart() {
  // 1. استدعاء البيانات
  const { cart, isLoading } = useGetCart();
  console.log("الـ Object الكامل اللي جاي من الـ API:", cart);
  if (isLoading) return <CartSkelton />;
  const cartData = cart || {};
  const products = cartData.data.products || [];
  const totalCartPrice = cartData?.data?.totalCartPrice || 0;

  return (
    <>
      <MetaData
        title="Shopping Cart"
        description="Manage your selected products in the shopping cart"
        keywords="shopping, cart, products, online store"
        author="fresh cart team"
      />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* الجانب الأيسر: قائمة المنتجات */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
              <p className="text-sm text-gray-400 mt-1">
                {products?.length} items in your cart
              </p>
            </div>

            <hr className="border-gray-100 mb-6" />

            <div className="flex flex-col gap-4">
              {products.length > 0 ? (
                products.map((item) => (
                  <ProductCart key={item.id} ProductInfo={item} />
                ))
              ) : (
                <div className="text-lg flex gap-2 items-center">
                  <p>Your Cart Is Empty</p>
                  <FontAwesomeIcon
                    className="text-primary-500"
                    icon={faShoppingCart}
                  />
                </div>
              )}
            </div>
          </div>

          {/* الجانب الأيمن: ملخص الطلب */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Subtotal ({products.length} items)
                  </span>
                  <span className="font-medium text-gray-800">
                    {totalCartPrice} EGP
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-primary-500">
                    {products.length > 0 ? `70 EGP` : `0 EGP`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="font-medium text-gray-800">
                    {Math.trunc(totalCartPrice * 0.14)} EGP
                  </span>
                </div>
              </div>

              <hr className="border-gray-100 my-4" />

              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">Total</span>
                <span className="text-base font-bold text-gray-900">
                  {products.length > 0
                    ? Math.trunc(totalCartPrice + 70 + totalCartPrice * 0.14)
                    : `0 EGP`}
                </span>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <Link
                  to={`/checkout`}
                  className={`w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 ${
                    products.length === 0
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/"
                  className="w-full text-center border border-gray-200 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* معلومات إضافية */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-primary-500 mt-0.5"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Free Delivery
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Your order qualifies for free delivery.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <FontAwesomeIcon
                icon={faShield}
                className="text-primary-500 mt-0.5"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Secure Checkout
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Your payment information is protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
