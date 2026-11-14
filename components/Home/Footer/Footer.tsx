import Logo from "@/components/Helper/Logo";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram, FaPaperPlane, FaPhone } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";

const socials = [
  { icon: FaFacebookF, label: "Facebook", hover: "hover:bg-secondary" },
  { icon: FaYoutube, label: "YouTube", hover: "hover:bg-primary" },
  { icon: FaInstagram, label: "Instagram", hover: "hover:bg-[#f5a8d4]" },
];

const services = ["UI Design", "UX Design", "Web App", "Digital Marketing", "SEO"];

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#e9e4ff] dark:bg-gray-900 text-ink dark:text-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* 1. Logo + about + socials */}
        <div>
          <Logo />
          <p className="mt-6 text-sm text-ink/70 dark:text-white/80 leading-6">
            A website design application built with Next.js, Node.js, TypeScript and Tailwind
            CSS, crafting modern, responsive and fast websites for every brand.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            {socials.map(({ icon: Icon, label, hover }) => (
              <div
                key={label}
                aria-label={label}
                className={`w-12 h-12 bg-white/70 dark:bg-white/10 rounded-full flex flex-col items-center justify-center cursor-pointer ${hover} hover:text-white transition-all duration-300`}
              >
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Address */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold">Address</h1>
          <div className="mt-8">
            <div className="flex items-center space-x-2">
              <FaPaperPlane className="w-5 h-5 shrink-0 text-primary" />
              <p className="font-medium text-sm">Nanyang Ave 24</p>
            </div>
            <div className="flex items-center space-x-2 mt-5 mb-5">
              <FaPhone className="w-5 h-5 shrink-0 text-primary" />
              <p className="font-medium text-sm">+65 94544145</p>
            </div>
            <div className="flex items-center space-x-2">
              <IoMailOpen className="w-5 h-5 shrink-0 text-primary" />
              <p className="font-medium text-sm">VIONY001@e.ntu.edu.sg</p>
            </div>
          </div>
        </div>

        {/* 3. Services */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold">More Services</h1>
          <div className="mt-8">
            {services.map((s) => (
              <div key={s} className="flex items-center space-x-2 mb-2">
                <MdKeyboardDoubleArrowRight className="text-primary" />
                <p className="font-medium text-sm">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Newsletter */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold">Newsletter</h1>
          <div className="mt-8">
            <p className="text-ink/70 dark:text-white/80 text-sm">
              Subscribe to get our latest news and updates.
            </p>
            <div className="mt-5 flex items-center space-x-4">
              <Image src="/images/f.jpg" alt="news" width={80} height={25} />
              <div>
                <div className="flex items-center">
                  <BiCalendar className="text-primary w-6 h-6 mr-2" />
                  <p className="text-sm">25 October 2026</p>
                </div>
                <h1 className="mt-2 font-bold text-sm">Latest agency news</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-[80%] mx-auto border-t-2 border-ink/15 dark:border-gray-700 mt-8 pt-8">
        <p className="text-center text-ink/60 dark:text-white/70 text-sm">
          © 2026 PuluPulu. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
