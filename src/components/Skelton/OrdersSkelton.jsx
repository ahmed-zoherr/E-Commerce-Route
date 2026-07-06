export default function OrdersSkelton() {
  return (
    <div className="px-4 md:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="h-7 bg-gray-200 rounded w-32"></div>
        <div className="flex items-center gap-2">
          <div className="h-9 bg-gray-200 rounded-xl w-32"></div>
          <div className="h-9 bg-gray-200 rounded-xl w-40"></div>
        </div>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
          >
            {/* Card Header */}
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-gray-100 pb-4 mb-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                  <div className="h-5 bg-gray-200 rounded w-20"></div>
                  <div className="h-5 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 bg-gray-200 rounded w-16"></div>
                <div className="h-5 bg-gray-200 rounded w-20"></div>
              </div>
            </div>

            {/* Product Images */}
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-14 h-14 bg-gray-200 rounded-xl flex-shrink-0"
                ></div>
              ))}
            </div>

            {/* Order Details */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-50">
              <div className="flex gap-6">
                <div>
                  <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div>
                  <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
                <div>
                  <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="h-9 bg-gray-200 rounded-xl w-24"></div>
                <div className="h-9 bg-gray-200 rounded-xl w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-xs text-gray-400 font-medium mt-6 px-1">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="flex items-center gap-1">
          <div className="w-7 h-7 bg-gray-200 rounded-lg"></div>
          <div className="w-7 h-7 bg-gray-200 rounded-lg"></div>
          <div className="w-7 h-7 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
