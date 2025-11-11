import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Noto_Serif } from "next/font/google";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import { CartProvider } from "@/types/CartContext";
import { Toaster } from "react-hot-toast";
import Providers from "./providers"; // Giữ lại nếu bạn có các provider khác

export const metadata: Metadata = {
  title: "An Lạc - Vật Phẩm Phật Giáo",
  description: "Gieo duyên an lành, tìm về an lạc nội tâm.",
};

export const viewport: Viewport = {
  themeColor: "#B8860B", // DarkGoldenRod - một màu vàng sậm ấm áp
};

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={notoSerif.variable}>
      <body>
        <Toaster position="top-center" />
        <HolyLoader color="#868686" />
        <CartProvider>
          <Providers>
            <TopNavbar />
            {children}
          </Providers>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
