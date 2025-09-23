// import {useState} from "react";

const Navbar = () => {
    const navItems = ["Home", "About", "Projects", "Contact"];
    // const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="relative">
            {
                navItems.map((item) => {
                    return <a key={item}
                     className="text-gray-600 hover:text-gray-800 font medium transition-colors"
                     href="">{item}</a>
                })
            }
        </nav>
    )
}

export default Navbar;