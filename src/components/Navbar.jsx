import {useState} = from "react";

const Navbar = () => {
    const navItems = ["Home", "About", "Projects", "Contact"];
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="hidden md:flex space-x-8">
            {
                navItems.map((item) => {
                    <a key={item} href={`#${item.toLowerCase()}`}>
                        {item}
                    </a>
                })
            }
        </nav>
    )
}

export default Navbar;