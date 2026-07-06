export default function HomeCategoriesSkelton() {
  return (
    <>
      <section>
        <div className="container space-y-10">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-gray-200 rounded w-40"></div>
            <div className="h-5 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-col-4 xl:grid-cols-6 gap-3.5 ">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="card flex shadow-xl bg-white p-6 rounded-lg flex-col items-center gap-4"
              >
                <div className="size-22 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
