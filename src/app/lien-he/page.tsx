import Breadcrumb from "@/components/common/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-[#FBF9F5] py-12 md:py-20 font-serif">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <Breadcrumb
          items={[
            { label: "Trang Chủ", href: "/" },
            { label: "Liên Hệ", href: "/lien-he" },
          ]}
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E20] mb-4">
            Liên Hệ Với An Lạc
          </h1>
          <p className="text-lg text-[#4A2E20]/80 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn lòng lắng nghe những câu hỏi, góp ý hoặc bất kỳ
            yêu cầu nào từ quý Phật tử. Xin vui lòng liên hệ qua thông tin bên
            dưới hoặc gửi tin nhắn cho chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl border border-[#4A2E20]/10">
          {/* Cột thông tin liên hệ */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FBF9F5] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#8E4B37]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4A2E20]">Địa Chỉ</h3>
                <p className="text-[#4A2E20]/80">
                  123 Đường An Lạc, Phường Bình An, Quận Tâm, TP.HCM
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FBF9F5] p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#8E4B37]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4A2E20]">Email</h3>
                <p className="text-[#4A2E20]/80">lienhe@anlac.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FBF9F5] p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#8E4B37]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4A2E20]">
                  Điện Thoại
                </h3>
                <p className="text-[#4A2E20]/80">0987 654 321</p>
              </div>
            </div>
          </div>

          {/* Cột biểu mẫu */}
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#4A2E20] mb-1">Họ và Tên</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#4A2E20] mb-1">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#4A2E20] mb-1">Nội Dung Tin Nhắn</label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Gửi Tin Nhắn
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}