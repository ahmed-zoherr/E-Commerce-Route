import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductInfoTap({ productDetails }) {
  const {
    id,
    title,
    description,
    category,
    images,
    price,
    priceAfterDiscount,
    ratingsAverage,
    quantity,
    ratingsQuantity,
  } = productDetails;
  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-sm text-gray-700 space-y-8">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{description}</h3>

        {/* Flex container for Benefits and Details */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Benefits */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Benefits
            </h4>
            <ul className="list-disc list-inside space-y-2 text-md">
              <li>Rich in vitamins C and K</li>
              <li>Good source of fiber and antioxidants</li>
              <li>Supports heart health</li>
              <li>Helps regulate blood sugar</li>
              <li>Promotes healthy skin</li>
            </ul>
          </div>

          {/* Right Section: Product Details */}
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Product Details
            </h4>
            <ul className="list-none space-y-2 text-md">
              <li>
                <span className="font-medium text-gray-900">Origin:</span>{" "}
                California, USA
              </li>
              <li>
                <span className="font-medium text-gray-900">Cultivation:</span>{" "}
                Organic
              </li>
              <li>
                <span className="font-medium text-gray-900">Storage:</span>{" "}
                Refrigerate upon arrival
              </li>
              <li>
                <span className="font-medium text-gray-900">Shelf Life:</span>{" "}
                5-7 days when refrigerated
              </li>
            </ul>
          </div>
        </div>

        {/* How to Store Section */}
        <div className="border-t border-gray-100 pt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            How to Store
          </h4>
          <p className="leading-relaxed text-md text-gray-600">
            For optimal freshness, refrigerate strawberries unwashed in their
            original container or in a paper towel-lined container. Wash just
            before eating. To extend shelf life, remove any damaged berries as
            soon as possible.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-gray-100 pt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Certifications
          </h4>
          <div className="flex flex-wrap gap-3">
            {/* Badge 1: USDA Organic */}
            <div className="flex items-center gap-2 border border-green-200 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faLeaf} className="w-4 h-4" />
              USDA Organic
            </div>
            {/* Badge 2: Non-GMO */}
            <div className="flex items-center gap-2 border border-green-200 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <FontAwesomeIcon icon={faLeaf} className="w-4 h-4" />
              Non-GMO
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
