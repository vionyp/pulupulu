"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  icon: string;
  title: string;
};

const ServiceCard = ({ icon, title }: Props) => {
  return (
    <Tilt className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="w-20 h-20 rounded-full mx-auto m-5 flex flex-col items-center justify-center">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h1 className="text-center mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h1>
      <p className="text-center text-sm mt-2 leading-6 text-gray-600 dark:text-gray-300 px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatum.
      </p>
      <div className="text-center mx-auto flex items-center justify-center space-x-1 mb-4 mt-4 text-gray-800 dark:text-gray-100 font-medium cursor-pointer hover:text-primary transition-all duration-200">
        <span>Learn More</span>
        <FiArrowRight />
      </div>
    </Tilt>
  );
};

export default ServiceCard;
