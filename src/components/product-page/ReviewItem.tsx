import React from "react";
import { Review } from "@/types/review.types";
import Rating from "../ui/Rating";

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="py-6 border-b border-[#4A2E20]/10">
      <div className="flex items-center mb-2">
        <h4 className="font-semibold text-lg text-[#4A2E20] mr-4">
          {review.user}
        </h4>
        <Rating
          initialValue={review.rating}
          readonly
          SVGclassName="inline-block"
          size={18}
          fillColor="#8E4B37"
          emptyColor="#D1B5A9"
        />
      </div>
      <p className="text-sm text-[#4A2E20]/60 mb-3">{review.date}</p>
      <p className="text-[#4A2E20]/80 leading-relaxed">
        {review.content}
      </p>
    </div>
  );
};

export default ReviewItem;