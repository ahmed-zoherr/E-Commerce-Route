import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeFeatures() {
  return (
    <section className="py-10 bg-white md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 container">
      <div className="flex items-center p-4 border border-gray-100 rounded-lg">
        <div className="w-12 h-12 bg-primary-400/30 text-primary-600 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <div className="ml-4">
          <h3 className="font-medium">Free Delivery</h3>
          <p className="text-sm text-gray-500">Orders $50 or more</p>
        </div>
      </div>

      <div className="flex items-center p-4 border border-gray-100 rounded-lg">
        <div className="w-12 h-12 bg-primary-400/30 text-primary-600 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faRotateLeft} />
        </div>
        <div className="ml-4">
          <h3 className="font-medium">30 Days Return</h3>
          <p className="text-sm text-gray-500">Satisfaction guaranteed</p>
        </div>
      </div>

      <div className="flex items-center p-4 border border-gray-100 rounded-lg">
        <div className="w-12 h-12 bg-primary-400/30 text-primary-600 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faShieldHalved} />
        </div>
        <div className="ml-4">
          <h3 className="font-medium">Secure Payment</h3>
          <p className="text-sm text-gray-500">100% protected checkout</p>
        </div>
      </div>

      <div className="flex items-center p-4 border border-gray-100 rounded-lg">
        <div className="w-12 h-12 bg-primary-400/30 text-primary-600 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faHeadset} />
        </div>
        <div className="ml-4">
          <h3 className="font-medium">24/7 Support</h3>
          <p className="text-sm text-gray-500">Dedicated customer care</p>
        </div>
      </div>
    </section>
  );
}
