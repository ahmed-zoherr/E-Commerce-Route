export default function FeaturedProductsSkelton() {
  return (
    <>
      <section>
        <div className="container p-6">
          <div className="h-6 bg-gray-200 rounded w-40 py-8"></div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-6 space-y-6 ">
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
