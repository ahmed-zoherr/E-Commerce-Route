export default function WishlistSkelton() {
  return (
    <div className="container p-10">
      <div className="px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="h-6 bg-gray-200 rounded w-40 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 shadow-sm"
            >
              {/* Product Image */}
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200"></div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
