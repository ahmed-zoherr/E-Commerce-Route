export default function DashboardSkelton() {
  return (
    <div className="px-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <div className="h-6 bg-gray-200 rounded w-64 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-96"></div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm"
          >
            <div className="w-11 h-11 rounded-xl flex-shrink-0 bg-gray-200"></div>
            <div className="flex-1">
              <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
              <div className="h-5 bg-gray-200 rounded w-12"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 bg-gray-200 rounded w-32"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>

        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded w-16 mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
              <div className="text-right">
                <div className="h-4 bg-gray-200 rounded w-20 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        {[1, 2].map((index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gray-200 flex-shrink-0"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
