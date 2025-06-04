const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Branding */}
        <div className="mb-4 md:mb-0">
          <a href="/" className="flex items-center">
            <span className="text-amber-500 font-bold text-2xl italic mr-1">FAIR</span>
            <span className="text-white font-bold text-2xl italic">RP</span>
          </a>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} FAIR RP. All rights reserved.</p>
        </div>

        {/* Right Section: Navigation Links */}
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-amber-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition duration-300">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition duration-300">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
