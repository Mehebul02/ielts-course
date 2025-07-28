import { Check } from "lucide-react"

export default function CourseDetails() {
  return (
    <div className=" mx-auto  space-y-8">
      {/* Course Details Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Course details</h2>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">ইউটিউবেট সংযোগ (ওয়াইফাই বা মোবাইল ইউটিউবেট)</span>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">স্মার্টফোন অথবা পিসি</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Process Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Payment process</h2>

        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-700">
            কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline font-medium">
              এই ভিডিওটি দেখুন
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
