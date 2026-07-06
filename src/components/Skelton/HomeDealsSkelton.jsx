export default function HomeDealsSkelton() {
  return (
    <>
      <section className="p-20">
        <div className="container">
          <div className="view-deals-div flex justify-between items-center">
            <div className="right-side space-y-2">
              <div className="h-8 bg-gray-200 rounded w-48"></div>
              <div className="flex gap-2 items-center">
                <div className="h-6 bg-gray-200 rounded w-24"></div>
                <div className="counters flex gap-1 items-center">
                  <div className="size-7 rounded-md bg-gray-200 flex-shrink-0"></div>
                  <span className="text-gray-200">:</span>
                  <div className="size-7 rounded-md bg-gray-200 flex-shrink-0"></div>
                  <span className="text-gray-200">:</span>
                  <div className="size-7 rounded-md bg-gray-200 flex-shrink-0"></div>
                </div>
              </div>
            </div>
            <div className="h-5 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-5 py-15">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="w-full h-40 bg-gray-200 rounded-t-lg"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  <div className="flex justify-between items-end pt-2">
                    <div className="h-5 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
