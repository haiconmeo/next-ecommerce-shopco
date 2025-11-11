import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4A2E20] text-[#FBF9F5]/80 pt-12 pb-8">
      <div className="max-w-frame mx-auto px-4">
        {/* Phần trên */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">
          {/* Cột 1: Giới thiệu */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-white mb-4 inline-block"
            >
              AN LẠC
            </Link>
            <p className="text-sm leading-relaxed">
              Nơi mang đến những pháp khí, vật phẩm Phật giáo trợ duyên cho quý
              Phật tử trên con đường tu tập, tìm về sự bình an và chánh niệm.
            </p>
          </div>

          {/* Cột 2: Liên kết */}
          <div>
            <h4 className="font-semibold text-white mb-4">TRANG</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-white transition-colors"
                >
                  Tất Cả Vật Phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/ve-chung-toi"
                  className="hover:text-white transition-colors"
                >
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-white transition-colors"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
            <h4 className="font-semibold text-white mb-4">HỖ TRỢ</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/chinh-sach-doi-tra"
                  className="hover:text-white transition-colors"
                >
                  Chính Sách Đổi Trả
                </Link>
              </li>
              <li>
                <Link
                  href="/chinh-sach-bao-mat"
                  className="hover:text-white transition-colors"
                >
                  Chính Sách Bảo Mật
                </Link>
              </li>
              <li>
                <Link
                  href="/dieu-khoan-dich-vu"
                  className="hover:text-white transition-colors"
                >
                  Điều Khoản Dịch Vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Bản tin */}
          <div>
            <h4 className="font-semibold text-white mb-4">BẢN TIN AN LẠC</h4>
            <p className="text-sm mb-4">
              Đăng ký để nhận thông tin về các pháp khí mới và bài viết chia sẻ
              kiến thức Phật pháp.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full px-4 py-2 bg-[#FBF9F5]/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37] text-white placeholder:text-[#FBF9F5]/50"
              />
              <button
                type="submit"
                className="bg-[#8E4B37] hover:bg-[#7a412f] text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        {/* Đường kẻ ngang */}
        <hr className="border-t border-white/10" />

        {/* Phần dưới */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} An Lạc. Gieo duyên an lành.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
