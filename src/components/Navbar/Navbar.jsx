import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAddressCard,
  faBars,
  faBox,
  faCartShopping,
  faPhone,
  faRightToBracket,
  faSpinner,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import freshCartLogo from "../../../src/assets/Images/freshcart-logo.svg";
import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { useOnlineStatus } from "../../Hooks/useOnlineStatus";
import { useGetCart } from "../../Hooks/useGetCart";
import NavbarSkelton from "../Skelton/NavbarSkelton";

export default function Navbar() {
  const { isOnline } = useOnlineStatus();
  const [isOpen, setIsOpen] = useState(false);

  const { Logout, token } = useContext(AuthContext);
  const { cart, isLoading } = useGetCart();

  if (isLoading) {
    return <NavbarSkelton />;
  }

  const navLinkClass = ({ isActive }) =>
    `${isActive ? "text-primary-500" : ""} flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container">
          {/* Top Navbar */}
          <div className="hidden lg:flex justify-between py-2 border-b border-gray-300/50">
            <ul className="text-sm flex gap-4 items-center *:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1(700)859-896">+1 (700) 859-896</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
              {isOnline && (
                <li className="text-primary-500 font-medium">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Online</span>
                </li>
              )}
            </ul>
          </div>

          {/* Main Navbar */}
          <nav className="py-6 flex justify-between items-center">
            <h1>
              <NavLink to="/">
                <img src={freshCartLogo} alt="fresh cart logo" />
              </NavLink>
            </h1>

            {/* تم إزالة الـ search bar من هنا */}

            <ul className="hidden lg:flex justify-between items-center gap-4 xl:gap-8">
              {token ? (
                <>
                  <li>
                    <NavLink to="/account/orders" className={navLinkClass}>
                      <FontAwesomeIcon className="text-lg" icon={faBox} />
                      <span>My Orders</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/wishlist" className={navLinkClass}>
                      <FontAwesomeIcon className="text-lg" icon={faHeart} />
                      <span>WishList</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className={navLinkClass}>
                      <div className="relative flex">
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faCartShopping}
                        />
                        <span className="absolute size-4 rounded-full bg-primary-600 top-0 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center text-white text-xs">
                          {isLoading ? (
                            <FontAwesomeIcon icon={faSpinner} spin />
                          ) : cart?.numOfCartItems > 0 ? (
                            cart?.numOfCartItems
                          ) : (
                            0
                          )}
                        </span>
                      </div>
                      <span>Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/account" className={navLinkClass}>
                      <FontAwesomeIcon className="text-lg" icon={faUser} />
                      <span>Account</span>
                    </NavLink>
                  </li>
                  <li
                    onClick={Logout}
                    className="cursor-pointer flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faRightToBracket}
                    />
                    <span>Logout</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center gap-4 mr-4 border-r pr-6 border-gray-300">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </a>
                  </li>
                  <li>
                    <NavLink to="/signup" className={navLinkClass}>
                      <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                      <span>Signup</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={navLinkClass}>
                      <FontAwesomeIcon
                        className="text-lg"
                        icon={faAddressCard}
                      />
                      <span>Login</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn bg-primary-500 lg:hidden text-white px-3 py-2 rounded-md"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden relative">
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-20 bg-black/50"
            ></div>
            <div className="fixed z-40 bg-white top-0 right-0 bottom-0 w-3/4 max-w-sm p-5 shadow-xl flex flex-col gap-5 overflow-y-auto">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <img src={freshCartLogo} alt="FreshCart" className="h-8" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </div>

              {/* تم إزالة الـ search bar من الموبايل */}

              <div className="flex-1">
                <ul className="space-y-4 text-gray-700">
                  {token ? (
                    <>
                      <li>
                        <NavLink
                          to="/account/orders"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <FontAwesomeIcon icon={faBox} /> My Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/wishlist"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <FontAwesomeIcon icon={faHeart} /> WishList
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/cart"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <FontAwesomeIcon icon={faCartShopping} /> Cart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/account"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <FontAwesomeIcon icon={faUser} /> Account
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            Logout();
                            setIsOpen(false);
                          }}
                          className="flex items-center gap-3 text-red-500 w-full text-left"
                        >
                          <FontAwesomeIcon icon={faRightToBracket} /> Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          to="/signup"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <FontAwesomeIcon icon={faUserPlus} /> Signup
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/login"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3"
                        >
                          <FontAwesomeIcon icon={faAddressCard} /> Login
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
