import Stars from "../stars/Stars";

export default function ReviewsTaps({ productDetails }) {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          Customer Reviews
        </h3>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-800">Ahmed Ali</span>
            <Stars rating={productDetails.ratingsAverage} />
          </div>
          <p className="text-gray-600 text-sm">
            Excellent product, highly recommended! The quality exceeded my
            expectations and the packaging was very secure.
          </p>
        </div>

        <div className="pb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-800">Sarah Mohamed</span>
            <Stars rating={productDetails.ratingsAverage} />
          </div>
          <p className="text-gray-600 text-sm">
            Good material and matches the picture, but the delivery was two days
            late.
          </p>
        </div>
      </div>
    </>
  );
}
