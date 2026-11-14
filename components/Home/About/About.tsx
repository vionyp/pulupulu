import Image from "next/image";

const stats = [
  { value: "53k", label: "Layout Done" },
  { value: "78k", label: "Project Done" },
  { value: "120", label: "Get Awards" },
];

const About = () => {
  return (
    <div className="pt-16 pb-16 dark:bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Image */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <Image src="/images/a1.png" alt="about" width={500} height={500} />
        </div>

        {/* Text */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <h1 className="text-accent dark:text-accent-light font-medium">About Us</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mt-2">
            We Create Digital Experiences That Matter
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-8 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatibus. Quas
            magnam eligendi beatae, natus ipsam rerum quidem ratione minus.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-8 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatibus. Quas
            magnam eligendi beatae, natus ipsam rerum quidem ratione minus.
          </p>

          {/* Stats */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              {stats.map((s) => (
                <div key={s.label}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-accent-light">
                    {s.value}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
