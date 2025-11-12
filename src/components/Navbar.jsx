import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navItems = ["About", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto px-4 relative z-50 md:px-40">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-gray-300">
            Carlos Escamilla
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            return (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none transition-colors duration-200 z-50 relative"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-200 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="md:hidden fixed top-16 left-0 right-0 bg-black shadow-lg z-40 pb-4 border-t border-gray-200">
            <div className="space-y-2 pt-4 px-4">
              {navItems.map((item) => {
                return (
                  <a
                    href={`#${item.toLowerCase()}`}
                    key={item}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
