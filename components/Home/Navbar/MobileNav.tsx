import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-40 w-full h-screen`}
      />
      {/* Sidebar — delay-300 so the overlay slides in first */}
      <div
        className={`text-ink dark:text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-lavender dark:bg-gray-900 space-y-6 z-[1050]`}
      >
        {NAVLINKS.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-ink dark:text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-primary sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
