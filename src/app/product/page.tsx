import Breadcrumb from "@/components/common/Breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/common/MobileFilters";
import Filters from "@/components/common/Filters";
import {
  newProductsData,
  topSellingProductsData,
} from "@/data/homepage";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductPage() {
  // Gộp tất cả sản phẩm lại để hiển thị
  const allProducts = [...newProductsData, ...topSellingProductsData];

  return (
    <main className="bg-[#FBF9F5] pb-20 font-serif">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-[#4A2E20]/10 mb-5 sm:mb-6" />
        <Breadcrumb
          items={[
            { label: "Trang Chủ", href: "/" },
            { label: "Vật Phẩm", href: "/product" },
          ]}
        />
        <div className="flex md:space-x-5 items-start">
          {/* Bộ lọc cho Desktop */}
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-[#4A2E20]/10 rounded-2xl p-5 space-y-5">
            <Filters />
          </div>

          {/* Danh sách sản phẩm */}
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px] text-[#4A2E20]">
                  Tất Cả Vật Phẩm
                </h1>
                {/* Bộ lọc cho Mobile */}
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-[#4A2E20]/60 mr-3">
                  Hiển thị {allProducts.length} sản phẩm
                </span>
                <div className="flex items-center">
                  <span className="text-sm md:text-base text-[#4A2E20]/60 mr-1">
                    Sắp xếp:
                  </span>
                  <Select defaultValue="newest">
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-[#4A2E20] bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="low-price">Giá thấp đến cao</SelectItem>
                      <SelectItem value="high-price">Giá cao đến thấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {allProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
            <hr className="border-t-[#4A2E20]/10" />
            <Pagination className="justify-between">
              <PaginationPrevious
                href="#"
                className="border border-[#4A2E20]/10 text-[#4A2E20]"
              />
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-[#4A2E20]/80 font-medium text-sm"
                    isActive
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-[#4A2E20]/80">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink href="#" className="text-[#4A2E20]/80">
                    3
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>

              <PaginationNext
                href="#"
                className="border border-[#4A2E20]/10 text-[#4A2E20]"
              />
            </Pagination>
          </div>
        </div>
      </div>
    </main>
  );
}
