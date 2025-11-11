import ProductListSec from "@/components/common/ProductListSec";
import CoreValues from "@/components/homepage/Brands";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import {
  newProductsData,
  reviewsData,
  topSellingProductsData,
} from "@/data/homepage";

export default function Home() {
  return (
    <>
      <Header />
      <CoreValues />
      <main className="my-[50px] sm:my-[72px] font-serif">
        <ProductListSec
          title="Sản phẩm mới"
          data={newProductsData}
          viewAllLink="/product#moi-ve"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-[#4A2E20]/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="Vật phẩm bán chạy"
            data={topSellingProductsData}
            viewAllLink="/product#ban-chay"
          />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
