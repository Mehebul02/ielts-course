"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const NavigationHeader = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const tabs = [
    "Course Instruction",
    "How the course is laid out",
    "What you will learn by doing the course",
  ]

  const goToPreviousTab = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1)
    }
  }

  const goToNextTab = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1)
    }
  }

  return (
    <div className="sticky top-0 z-50 hidden lg:block">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          {activeTab > 0 && (
            <button
              onClick={goToPreviousTab}
              className={`
                absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 
                transition-all duration-300 hover:bg-gray-50 hover:shadow-xl
                ${isHovered ? "opacity-100 translate-x-0 bg-white shadow-2xl" : "opacity-0 -translate-x-2 "}
              `}
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Right Arrow */}
          {activeTab < tabs.length - 1 && (
            <button
              onClick={goToNextTab}
              className={`
                absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 
                transition-all duration-300 hover:bg-gray-50 hover:shadow-xl
                ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
              `}
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Navigation Tabs */}
          <div className="flex gap-8 justify-center px-8 bg-white border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  relative pb-4 pt-4 whitespace-nowrap font-medium text-sm transition-colors duration-200 cursor-pointer
                  ${activeTab === index ? "text-blue-600 " : "text-gray-600 hover:text-gray-900"}
                `}
              >
                {tab}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationHeader
