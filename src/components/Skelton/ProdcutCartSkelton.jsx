export default function ProdcutCartSkelton() {
  return (
    <div className="flex items-center gap-4">
      {/* Product Image Skeleton */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0"></div>

      {/* Product Info Skeleton */}
      <div className="flex-1 min-w-0">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="flex items-center gap-1 mt-1">
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
      </div>

      {/* Quantity Controls Skeleton */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gray-200"></div>
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
        <div className="w-7 h-7 rounded-full bg-gray-200"></div>
      </div>

      {/* Price Skeleton */}
      <div className="h-4 bg-gray-200 rounded w-16"></div>

      {/* Delete Button Skeleton */}
      <div className="w-5 h-5 bg-gray-200 rounded"></div>
    </div>
  );
}
