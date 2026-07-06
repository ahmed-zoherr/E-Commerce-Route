export default function CartSkelton() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-40 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>

          <hr className="border-gray-100 mb-6" />

          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="flex gap-4 pb-4 border-b border-gray-100"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="flex justify-between items-end">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-8 bg-gray-200 rounded w-12"></div>
                  </div>
                </div>

                {/* Delete Icon */}
                <div className="w-6 h-6 bg-gray-200 rounded flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="h-6 bg-gray-200 rounded w-32 mb-5"></div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="h-3 bg-gray-200 rounded w-24"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-14"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-3 bg-gray-200 rounded w-14"></div>
              </div>
            </div>

            <hr className="border-gray-100 my-4" />

            <div className="flex items-center justify-between mb-5">
              <div className="h-4 bg-gray-200 rounded w-12"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
            </div>
          </div>

          {/* Free Delivery Info */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded flex-shrink-0 mt-0.5"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>

          {/* Secure Checkout Info */}
          <div className="bg-gray-100 rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded flex-shrink-0 mt-0.5"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-28 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-36"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
