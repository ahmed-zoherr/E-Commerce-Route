import {
  faUser,
  faBox,
  faGaugeHigh,
  faLocationDot,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "flex items-center gap-3 px-4 py-3 text-green-600 bg-green-50 rounded-xl font-medium text-sm"
    : "flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium text-sm";

export default function AccountLayout() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container py-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* السايدبار */}
          <aside className="w-full lg:w-72 lg:flex-shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-fit">
            {/* البروفايل */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
              <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  Usama Ali
                </p>
                <p className="text-xs text-gray-400 truncate">
                  user@example.com
                </p>
              </div>
            </div>

            {/* القائمة */}
            <nav className="flex flex-col gap-1">
              <NavLink to="" end className={navLinkClass}>
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="w-5 text-center"
                />
                <span>Dashboard</span>
              </NavLink>

              <NavLink to="orders" className={navLinkClass}>
                <FontAwesomeIcon icon={faBox} className="w-5 text-center" />
                <span>Orders</span>
              </NavLink>

              <NavLink to="addrress" className={navLinkClass}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-5 text-center"
                />
                <span>Addresses</span>
              </NavLink>

              <NavLink to="account-details" className={navLinkClass}>
                <FontAwesomeIcon icon={faUser} className="w-5 text-center" />
                <span>Account Details</span>
              </NavLink>

              <div className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 cursor-pointer font-medium text-sm mt-1">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="w-5 text-center"
                />
                <span>Logout</span>
              </div>
            </nav>
          </aside>

          {/* المحتوى */}
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}
