import Image from "next/image";
import React from "react";

const valuesData: { id: string; srcUrl: string; label: string }[] = [
  {
    id: "compassion",
    srcUrl: "/icons/value-compassion.svg", // Icon hình trái tim hoặc bàn tay che chở
    label: "Từ Bi",
  },
  {
    id: "wisdom",
    srcUrl: "/icons/value-wisdom.svg", // Icon hình hoa sen hoặc quyển kinh
    label: "Trí Tuệ",
  },
  {
    id: "peace",
    srcUrl: "/icons/value-peace.svg", // Icon hình chim bồ câu hoặc đá cân bằng
    label: "Bình An",
  },
  {
    id: "mindfulness",
    srcUrl: "/icons/value-mindfulness.svg", // Icon hình vòng tròn enso hoặc người ngồi thiền
    label: "Chánh Niệm",
  },
];

const CoreValues = () => {
  return (
    <div className="bg-[#FBF9F5]">
      <div className="max-w-frame mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 md:py-12 px-4">
        {valuesData.map((value) => (
          <div key={value.id} className="flex flex-col items-center space-y-3">
            <Image
              src={value.srcUrl}
              width={48}
              height={48}
              alt={value.label}
            />
            <span className="font-serif text-lg text-[#4A2E20]">{value.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
