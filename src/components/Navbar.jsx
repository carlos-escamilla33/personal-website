import {useState} from "react";
import {Menu, X} from "lucide-react";

const Navbar = () => {
    const navItems = ["Home", "About", "Projects", "Contact"];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <a href="#" className="text-2xl font-bold ">Carlos Escamilla</a>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {
                        navItems.map((item) => {
                            return <a href="" key={item} className="text-grey-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                {item}
                            </a>
                        })
                    }
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200">
                        {
                            isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6"/>
                            )
                        }
                    </button>
                </div>
            </div>
            {
                isOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-200">
                        <div className="space-y-2 pt-4">
                            {
                                navItems.map((item) => {
                                    return <a href="" key={item}  
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">
                                        {item}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;