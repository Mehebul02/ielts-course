/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { Check } from "lucide-react"
import { Data } from "@/types/product"

interface FeatureExplanationsProps {
    data: Data
}

export default function Feature_explanations({ data }: FeatureExplanationsProps) {
    const featureExplanations = data?.sections?.find(
        (section: any) => section.type === 'feature_explanations'
    )

    const courseFeatures = featureExplanations?.values || []

    return (
        <div className="max-w-4xl mx-auto bg-white">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
                {featureExplanations?.name}
            </h1>

            {/* Dynamic Sections */}
            {courseFeatures.map((feature: any, index: number) => (
                <div
                    key={feature.id}
                    className="border border-gray-200 rounded-lg p-6 mb-6"
                >
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {feature.title}
                            </h2>
                            <div className="space-y-3">
                                {feature.checklist.map((item: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image block */}
                        <div className="flex justify-center">
                            {/* Thumbnail image */}
                            <div className=" ">
                                <Image
                                    src={feature.file_url}
                                    alt={feature.title}
                                    width={200}
                                    height={200}
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
