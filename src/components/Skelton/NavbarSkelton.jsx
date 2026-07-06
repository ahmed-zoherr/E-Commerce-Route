export default function NavbarSkelton() {
  return (
    <header>
      <div className="container">
        {/* Top navbar skeleton */}
        <div className="hidden lg:flex justify-between py-2 border-b border-gray-300/50">
          <ul className="text-sm flex justify-between gap-2.5 items-center">
            <li className="h-4 bg-gray-200 rounded w-32"></li>
            <li className="h-4 bg-gray-200 rounded w-48"></li>
          </ul>
          <ul className="flex justify-between gap-4 items-center">
            <li className="h-4 bg-gray-200 rounded w-20"></li>
            <li className="h-4 bg-gray-200 rounded w-16"></li>
            <li className="h-4 bg-gray-200 rounded w-20"></li>
            <li className="h-8 bg-gray-200 rounded w-16"></li>
            <li className="h-8 bg-gray-200 rounded w-16"></li>
          </ul>
        </div>

        {/* Main navbar skeleton */}
        <nav className="py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="w-20 h-10 bg-gray-200 rounded"></div>

          {/* Search bar */}
          <div className="relative hidden lg:block w-96 h-10 bg-gray-200 rounded"></div>

          {/* Navigation items */}
          <ul className="hidden lg:flex justify-between items-start gap-4 xl:gap-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <li key={index} className="flex flex-col gap-1 items-center">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-16 mt-1"></div>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="btn bg-gray-200 lg:hidden w-10 h-10 rounded"></div>
        </nav>
      </div>

      {/* Categories navbar skeleton */}
      <nav className="hidden lg:block bg-gray-100 py-4">
        <div className="container flex items-center gap-8">
          <div className="h-10 bg-gray-200 rounded w-40"></div>
          <ul className="flex gap-3 items-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <li key={index} className="h-4 bg-gray-200 rounded w-24"></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
