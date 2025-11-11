import {
  newProductsData,
  reviewsData,
  topSellingProductsData,
} from "@/data/homepage";
import ProductListSec from "@/components/common/ProductListSec";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductDetailHeader from "@/components/product-page/ProductDetailHeader";
import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";

// Gộp tất cả sản phẩm từ các nguồn dữ liệu
const allProducts: Product[] = [...newProductsData, ...topSellingProductsData];

const productDescription = `<p>Đây là phần mô tả chi tiết về sản phẩm, giúp khách hàng hiểu rõ hơn về nguồn gốc, chất liệu, và ý nghĩa tâm linh của vật phẩm. Bạn có thể sử dụng các thẻ HTML để định dạng văn bản.</p><ul class="list-disc list-inside my-4 space-y-2"><li><strong>Chất liệu:</strong> Gỗ Bồ Đề tự nhiên, được chế tác thủ công.</li><li><strong>Kích thước:</strong> Hạt 8mm, 108 hạt.</li><li><strong>Công dụng:</strong> Hỗ trợ hành giả trong việc niệm Phật, trì chú, giúp định tâm và tăng trưởng chánh niệm.</li></ul><p>Mỗi sản phẩm tại An Lạc đều được lựa chọn kỹ lưỡng, mang trong mình năng lượng an lành, với mong muốn gieo duyên lành đến với mọi người.</p>`;

export default function ProductPage({
  params,
}: {
  // Nếu bạn đã đổi tên thư mục thành [slug], params sẽ là { slug: string }
  params: { slug: string | string[] };
}) {
  // Lấy slug từ params. Đảm bảo nó là một chuỗi.
  const currentSlug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

  const productData = allProducts.find(
    (product) => product.slug === currentSlug
  );

  if (!productData) {
    notFound();
  }

  return (
    <main className="bg-[#FBF9F5] pb-20 font-serif">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-[#4A2E20]/10 mb-5 sm:mb-6" />
        <Breadcrumb items={[
          { label: "Trang Chủ", href: "/" },
          { label: "Vật Phẩm", href: "/product" },
          { label: productData.title, href: `/product/${productData.slug}` },
        ]} />
        <section className="mb-11">
          <ProductDetailHeader data={productData} />
        </section>
        <Tabs reviews={reviewsData} description={productDescription} />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="Có thể bạn cũng thích" data={topSellingProductsData} />
      </div>
    </main>
  );
}
