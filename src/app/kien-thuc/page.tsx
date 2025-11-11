import BlogPostCard from "./BlogPostCard";
import { blogPostsData } from "@/data/knowledge";

export default function KnowledgePage() {
  return (
    <main className="bg-[#FBF9F5] py-12 md:py-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4A2E20] mb-4">
            Kiến Thức Phật Pháp
          </h1>
          <p className="text-lg text-[#4A2E20]/80 max-w-2xl mx-auto">
            Cùng An Lạc khám phá những giá trị sâu sắc của giáo lý nhà Phật và
            ý nghĩa của các pháp khí trên con đường tu tập.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}