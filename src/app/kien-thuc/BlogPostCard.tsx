import { BlogPost } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link
      href={`/kien-thuc/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-transparent hover:border-[#4A2E20]/20 transition-all duration-300 bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <p className="text-sm text-[#8E4B37] mb-2">{post.category}</p>
        <h3 className="text-lg font-semibold text-[#4A2E20] mb-3 group-hover:text-[#8E4B37] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-[#4A2E20]/70 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <p className="text-xs text-[#4A2E20]/50">{`${post.author} • ${post.date}`}</p>
      </div>
    </Link>
  );
};

export default BlogPostCard;