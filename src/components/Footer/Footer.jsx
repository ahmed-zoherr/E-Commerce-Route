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
        <div className="grid xl:grid-cols-4 py-8 md:grid-cols-2 gap-8">
          {/* الشعار والوصف */}
          <div className="xl:col-span-2 space-y-4">
            <img src={FreshCartlogo} alt="Fresh Cart logo" className="brightness-0 invert" />
            <p className="text-sm leading-relaxed text-gray-400">
              FreshCart brings fresh groceries, fashion, and everyday essentials straight to your door.
            </p>
          </div>

        
          <div>
            <h2 className="font-bold text-lg mb-4 text-white">Quick links</h2>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </div>

         
          <div>
            <h2 className="font-bold text-lg mb-4 text-white">Customer service</h2>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/account">My account</Link></li>
              <li><Link to="/account/orders">My orders</Link></li>
            </ul>
          </div>
        </div>

        {/* الفوتر السفلي */}
        <div className="py-4 flex justify-between items-center border-t border-gray-700 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
