/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Data } from "@/types/product"

interface TestimonialData {
  id: string
  name: string
  description: string
  profile_image: string
  testimonial: string
  thumb?: string
  video_url?: string
  video_type?: string
}

interface TestimonialsSectionProps {
  data: Data
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonialsData = data?.sections?.find(
    (section: any) => section.type === "testimonials"
  )

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= testimonialsData.values.length ? 0 : prev + 2
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 2 < 0
        ? Math.max(0, testimonialsData.values.length - 2)
        : prev - 2
    )
  }

  const handleVideoPlay = (videoUrl: string) => {
    if (videoUrl) {
      window.open(`https://www.youtube.com/watch?v=${videoUrl}`, "_blank")
    }
  }

  const currentTestimonials = testimonialsData.values.slice(
    currentIndex,
    currentIndex + 2
  )

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 2 >= testimonialsData.values.length ? 0 : prev + 2
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonialsData.values.length])

  return (
    <div className="">
      <h2 className="text-2xl font-bold  mb-8">{testimonialsData?.name}</h2>

      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-gray-100 hover:bg-gray-200 border-gray-300"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-gray-100 hover:bg-gray-200 border-gray-300"
          onClick={nextSlide}
          disabled={currentIndex + 2 >= testimonialsData.values.length}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-12">
          {currentTestimonials.map((testimonial: any) => (
            <Card key={testimonial.id} className="relative overflow-hidden border-2 border-gray-200">
              {/* Quote Icon */}
              <div className="absolute top-0 left-4 text-red-300 text-6xl font-serif z-10">&quot;</div>

              {/* Content */}
              <div className="p-6 pt-12">
                {testimonial.thumb && testimonial.video_url ? (
                  <div
                    className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => handleVideoPlay(testimonial.video_url!)}
                  >
                    <Image
                      src={testimonial.thumb || "/placeholder.svg"}
                      alt={`${testimonial.name} testimonial`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-gray-800 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed line-clamp-6">{testimonial.testimonial}</p>
                    <button className="text-green-600 text-sm font-medium hover:underline">আরও দেখুন ▼</button>
                  </div>
                )}

                {/* Profile Section */}
                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={testimonial.profile_image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonialsData && testimonialsData.values && Array.from({
          length: Math.ceil(testimonialsData.values.length / 2),
        }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / 2) === index
                ? "bg-red-500"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index * 2)}
          />
        ))}
      </div>
    </div>
  )
}
