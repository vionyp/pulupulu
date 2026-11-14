const Order = () => {
  return (
    <div className="py-20 bg-lavender dark:bg-gray-900">
      <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
        <h1 className="text-accent dark:text-accent-light font-semibold text-center">Booking</h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4 font-bold tracking-wider">
          Ready to Start Your Project?
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-center w-[90%] sm:w-[80%] lg:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nostrum. Repellat
          doloribus consequuntur voluptas.
        </p>
        <div className="text-center mt-10">
          <button className="text-white rounded-full px-14 py-4 cursor-pointer bg-primary hover:bg-primary-hover transition-all duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
