import Image from "next/image";
import { FaRocket } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const reasons = [
  { icon: FaRocket, title: "Fast Working Process", bg: "bg-primary" },
  { icon: FaHammer, title: "Dedicated Team", bg: "bg-secondary" },
  { icon: BiSupport, title: "24/7 Hours Support", bg: "bg-[#a5b4fc]" },
];

const WhyChoose = () => {
  return (
    <div className="py-20">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-accent dark:text-accent-light font-medium">Why Choose Us</h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-gray-900 dark:text-white mt-4 font-bold tracking-wider">
            Specialized in Assisting Clients on Financial Challenges
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil? Fugiat quo
            voluptates dolores consequatur.
          </p>

          <div className="mt-8">
            {reasons.map(({ icon: Icon, title, bg }) => (
              <div key={title} className="flex gap-6 mb-8">
                <div
                  className={`flex justify-center flex-col items-center w-[4.5rem] h-[4.5rem] shrink-0 rounded-full ${bg}`}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 leading-6 lg:w-[70%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, libero.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Image src="/images/wc.png" alt="why choose us" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
