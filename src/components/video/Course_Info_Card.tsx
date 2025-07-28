import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Data } from "@/types/product"
import Image from "next/image"

interface CourseInfoCardProps {
  data: Data
}

export default function CourseInfoCard({ data }: CourseInfoCardProps) {
  const courseChecklist = data?.checklist || []

  return (
    <div className="w-full max-w-md mx-auto pb-6">
      <div className="pb-3">
        <CardTitle className="text-lg font-semibold text-gray-900 md:text-xl">
          এই কোর্সে যা থাকছে
        </CardTitle>
      </div>
      <div className="space-y-3">
        {courseChecklist.map((item, idx) => (
          <div
            key={item.id || idx}
            className="flex items-start gap-3 text-gray-700"
          >
            <div className="w-5 h-5 min-w-[20px] mt-0.5 rounded overflow-hidden flex-shrink-0">
              <Image
                src={item.icon}
                alt={`${item.text} icon`}
                width={20}
                height={20}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-sm leading-snug">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}