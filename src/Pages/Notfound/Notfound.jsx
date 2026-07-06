import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPhone,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import NotFoundImg from "../../assets/Images/undraw_feeling-blue_8si6.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Image */}
      <div className="w-full max-w-md mb-8">
        <img src={NotFoundImg} alt="Page Not Found" className="w-full" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-400 text-center mb-2">
        The page you're looking for seems to have gone shopping!
      </p>
      <p className="text-gray-400 text-center mb-8">
        Don't worry, our fresh products are still available for you.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-10">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-md">
          <FontAwesomeIcon icon={faHouse} />
          Back to Home
        </button>
        <button className="flex items-center gap-2 border border-green-500 text-green-600 hover:bg-green-50 font-semibold px-6 py-2.5 rounded-md">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search Products
        </button>
      </div>

      {/* Need Help */}
      <div className="w-full max-w-lg border border-gray-200 rounded-xl bg-white py-6 px-8 text-center mb-10">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Need Help?</h2>
        <p className="text-gray-400 text-sm mb-4">
          Our customer support team is here to assist you 24/7
        </p>
        <div className="flex items-center justify-center flex-wrap gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-green-500" />
            +1 (800) 123-4567
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
            support@freshcart.com
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faComment} className="text-green-500" />
            Live Chat
          </span>
        </div>
      </div>

      {/* Newsletter */}
      <div className="w-full max-w-lg text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Stay updated with our latest offers, recipes, and health tips.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-green-400"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-md text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
