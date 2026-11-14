"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white/80 backdrop-blur-md dark:bg-gray-900/90 shadow-md" : ""
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Logo />

        {/* Desktop links — hidden below lg */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAVLINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-ink dark:text-white hover:text-primary dark:hover:text-accent-light font-medium transition-all duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-primary hover:bg-primary-hover rounded-md cursor-pointer group ring-offset-2 ring-1 ring-primary/40 ring-offset-lavender hover:ring-offset-secondary dark:ring-offset-gray-900 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center text-sm">Create Account</span>
          </a>
          <ThemeToggler />
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-ink dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
