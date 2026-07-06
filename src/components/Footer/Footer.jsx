import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FreshCartlogo from "../../assets/Images/freshcart-logo.svg";
import FreshCartlminiLogo from "../../assets/Images/mini-logo.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-900 text-gray-300">
      <div className="container">
        <div className="grid xl:grid-cols-5 py-8 md:grid-cols-2 gap-8">
          {/* الشعار والوصف */}
          <div className="xl:col-span-2 space-y-4">
            <img
              src={FreshCartlogo}
              alt="Fresh Cart logo"
              className="brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              FreshCart brings fresh groceries, fashion, and everyday essentials
              straight to your door. Shop smarter with fast delivery, secure
              payment, and quality you can trust.
            </p>
            <ul className="flex items-center gap-4 *:text-gray-400 *:hover:text-primary-400 *:transition-colors *:duration-300 text-lg">
              <li>
                <a href="" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="" aria-label="X (Twitter)">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li>
                <a href="" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>

          {/* الأقسام */}
          <div>
            <h2 className="font-bold text-lg mb-4 text-white">Categories</h2>
            <ul className="space-y-3.5 text-sm *:hover:text-primary-400 *:transition-colors *:duration-200">
              <li>
                <Link to="">Men's fashion</Link>
              </li>
              <li>
                <Link to="">Women's fashion</Link>
              </li>
              <li>
                <Link to="">Baby & toys</Link>
              </li>
              <li>
                <Link to="">Beauty & health</Link>
              </li>
              <li>
                <Link to="">Electronics</Link>
              </li>
            </ul>
          </div>

          {/* روابط سريعة */}
          <div>
            <h2 className="font-bold text-lg mb-4 text-white">Quick links</h2>
            <ul className="space-y-3.5 text-sm *:hover:text-primary-400 *:transition-colors *:duration-200">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of service</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Shipping policy</Link>
              </li>
            </ul>
          </div>

          {/* خدمة العملاء */}
          <div>
            <h2 className="font-bold text-lg mb-4 text-white">
              Customer service
            </h2>
            <ul className="space-y-3.5 text-sm *:hover:text-primary-400 *:transition-colors *:duration-200">
              <li>
                <Link to="/account">My account</Link>
              </li>
              <li>
                <Link to="/orders">My orders</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/returns-and-refunds">Returns & refunds</Link>
              </li>
              <li>
                <Link to="/help-center">Help center</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* الفوتر السفلي */}
        <div className="py-4 flex justify-between items-center border-t border-gray-700 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>
          <img
            src={FreshCartlminiLogo}
            className="w-8"
            alt="FreshCart mini logo"
          />
        </div>
      </div>
    </footer>
  );
}
