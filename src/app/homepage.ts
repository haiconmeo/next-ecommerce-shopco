import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newProductsData: Product[] = [
  {
    id: 1,
    title: "Tượng Phật A Di Đà Lưu Ly",
    srcUrl: "/images/product-tuong-phat-1.jpg",
    gallery: ["/images/product-tuong-phat-1.jpg"],
    price: 2500000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Chuỗi Tràng Hạt Gỗ Bồ Đề",
    srcUrl: "/images/product-trang-hat-1.jpg",
    gallery: ["/images/product-trang-hat-1.jpg"],
    price: 450000,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 5.0,
  },
  {
    id: 3,
    title: "Chuông Xoay Nepal Thủ Công",
    srcUrl: "/images/product-chuong-xoay-1.jpg",
    gallery: ["/images/product-chuong-xoay-1.jpg"],
    price: 890000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Lư Xông Trầm Gốm Sứ",
    srcUrl: "/images/product-lu-xong-1.jpg",
    gallery: ["/images/product-lu-xong-1.jpg"],
    price: 650000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const topSellingProductsData: Product[] = [
  {
    id: 5,
    title: "Tượng Quán Thế Âm Bồ Tát",
    srcUrl: "/images/product-tuong-phat-2.jpg",
    gallery: ["/images/product-tuong-phat-2.jpg"],
    price: 3200000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Vòng Tay Trầm Hương Tự Nhiên",
    srcUrl: "/images/product-vong-tay-1.jpg",
    gallery: ["/images/product-vong-tay-1.jpg"],
    price: 1200000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Kinh Luân Để Bàn",
    srcUrl: "/images/product-kinh-luan-1.jpg",
    gallery: ["/images/product-kinh-luan-1.jpg"],
    price: 950000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 8,
    title: "Đèn Hoa Sen Pha Lê",
    srcUrl: "/images/product-den-hoa-sen-1.jpg",
    gallery: ["/images/product-den-hoa-sen-1.jpg"],
    price: 750000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Phật tử An Nhiên",
    content:
      '"Tôi đã thỉnh một tôn tượng Phật A Di Đà tại An Lạc. Tượng rất trang nghiêm, đường nét tinh xảo. Mỗi khi chiêm bái, tôi cảm thấy tâm mình an tịnh hơn rất nhiều. Xin cảm ơn shop.”',
    rating: 5,
    date: "14 Tháng 8, 2023",
  },
  {
    id: 2,
    user: "Liên Hoa",
    content: `"Chuỗi tràng hạt gỗ bồ đề của shop rất chất lượng. Hạt tròn đều, vân gỗ đẹp tự nhiên. Tôi dùng để niệm Phật hàng ngày và cảm thấy rất hoan hỷ.”`,
    rating: 5,
    date: "15 Tháng 8, 2023",
  },
  {
    id: 3,
    user: "Minh Tâm",
    content: `"Âm thanh của chuông xoay rất trong và ngân vang, giúp tôi thư giãn sâu sau những giờ làm việc căng thẳng. Một pháp khí tuyệt vời để chữa lành tâm hồn.”`,
    rating: 5,
    date: "16 Tháng 8, 2023",
  },
];