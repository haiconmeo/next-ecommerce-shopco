"use client";

import React, { useState } from "react";
import { Review } from "@/types/review.types";
import { cn } from "@/lib/utils";
import ReviewItem from "./ReviewItem";

interface TabsProps {
  reviews: Review[];
  description: string;
}

const Tabs: React.FC<TabsProps> = ({ reviews, description }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      {/* Tab Headers */}
      <div className="border-b border-[#4A2E20]/10 mb-8">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("description")}
            className={cn(
              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors",
              activeTab === "description"
                ? "border-[#4A2E20] text-[#4A2E20]"
                : "border-transparent text-[#4A2E20]/60 hover:text-[#4A2E20] hover:border-gray-300"
            )}
          >
            Mô tả sản phẩm
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={cn(
              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors",
              activeTab === "reviews"
                ? "border-[#4A2E20] text-[#4A2E20]"
                : "border-transparent text-[#4A2E20]/60 hover:text-[#4A2E20] hover:border-gray-300"
            )}
          >
            Đánh giá ({reviews.length})
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "description" && (
          <div
            className="prose max-w-none text-[#4A2E20]/80 leading-loose"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {activeTab === "reviews" && (
          <div>
            {reviews.length > 0 ? (
              reviews.map((review) => <ReviewItem key={review.id} review={review} />)
            ) : (
              <p className="text-center text-[#4A2E20]/60 py-8">Chưa có đánh giá nào cho sản phẩm này.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;