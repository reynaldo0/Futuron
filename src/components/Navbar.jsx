import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const collapseBtnRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    if (collapseRef.current && collapseBtnRef.current) {
      const collapse = collapseRef.current;
      const collapseBtn = collapseBtnRef.current;

      collapseBtn.onclick = () => {
        collapse.classList.toggle("hidden");
      };
    }
  }, []);

  return (
    <header>
      <nav className="fixed left-0 top-0 z-[99999] md:px-10 w-full border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://sunenergy.id/cfind/source/images/sunenergy_logo_homepage.png"
              className="h-auto w-[150px]"
              alt="gambar logo"
            />
          </a>
          <button
            ref={collapseBtnRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="w-full hidden md:block md:w-auto" ref={collapseRef}>
            <ul className="mt-4 flex flex-col h-full rounded-lg border border-gray-100 bg-white p-4 font-medium md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
              {/** Navbar Links **/}
              {["/", "/about", "/detail", "/data"].map((path, index) => {
                const linkNames = ["Home", "About", "Detail", "Data"];
                const isActive = location.pathname === path; // Check if the current path matches the link's path
                return (
                  <li key={index}>
                    <Link
                      to={path}
                      className={`relative block rounded px-3 py-2 ${
                        isActive
                          ? "text-primary-400 before:scale-x-100"
                          : "text-gray-900 hover:before:scale-x-100"
                      } before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-primary-300`}
                    >
                      {linkNames[index]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
