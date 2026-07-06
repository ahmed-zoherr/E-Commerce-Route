export default function CheckoutSkelton() {
  return (
    <>
      <section>
        <div className="container max-w-5xl py-6">
          <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Side: Payment & Shipping */}
            <div className="payment-method lg:col-span-8 space-y-6">
              {/* Payment Method Section */}
              <div className="bg-white p-6 shadow-sm rounded-lg">
                <div className="h-6 bg-gray-200 rounded w-40 mb-6"></div>
                <div className="space-y-3">
                  {/* Payment Option 1 */}
                  <div className="border border-gray-200 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex-shrink-0 mt-1"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-48"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>

                  {/* Payment Option 2 */}
                  <div className="border border-gray-200 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-gray-200 rounded-full flex-shrink-0 mt-1"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-48"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address Section */}
              <div className="bg-white p-6 shadow-sm rounded-lg">
                <div className="h-6 bg-gray-200 rounded w-40 mb-6"></div>
                <div className="space-y-4">
                  {/* Address Details */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-24 bg-gray-200 rounded"></div>
                  </div>

                  {/* Phone and City */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-9 bg-gray-200 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="h-9 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="order-summary lg:col-span-4">
              <div className="h-8 bg-gray-200 rounded w-40 mb-5"></div>

              {/* Cart Items */}
              <div className="space-y-2.5 pb-3 border-b border-gray-200 mb-3">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-8"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                ))}
              </div>

              {/* Order Details */}
              <div className="space-y-3 py-3.5">
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                  <div className="h-3 bg-gray-200 rounded w-14"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2.5">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
              </div>

              {/* Secure Checkout Info */}
              <div className="py-3 border-t border-gray-200 mt-3">
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-5 bg-gray-200 rounded flex-shrink-0"></div>
                  <div className="h-3 bg-gray-200 rounded flex-1"></div>
                </div>

                {/* Payment Icons */}
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div
                      key={index}
                      className="w-8 h-6 bg-gray-200 rounded"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
