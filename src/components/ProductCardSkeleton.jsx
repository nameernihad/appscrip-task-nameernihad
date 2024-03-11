

export const ProductCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12 py-5 gap-4">
    {[...Array(12)].map((_, index) => ( // Render 12 skeleton loaders
      <div key={index} className="animate-pulse max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="h-60 w-full bg-gray-200 rounded-t-lg" />
        <div className="p-5">
          <div className="mb-2 h-8 w-3/4 bg-gray-200 rounded" />
          <div className="mb-3 h-16 w-full bg-gray-200 rounded" />
        </div>
        <div className="flex justify-between items-center p-5">
          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <div className="relative px-5 py-2.5 text-black hover:text-white transition-all ease-in duration-75 bg-gray-200 rounded-md group-hover:bg-opacity-0" />
          </div>
          <div className="transition-all w-6 h-6 duration-500 text-gray-200">
            <div className="relative w-full h-full rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
