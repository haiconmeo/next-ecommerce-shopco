import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <main className="bg-[#FBF9F5] py-12 md:py-20 font-serif">
      <div className="max-w-lg mx-auto px-4 xl:px-0">
        <Breadcrumb
          items={[
            { label: "Trang Chủ", href: "/" },
            { label: "Đăng Nhập", href: "/dang-nhap" },
          ]}
        />

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#4A2E20]/10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#4A2E20] mb-2">
              Chào Mừng Trở Lại
            </h1>
            <p className="text-[#4A2E20]/80">
              Đăng nhập để tiếp tục hành trình cùng An Lạc.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#4A2E20] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]"
                placeholder="nhapemail@cuaban.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#4A2E20] mb-1"
              >
                Mật Khẩu
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#4A2E20]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E4B37]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#8E4B37] hover:bg-[#7a412f] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Đăng Nhập
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-[#4A2E20]/80 mt-6">
            Chưa có tài khoản?{" "}
            <Link href="/dang-ky" className="font-semibold text-[#8E4B37] hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}