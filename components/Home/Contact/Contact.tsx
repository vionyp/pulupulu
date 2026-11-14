import Image from "next/image";

const inputClass =
  "border-2 border-gray-200 focus:border-primary px-4 py-3 rounded-full outline-none dark:text-white dark:bg-transparent";

const Contact = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-accent dark:text-accent-light font-medium text-center">
          Our Contact Information
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4 font-bold tracking-wider">
          Join Our Around Million Customers
        </h1>
      </div>

      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-16">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/images/map.png" alt="map" width={900} height={900} className="mx-auto opacity-60" />
        </div>

        <div className="mt-16">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Send Message</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <input type="email" placeholder="Your Email" className={inputClass} />
            <input type="text" placeholder="Phone Number" className={inputClass} />
            <input type="text" placeholder="Website" className={inputClass} />
          </div>
          <textarea
            rows={9}
            placeholder="Your Message Here"
            className="mt-10 w-full border-2 outline-none border-gray-200 px-4 py-3 rounded-lg dark:text-white dark:bg-transparent"
          />
          <button className="mt-10 text-white px-14 py-4 cursor-pointer bg-primary hover:bg-primary-hover rounded-full transition-all duration-200">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
