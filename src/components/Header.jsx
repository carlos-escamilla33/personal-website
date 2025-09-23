import {Navbar} from "./index";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header;