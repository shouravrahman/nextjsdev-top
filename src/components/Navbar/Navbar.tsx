"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { LOGO } from "@/constants/_APP_SETUP";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <nav className={classes.navbar}>
        <div className={`${classes.navbar__container} container flex items-center justify-between `}>
          <div className="flex items-center">
            <Link href="/" className={`text-xl  font-semibold text-emerald-100 hover:text-orange-600 `}>
              {LOGO}
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink href="/blog" title="Blog" />
            <NavLink href="/about" title="About" />
            <NavLink href="/portfolio" title="Portfolio" />
           
          </div>
          
          <div className="flex items-center justify-between gap-4">
          <button className="relative ">
        
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-orange-400"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-white bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Hire Me</span>

            </button>
            <button className="p-1 text-gray-600 rounded-md hover:bg-gray-200" onClick={toggleTheme}>
              {theme === "light" ? <BsFillMoonFill size={24} /> : <BsFillSunFill size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* {showSearch && <Search closeSearch={() => setShowSearch(false)} />} */}
    </>
  );
};

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className={`text-white hover:text-orange-700 ${classes.navbar__link}`}>
      {title}
    </Link>
  );
};

export default Navbar;
