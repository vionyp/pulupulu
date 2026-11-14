"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { userReviewData } from "@/constant/constant";
import ClientReviewCard from "./ClientReviewCard";

// How many cards to show at each screen width
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

const ClientReview = () => {
  return (
    <div className="py-20">
      <div className="w-[80%] mx-auto">
        <div>
          <h1 className="text-accent dark:text-accent-light font-medium">Client Reviews</h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold">
            Don&apos;t Just Take Our Words For It
          </h1>
        </div>

        <div className="mt-14">
          <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            arrows={true}
          >
            {userReviewData.map((user) => (
              <div key={user.id}>
                <ClientReviewCard user={user} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
