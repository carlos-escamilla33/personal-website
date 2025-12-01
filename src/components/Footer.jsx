const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-primary-soft rounded-base shadow-xs m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="mailto:carlosaescamilla3@gmail.com"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap hover:text-blue-600 transition-colors duration-200">
              Email Me
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <a
                href="https://www.linkedin.com/in/carlos-al-escamilla/"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/carlos-escamilla33?tab=repositories"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1WexMriQx11O019ONgxDy4XmU3ihtpTt5/view?usp=sharing"
                className="hover:underline me-4 md:me-6"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">
          © 2025{" "}
          <a className="hover:underline">
            Carlos Escamilla
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
