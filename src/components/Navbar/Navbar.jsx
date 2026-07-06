import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAddressCard,
  faBabyCarriage,
  faBars,
  faBolt,
  faBox,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightToBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import freshCartLogo from "../../../src/assets/Images/freshcart-logo.svg";
import { Link, NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
// import { CartContext } from "../../context/Cart.context";
import { useOnlineStatus } from "../../Hooks/useOnlineStatus";
import { useGetCart } from "../../Hooks/useGetCart";
import Loading from "../Loading/Loading";
import NavbarSkelton from "../Skelton/NavbarSkelton";
// import { faEnvelope, faAddressCard } from './../../../node_modules/@fortawesome/free-solid-svg-icons/index.d';

export default function Navbar() {
  const { isOnline } = useOnlineStatus();
  const [isOpen, setIsOpen] = useState(false);

  const { Logout, setToken, token } = useContext(AuthContext);
  // const { cartInfo, isLoading } = useContext(CartContext);
  const { cart, isLoading } = useGetCart();
  if (isLoading) {
    return <NavbarSkelton />;
  }
  // const { cartId, data, numOfCartItems } = cart;
  // const { products, totalCartPrice, _id, createdAt } = data;
  console.log(cart);

  // console.log(cartInfo.numOfCartItems);

  return (
    <>
      <header>
        <div className="container">
          {/* هنا لازم نخلي الكونتاينر بتاع التيلويند في السنتر بالظبط  */}
          {/* top navbar */}
          <div className="hidden lg:flex justify-between py-2 border-b border-gray-300/50">
            <ul className=" text-sm flex justify-between gap-2.5 items-center *:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (700) 859-896">+1 (700) 859-896</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:   support@freshcart.com">
                  support@freshcart.com
                </a>
              </li>
              {isOnline && (
                <li className="text-primary-500">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>online</span>
                </li>
              )}
            </ul>
            <ul className="flex justify-between gap-2 items-center">
              <li>
                <Link to={`track-order`}>Track order</Link>
              </li>
              <li>
                <Link to={`about`}>about</Link>
              </li>
              <li>
                <Link to={`contact`}>
                  {/* 
                  هو هنا مش المفروض نعهمل سلاش ؟ 
                   */}
                  contact
                </Link>
              </li>
              <li>
                <select name="" id="">
                  <option value="sar">sar</option>
                  <option value="egp">egp</option>
                  <option value="add">add</option>
                </select>
              </li>
              <li>
                <select name="" id="">
                  <option value="">العربية</option>
                  <option value="">english</option>
                </select>
              </li>
            </ul>
          </div>
          {/* main navbar */}
          <nav className=" py-6 flex justify-between items-center">
            <h1>
              <NavLink to={`/`}>
                <img src={freshCartLogo} alt="fresh cart logo" />
              </NavLink>
            </h1>
            {/* search instead of div....and it is okay */}
            <search className="relative hidden lg:block">
              <input type="text" className="form-control min-w-96" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              />
            </search>
            <ul className="hidden lg:flex justify-between items-start gap-4 xl:gap-8">
              <li>
                <NavLink
                  to={`order`}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}
                  flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon className={`text-lg`} icon={faBox} />
                  <span>My Orders</span>
                </NavLink>
              </li>
              {token && (
                <li>
                  <NavLink
                    to={`wishlist`}
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-500" : ""}
                  flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon className={`text-lg`} icon={faHeart} />
                    <span>WishList</span>
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to={`cart`}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}
                  flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <div className="relative flex">
                    <FontAwesomeIcon
                      className={`text-lg`}
                      icon={faCartShopping}
                    />
                    <span className="absolute size-4 rounded-full bg-primary-600 top-0 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center text-white text-sm">
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
                <NavLink
                  to={`account`}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-500" : ""}
                  flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon className={`text-lg`} icon={faUser} />
                  <span>account</span>
                </NavLink>
              </li>
              {!token ? (
                <>
                  <li>
                    <NavLink
                      to={`signup`}
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}
                  flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon
                        className={`text-lg`}
                        icon={faUserPlus}
                      />
                      <span>signup</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`login`}
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}
                  flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon
                        className={`text-lg`}
                        icon={faAddressCard}
                      />
                      <span>login</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li
                  onClick={() => Logout()}
                  className={` cursor-pointer flex flex-col gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`}
                >
                  <FontAwesomeIcon
                    className={`text-lg`}
                    icon={faRightToBracket}
                  />
                  <span>logout</span>
                  {/* </NavLink> */}
                </li>
              )}
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn bg-primary-500 lg:hidden text-white"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>
        {/* third navbar */}
        <nav className="hidden lg:block bg-gray-100 py-4">
          <div className="container flex items-center gap-8">
            <div className="relative group">
              <button className="btn flex items-center gap-3 bg-primary-500 text-white hover:bg-primary-700">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <menu className="absolute z-10 hidden group-hover:block top-10 min-w-60 left-1/2 -translate-x-1/2 *:hover:bg-gray-100 *:py-3 *:px-3 rounded-lg bg-white shadow  divide-y-2 divide-gray-300/20">
                <li>
                  <Link className={`flex items-center gap-2.5`}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faPerson}
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-2.5`}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faPersonDress}
                    />
                    <span>Woman's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-2.5 `}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faBabyCarriage}
                    />
                    <span>toy's & children</span>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-2.5`}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faPerson}
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-2.5`}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faSuitcaseMedical}
                    />
                    <span>health </span>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-2.5`}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faBolt}
                    />
                    <span>Elctronics</span>
                  </Link>
                </li>
                <li>
                  <Link className={`flex items-center gap-2.5`}>
                    <FontAwesomeIcon
                      fixed-width
                      className={`text-primary-500`}
                      icon={faEllipsis}
                    />
                    <span>View all categories</span>
                  </Link>
                </li>
              </menu>
            </div>
            <ul className="flex gap-3 items-center">
              <li>
                <NavLink to={`/`}>home</NavLink>
              </li>

              <li>
                <a href="#FeaturedProducts">featured proudcts</a>
              </li>

              <li>
                <a href="#HomeDeals">offers</a>
              </li>
            </ul>
          </div>
        </nav>
        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="  background bg-black/50 fixed inset-0 z-20 animate-slide-in"
            ></div>
            <div className=" navbar space-y-5 fixed z-40 bg-white top-0 bottom-0 p-5 ">
              <div className="flex justify-between items-center border-b-2 border-gray-200/40 pt-2 pb-4">
                <img src={freshCartLogo} alt="" />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="btn rounded-full"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <search className="relative">
                <input type="text" className="form-control min-w-64" />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                />
              </search>
              <div className="py-2 border-b-2 border-gray-200/40">
                <h2 className="text-xl font-semibold capitalize mb-3">menu</h2>
                <ul className="space-y-3 *:hover:bg-gray-100 transition-colors duration-100 *:py-1.5">
                  <li>
                    <NavLink
                      to={`wishlist`}
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}
                  flex gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className={`text-lg`} icon={faHeart} />
                      <span>WishList</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`cart`}
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}
                  flex gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon
                        className={`text-lg`}
                        icon={faCartShopping}
                      />
                      <span>Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`account`}
                      className={({ isActive }) => {
                        return `${isActive ? "text-primary-500" : ""}
                  flex gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className={`text-lg`} icon={faUser} />
                      <span>account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-xl capitalize font-semibold mb-3">
                  account
                </h2>
                <ul className="space-y-3 *:hover:bg-gray-100 transition-colors duration-100 *:py-1.5">
                  {!token ? (
                    <>
                      <li>
                        <NavLink
                          to={`signup`}
                          className={({ isActive }) => {
                            return `${isActive ? "text-primary-500" : ""}
                  flex gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                          }}
                        >
                          <FontAwesomeIcon
                            className={`text-lg`}
                            icon={faUserPlus}
                          />
                          <span>signup</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`login`}
                          className={({ isActive }) => {
                            return `${isActive ? "text-primary-500" : ""}
                  flex gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`;
                          }}
                        >
                          <FontAwesomeIcon
                            className={`text-lg`}
                            icon={faAddressCard}
                          />
                          <span>login</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li
                      onClick={Logout}
                      className={` cursor-pointer flex gap-0.5 items-center hover:text-primary-500 transition-colors duration-200`}
                    >
                      {/* <NavLink to={`logout`}> */}
                      {/* هنا احنا شيلنا اللينك عشان لوجيك اللوج اوت لسا هكتشف قدام */}
                      <FontAwesomeIcon
                        className={`text-lg`}
                        icon={faRightToBracket}
                      />
                      <span>logout</span>
                      {/* </NavLink> */}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
