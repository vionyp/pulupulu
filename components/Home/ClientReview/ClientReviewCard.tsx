import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ClientReviewCard = ({ user }: Props) => {
  return (
    <div className="bg-lavender dark:bg-gray-800 m-3 p-6 rounded-lg relative">
      <FaQuoteRight className="absolute right-4 top-4 w-16 h-16 text-primary opacity-30" />

      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="w-4 h-4 text-yellow-600" />
        ))}
      </div>

      <p className="mt-6 text-base text-gray-600 dark:text-gray-300 font-medium">{user.review}</p>

      <div className="w-full h-[1.2px] bg-ink dark:bg-white opacity-10 mt-6 mb-6" />

      <div className="flex items-center space-x-4">
        <Image
          src={user.userImage}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-900 dark:text-white">{user.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
