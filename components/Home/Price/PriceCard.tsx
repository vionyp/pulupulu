type Props = {
  title: string;
  price: number;
};

const features = ["Responsive Design", "Speed Optimization", "24/7 Support", "Unlimited Revisions"];

const PriceCard = ({ title, price }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 text-center tracking-wider">
        {title}
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 mb-6 text-center">Monthly Package</p>
      <h1 className="font-bold text-center text-gray-900 dark:text-white">
        <span className="text-5xl">${price}</span>/month
      </h1>
      <div className="space-y-4 text-sm text-gray-600 tracking-wider text-center mt-6 dark:text-gray-100">
        {features.map((f) => (
          <p key={f}>{f}</p>
        ))}
      </div>
      <div className="mt-6 mb-6 text-center">
        <button className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all duration-200 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
