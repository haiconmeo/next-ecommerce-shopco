import React from "react";
import { FiSliders } from "react-icons/fi"; // Icon cho bộ lọc
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Giả định bạn đang dùng shadcn/ui cho Sheet
import Filters from "./Filters"; // Import Filters component đã tạo

const MobileFilters = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center space-x-2 text-[#4A2E20] border border-[#4A2E20]/20 rounded-full px-4 py-2 hover:bg-[#FBF9F5] transition-colors">
            <FiSliders className="text-lg" />
            <span>Bộ Lọc</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#FBF9F5] w-full max-w-xs p-6">
          <SheetHeader className="mb-6">
            <SheetTitle className="font-serif text-2xl text-[#4A2E20]">Bộ Lọc Sản Phẩm</SheetTitle>
          </SheetHeader>
          {/* Render Filters component bên trong MobileFilters */}
          <Filters />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilters;