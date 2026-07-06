import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faHeart,
  faLocationDot,
  faChartLine,
  faCircleCheck,
  faClock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { useGetUserOrders } from "../../Hooks/userOrders";
import { useGetWishlist } from "../../Hooks/useWishlist";
import DashboardSkelton from "../Skelton/DashboardSkelton";

export default function Dashboard() {
  const { orders, isLoading } = useGetUserOrders();
  const { wishlist } = useGetWishlist();

  const recentOrders = orders?.slice(0, 3) ?? [];
  const totalOrders = orders?.length ?? 0;
  const totalWishlist = wishlist?.length ?? 0;
  const totalSpent =
    orders?.reduce((acc, order) => acc + order.totalOrderPrice, 0) ?? 0;
  if (isLoading) {
    return <DashboardSkelton />;
  }
  return (
    <div className="px-6">
      {/* ترحيب */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Welcome back! 👋</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* الستاتس */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 text-blue-500">
            <FontAwesomeIcon icon={faBox} className="text-lg" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Total Orders</p>
            <p className="text-lg font-bold text-gray-800 mt-0.5">
              {totalOrders}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-red-50 text-red-400">
            <FontAwesomeIcon icon={faHeart} className="text-lg" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Wishlist Items</p>
            <p className="text-lg font-bold text-gray-800 mt-0.5">
              {totalWishlist}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-yellow-50 text-yellow-500">
            <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Saved Addresses</p>
            <p className="text-lg font-bold text-gray-800 mt-0.5">—</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-50 text-green-500">
            <FontAwesomeIcon icon={faChartLine} className="text-lg" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Total Spent</p>
            <p className="text-lg font-bold text-gray-800 mt-0.5">
              {totalSpent} EGP
            </p>
          </div>
        </div>
      </div>

      {/* أحدث الأوردرات */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-gray-800">Recent Orders</h2>
          <Link
            to="../order"
            className="text-xs text-green-500 font-medium hover:text-green-600"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {isLoading && <p className="text-sm text-gray-400">Loading...</p>}
          {!isLoading && recentOrders.length === 0 && (
            <p className="text-sm text-gray-400">No orders yet.</p>
          )}
          {recentOrders.map((order) => (
            <div
              key={order._id}
              className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-green-50 text-green-500">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    #{order._id?.slice(-6)}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">
                  {order.totalOrderPrice} EGP
                </p>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-500">
                  {order.status ?? "Confirmed"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* لينكات سريعة */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          to="../addrress"
          className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex items-center gap-3 hover:border-green-200 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <span className="text-sm font-medium text-gray-700">
            My Addresses
          </span>
        </Link>
        <Link
          to="../account-details"
          className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex items-center gap-3 hover:border-green-200 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Account Details
          </span>
        </Link>
      </div>
    </div>
  );
}
