import { CgWebsite } from "react-icons/cg";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-col">
        <CgWebsite className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-xl hidden sm:block md:text-2xl text-ink dark:text-white font-bold">
        PuluPulu
      </h1>
    </div>
  );
};

export default Logo;
