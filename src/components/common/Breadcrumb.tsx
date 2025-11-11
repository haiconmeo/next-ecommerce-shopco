import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-6 text-sm font-serif">
      <ol className="flex items-center space-x-1 text-[#4A2E20]/60">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-[#4A2E20] transition-colors">
                  {item.label}
                </Link>
                <ChevronRight className="w-4 h-4 mx-1" />
              </>
            ) : (
              <span className="font-medium text-[#4A2E20]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;