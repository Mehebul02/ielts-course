/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import {
  Star,
  Play,
  Download,
  Users,
  Clock,
  BookOpen,
  Video,
  FileText,
  Headphones,
  Award,
  Facebook,
  MessageCircle,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import CourseBanner from "@/components/banner/CourseBanner";
import CourseFeatures from "@/components/CourseFeatures/CourseFeatures";

import { fetchProductData } from "@/lib/api";

import { GetServerSideProps } from "next";
import CourseInstructor from "@/components/CourseInstructor/CourseInstructor"
import LearnCourse from "@/components/whatLearn/LearnCourse"
import AboutSection from "@/components/about/AboutSection"
import Feature_explanations from "@/components/feature_explanations/Feature_Explanations"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"
import CourseDetails from "@/components/course_details/CourseDetails"
import FaqSection from "@/components/faq/FaqSection"
import NavigationLink from "@/components/Navigation"
import VideoSection from "@/components/video/VideoSection"

interface ProductPageProps {
  data: any;
}

export default function CoursePage({ data }: ProductPageProps) {
  const courseData = data?.data;

  return (
    <div className="min-h-screen bg-gray-50 w-full ">
      {/* Banner */}
      <CourseBanner data={courseData} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Main Content */}
          <div >
            {/* Navigation Tabs */}
            <NavigationLink />
            {/* Course Instructor */}
            <CourseInstructor data={courseData} />
            {/* How the course is laid out */}
            <CourseFeatures data={courseData} />
            {/* What you will learn */}
            <LearnCourse data={courseData} />
            {/* about section  */}
            <AboutSection data={courseData} />
            {/* feature_explanations  */}
            <Feature_explanations data={courseData} />
            {/* testimonials  */}
            <TestimonialsSection data={courseData} />
            {/* <TestimonialsSection/> */}
            <CourseDetails />
            {/* faq section   */}
            <FaqSection data={courseData} />
          </div>
          <div className="space-y-6 top-0   lg:-mt-32">
            <div className="sticky top-0">
              <VideoSection data={courseData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = (context.query.lang as string) || "en";

  try {
    const data = await fetchProductData(lang);
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};