import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faRotateRight,
  faCircleExclamation,
  faCircleCheck,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { useGetUserOrders } from "../../Hooks/userOrders";
import Loading from "../../components/Loading/Loading";
import OrdersSkelton from "../../components/Skelton/OrdersSkelton";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function Orders() {
  const { userInfo } = useContext(AuthContext);
  const { orders, isLoading } = useGetUserOrders({ userId: userInfo?.id });

  if (isLoading) return <OrdersSkelton />;

  return (
    <div className="px-4 md:px-6 py-6">
      {/* هيدر */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-bold text-gray-800">My Orders</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 cursor-pointer">
            <span>All Orders</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-xs text-gray-400"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="bg-white border border-gray-200 rounded-xl pl-3 pr-9 py-2 text-sm text-gray-700 outline-none w-40"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-3 top-2.5 text-gray-400 text-sm"
            />
          </div>
        </div>
      </div>

      {/* فاضي */}
      {orders?.length === 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl py-16 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faBoxOpen}
            className="text-gray-300 text-5xl mb-4"
          />
          <h3 className="text-base font-bold text-gray-700">No orders found</h3>
          <p className="text-sm text-gray-400 mt-1 mb-5">
            You haven't placed any orders yet.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-colors">
            Start Shopping
          </button>
        </div>
      )}

      {/* الأوردرات */}
      <div className="flex flex-col gap-4">
        {orders?.map((order) => {
          const totalItemsCount =
            order.cartItems?.reduce((acc, item) => acc + item.count, 0) || 0;
          const visibleItems = order.cartItems?.slice(0, 4) || [];
          const remainingCount =
            (order.cartItems?.length || 0) - visibleItems.length;

          return (
            <div
              key={order.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              {/* هيدر الكارد */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-gray-100 pb-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-gray-800">
                      Order #{order.id}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1 ${order.isDelivered ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-[10px]"
                      />
                      {order.isDelivered ? "Delivered" : "Processing"}
                    </span>
                    <span
                      className={`text-xs font-medium flex items-center gap-1 ${order.isPaid ? "text-green-600" : "text-red-500"}`}
                    >
                      <FontAwesomeIcon
                        icon={
                          order.isPaid ? faCircleCheck : faCircleExclamation
                        }
                        className="text-xs"
                      />
                      {order.isPaid ? "Paid" : "Unpaid"}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    Placed on {formatDate(order.createdAt)}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
                  <button className="flex items-center gap-1.5 hover:text-gray-800 transition-colors">
                    <FontAwesomeIcon
                      icon={faRotateRight}
                      className="text-green-600"
                    />
                    Reorder
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-gray-800 transition-colors">
                    <FontAwesomeIcon icon={faEye} />
                    View Details
                  </button>
                </div>
              </div>

              {/* الصور */}
              <div className="flex items-center gap-2 mb-4">
                {visibleItems.map((item) => (
                  <div
                    key={item._id}
                    className="relative w-14 h-14 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                    {item.count > 1 && (
                      <span className="absolute top-1 right-1 bg-gray-800/80 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {item.count}
                      </span>
                    )}
                  </div>
                ))}
                {remainingCount > 0 && (
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-gray-500">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </div>

              {/* التفاصيل والأزرار */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-50">
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Items</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {totalItemsCount} items
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Total</p>
                    <p className="text-sm font-bold text-gray-700">
                      {order.totalOrderPrice} EGP
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Delivered to</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {order.shippingAddress?.city || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {!order.isDelivered && (
                    <>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-2 px-4 rounded-xl transition-colors">
                        Track Order
                      </button>
                      <button className="bg-white border border-gray-200 text-gray-500 text-xs font-semibold py-2 px-4 rounded-xl hover:bg-gray-50 transition-colors">
                        Cancel Order
                      </button>
                    </>
                  )}
                  {!order.isPaid && (
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-4 rounded-xl transition-colors">
                      Complete Payment
                    </button>
                  )}
                  {order.isDelivered && order.isPaid && (
                    <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-xl transition-colors">
                      Reorder Items
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* باجينيشن */}
        {orders?.length > 0 && (
          <div className="flex justify-between items-center text-xs text-gray-400 font-medium mt-1 px-1">
            <span>Showing {orders.length} orders</span>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                &lt;
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-green-500 text-white font-bold">
                1
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
