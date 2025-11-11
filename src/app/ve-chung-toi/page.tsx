import Breadcrumb from "@/components/common/Breadcrumb";
import CoreValues from "@/components/homepage/Brands";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUsPage() {
  return (
    <main className="bg-[#FBF9F5] py-12 md:py-20 font-serif">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <Breadcrumb
          items={[
            { label: "Trang Chủ", href: "/" },
            { label: "Về Chúng Tôi", href: "/ve-chung-toi" },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E20] mb-4">
            Câu Chuyện Về An Lạc
          </h1>
          <p className="text-lg text-[#4A2E20]/80 max-w-3xl mx-auto leading-relaxed">
            An Lạc không chỉ là một cửa hàng, mà là một hành trình gieo duyên
            lành, nơi mỗi vật phẩm đều mang trong mình một câu chuyện về sự bình
            an và chánh niệm.
          </p>
        </div>

        {/* Story & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/about-us-story.jpg"
              alt="Không gian An Lạc"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#4A2E20] mb-4">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-[#4A2E20]/80 leading-loose mb-4">
              Giữa cuộc sống bộn bề, việc tìm về một góc bình yên cho tâm hồn là
              một nhu cầu thiết yếu. An Lạc ra đời với sứ mệnh trở thành một
              người bạn đồng hành, mang đến những pháp khí và vật phẩm Phật giáo
              được tuyển chọn kỹ lưỡng, không chỉ đẹp về hình thức mà còn sâu
              sắc về ý nghĩa.
            </p>
            <p className="text-[#4A2E20]/80 leading-loose">
              Chúng tôi tin rằng, mỗi một tôn tượng Phật, một chuỗi tràng hạt,
              hay một lư trầm hương đều là những phương tiện hữu hiệu giúp quý
              Phật tử và những người hữu duyên dễ dàng hơn trên con đường tu
              tập, tìm thấy sự tĩnh tại và an lạc ngay trong chính cuộc sống
              hàng ngày.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-[#4A2E20] mb-12">
            Những Giá Trị Cốt Lõi
          </h2>
          <CoreValues />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-12 rounded-2xl border border-[#4A2E20]/10">
          <h3 className="text-3xl font-bold text-[#4A2E20] mb-4">
            Cùng An Lạc Gieo Duyên Lành
          </h3>
          <p className="text-lg text-[#4A2E20]/80 max-w-2xl mx-auto mb-8">
            Khám phá những vật phẩm có thể trợ duyên cho bạn trên con đường tìm
            về sự an lạc nội tâm.
          </p>
          <Link
            href="/product"
            className="inline-block bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Khám Phá Vật Phẩm
          </Link>
        </div>
      </div>
    </main>
  );
}