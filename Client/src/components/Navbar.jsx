import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // bavbar item
  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header>
      <nav>
        <div>
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" /> Books
          </Link>

          {/* nav item for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-black">
                {link}
              </Link>
            ))}
          </ul>

          {/* btm for lg screen */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu btn for the mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* nav item for small devices */}
        <div>
          {navItem.map(({ link, path }) => (
            <Link key={path} to={path} className="block text-base text-black">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
