import PriceCard from "./PriceCard";

const plans = [
  { title: "Optimization & SEO", price: 20 },
  { title: "Designing", price: 50 },
  { title: "Development", price: 60 },
  { title: "Supporting", price: 80 },
];

const Price = () => {
  return (
    <div className="py-20 bg-sky dark:bg-gray-900">
      <div>
        <h1 className="text-accent dark:text-accent-light font-medium text-center">Pricing Table</h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4 font-bold tracking-wider">
          Live Chat 24/7 Support
        </h1>
      </div>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
        {plans.map((p, i) => (
          <div
            key={p.title}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 100}
          >
            <PriceCard title={p.title} price={p.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
