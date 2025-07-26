/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { Data } from "@/types/product";

interface AboutSectionProps {
  data: Data;
}

export default function FaqSection({ data }: AboutSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqSection = data?.sections?.find(
    (section: any) => section.type === 'faq'
  );

  const faqData = faqSection?.values || [];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        {faqSection?.name}
      </h2>

      <div className="bg-white border border-gray-400 shadow-md rounded-lg divide-y divide-gray-300">
        {faqData.map((item: any, index: number) => (
          <div key={index}>
            {/* Accordion Header */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleItem(index)}
            >
              <div
                className="text-md text-black font-semibold flex-1 [&>h2]:text-base [&>h2]:font-semibold"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />
              <div className="ml-4 flex-shrink-0">
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>

            {/* Accordion Content */}
            {openItems.includes(index) && (
              <CardContent className="pt-0 pb-4 px-4">
                <div className="border-t border-gray-100 pt-4 text-gray-700 text-sm leading-relaxed">
                  <div
                    className="space-y-2 [&>p]:mb-3 [&>li]:mb-2 [&>li]:pl-2 [&>li]:list-disc [&>ul]:pl-5"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </CardContent>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
