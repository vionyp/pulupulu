import ServiceCard from "./ServiceCard";

const services = [
  { icon: "/images/s1.png", title: "Design & Develop" },
  { icon: "/images/s2.png", title: "Account Settings" },
  { icon: "/images/s3.png", title: "Notification Manage" },
  { icon: "/images/s4.png", title: "Customer Support" },
  { icon: "/images/s5.png", title: "Marketing" },
  { icon: "/images/s6.png", title: "Digital Agency" },
];

const Services = () => {
  return (
    <div className="py-20 bg-lavender dark:bg-gray-900">
      <div>
        <h1 className="text-accent dark:text-accent-light font-medium text-center">Our Services</h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4 font-bold tracking-wider">
          Discover Our Core Services
        </h1>
      </div>

      <div className="grid w-[80%] mx-auto mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={s.title}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 100}
          >
            <ServiceCard icon={s.icon} title={s.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
