const NewsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="News Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Title One</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" className="text-amber-500 hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="News Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Title Two</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" className="text-amber-500 hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/600x400" alt="News Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Title Three</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <a href="#" className="text-amber-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-amber-500/20 text-amber-500 font-semibold py-2 px-6 rounded-full hover:bg-amber-500/30 transition duration-200">
            View All News
          </button>
        </div>

        <div className="mt-12 border-t pt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Stay Updated</h3>
          <p className="text-gray-600 text-center mb-6">Subscribe to our newsletter for the latest news and updates.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="border rounded-l-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="border-amber-500 text-amber-500 hover:bg-amber-500/10 font-semibold py-2 px-6 rounded-r-full transition duration-200">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-6 border-t pt-8">
          <p className="text-gray-500 text-center">© {new Date().getFullYear()} News Website. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
