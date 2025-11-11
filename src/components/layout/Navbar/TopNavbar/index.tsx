import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Vật Phẩm",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Tượng Phật & Bồ Tát",
        url: "/product#tuong-phat",
        description: "Tôn tượng trang nghiêm, trợ duyên tu tập.",
      },
      {
        id: 12,
        label: "Tràng Hạt & Chuỗi Niệm",
        url: "/product#trang-hat",
        description: "Phương tiện niệm Phật, định tâm hiệu quả.",
      },
      {
        id: 13,
        label: "Pháp Khí & Đồ Thờ",
        url: "/product#phap-khi",
        description: "Chuông, mõ, pháp cụ cho không gian thờ tự.",
      },
      {
        id: 14,
        label: "Trầm Hương & Lư Xông",
        url: "/product#tram-huong",
        description: "Thanh lọc không gian, dâng hương cúng dường.",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Vật Phẩm Mới",
    url: "/product#moi-ve",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Kiến Thức",
    url: "/kien-thuc",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Liên Hệ",
    url: "/lien-he",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-20 border-b border-black/5">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className="font-serif text-2xl lg:text-3xl text-[#4A2E20] font-bold mr-3 lg:mr-10"
          >
            AN LẠC
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7 font-serif">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#FBF9F5] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Tìm kiếm vật phẩm..."
            className="bg-transparent placeholder:text-[#4A2E20]/60"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/dang-nhap" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
