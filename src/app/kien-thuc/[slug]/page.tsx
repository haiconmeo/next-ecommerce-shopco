import Breadcrumb from "@/components/common/Breadcrumb";
import { blogPostsData } from "@/data/knowledge";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Trong một ứng dụng thực tế, nội dung này sẽ được lấy từ CMS
  const fullContent = `
    <p>${post.excerpt}</p>
    <br/>
    <p>Đây là phần nội dung đầy đủ của bài viết. Trong một ứng dụng thực tế, nội dung này sẽ được lấy từ một hệ quản trị nội dung (CMS) và có thể chứa nhiều định dạng HTML phong phú như hình ảnh, danh sách, và các trích dẫn.</p>
    <br/>
    <p>Ví dụ, việc ăn chay không chỉ là một thói quen ăn uống mà còn là một pháp tu sâu sắc. Nó giúp chúng ta nuôi dưỡng lòng từ bi bằng cách không sát sinh, giảm bớt nghiệp chướng và mang lại sự thanh tịnh cho cả thân và tâm. Khi thân thể nhẹ nhàng, tâm trí cũng trở nên sáng suốt hơn, dễ dàng hơn trong việc thiền định và quán chiếu.</p>
    <blockquote class="border-l-4 border-[#8E4B37] pl-4 italic my-6 text-[#4A2E20]/80">
      "Họa phước không có cửa, chỉ do con người tự chuốc lấy. Việc thiện và việc ác đều có quả báo, giống như hình với bóng."
    </blockquote>
    <p>Do đó, mỗi lựa chọn trong cuộc sống, dù là nhỏ nhất như một bữa ăn, đều có thể là một hành động tu tập, góp phần vào con đường giác ngộ và giải thoát.</p>
  `;

  return (
    <main className="bg-[#FBF9F5] py-12 md:py-20 font-serif">
      <div className="max-w-3xl mx-auto px-4 xl:px-0">
        <Breadcrumb
          items={[
            { label: "Trang Chủ", href: "/" },
            { label: "Kiến Thức", href: "/kien-thuc" },
            { label: post.title, href: `/kien-thuc/${post.slug}` },
          ]}
        />

        <article>
          <header className="mb-8">
            <p className="text-base text-[#8E4B37] font-semibold mb-2">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E20] leading-tight">
              {post.title}
            </h1>
            <p className="text-sm text-[#4A2E20]/60 mt-4">{`${post.author} • ${post.date}`}</p>
          </header>

          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          <div
            className="prose max-w-none text-lg text-[#4A2E20]/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: fullContent }}
          />
        </article>
      </div>
    </main>
  );
}