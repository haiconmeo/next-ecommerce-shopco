import React from "react";
import { FiSliders } from "react-icons/fi"; // Icon cho bộ lọc

const Filters = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl text-[#4A2E20]">Bộ Lọc</span>
        <FiSliders className="text-2xl text-[#4A2E20]/60" />
      </div>
      {/* Ví dụ về một bộ lọc */}
      <div className="border-t border-[#4A2E20]/10 pt-5">
        <h3 className="font-semibold text-lg text-[#4A2E20] mb-3">Danh Mục</h3>
        <ul className="space-y-2 text-[#4A2E20]/80">
          <li><label><input type="checkbox" className="mr-2 accent-[#8E4B37]" /> Tượng Phật</label></li>
          <li><label><input type="checkbox" className="mr-2 accent-[#8E4B37]" /> Tràng Hạt</label></li>
          <li><label><input type="checkbox" className="mr-2 accent-[#8E4B37]" /> Pháp Khí</label></li>
        </ul>
      </div>
      {/* Thêm các bộ lọc khác tại đây */}
    </div>
  );
};

export default Filters;