import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const Header = () => {
  return (
    <header className="bg-[#FBF9F5] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <motion.h2
            initial={{ y: "100px", opacity: 0, rotate: 10 }}
            whileInView={{ y: "0", opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "font-serif text-4xl lg:text-6xl lg:leading-tight mb-5 lg:mb-8 text-[#4A2E20]"
            )}
          >
            PHÁP KHÍ AN LẠC - DƯỠNG NUÔI TÂM HỒN
          </motion.h2>
          <motion.p
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#4A2E20]/80 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px] leading-relaxed"
          >
            Khám phá bộ sưu tập các vật phẩm Phật giáo được chế tác tinh xảo, mỗi
            pháp khí là một công cụ hỗ trợ bạn trên con đường tu tập, tìm về sự
            an lạc và chánh niệm trong cuộc sống.
          </motion.p>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/product"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-[#8E4B37] hover:bg-[#7a412f] transition-all text-white px-14 py-4 rounded-full"
            >
              Khám Phá Ngay
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]"
          >
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2 text-[#4A2E20]">
                <AnimatedCounter from={0} to={200} />+
              </span>
              <span className="text-xs xl:text-base text-[#4A2E20]/80 text-nowrap">
                Mẫu Tượng Phật
              </span>
            </div>
            <Separator
              className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2 text-[#4A2E20]">
                <AnimatedCounter from={0} to={2000} />+
              </span>
              <span className="text-xs xl:text-base text-[#4A2E20]/80 text-nowrap">
                Pháp Khí & Vật Phẩm
              </span>
            </div>
            <Separator
              className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2 text-[#4A2E20]">
                <AnimatedCounter from={0} to={3000} />+
              </span>
              <span className="text-xs xl:text-base text-[#4A2E20]/80 text-nowrap">
                Phật Tử Tin Tưởng
              </span>
            </div>
          </motion.div>
        </section>
        <motion.section
          initial={{ y: "100px", opacity: 0, rotate: 10 }}
          whileInView={{ y: "0", opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]"
        >
          <Image
            priority
            src="/icons/lotus.svg"
            height={80}
            width={80}
            alt="Hoa sen"
            className="absolute right-7 xl:right-0 top-12 opacity-30"
          />
          <Image
            priority
            src="/icons/lotus.svg"
            height={48}
            width={48}
            alt="Hoa sen nhỏ"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 opacity-30"
          />
        </motion.section>
      </div>
    </header>
  );
};

export default Header;
