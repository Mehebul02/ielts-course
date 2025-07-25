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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import CourseBanner from "@/components/banner/CourseBanner";
import CourseFeatures from "@/components/CourseFeatures";

import { fetchProductData } from "@/lib/api";

import { GetServerSideProps } from "next";
import Head from "next/head";
import CourseInstructor from "@/components/CourseInstructor/CourseInstructor"

interface ProductPageProps {
  data: any;
}

export default function CoursePage({ data }: ProductPageProps) {
const courseData = data?.data;

  return (
      <div className="min-h-screen bg-gray-50">
     
      {/* Banner */}
      <CourseBanner data={courseData}/>
    

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="flex gap-6 border-b">
              <button className="pb-2 border-b-2 border-blue-500 text-blue-600 font-medium">Course Instruction</button>
              <button className="pb-2 text-gray-600">How the course is laid out</button>
              <button className="pb-2 text-gray-600">What you will learn by doing the course</button>
            </div>

            {/* Course Instructor */}
           <CourseInstructor data={courseData}/>

            {/* How the course is laid out */}
           <CourseFeatures data={courseData}/>

            {/* Free PDF Section */}
            <Card className="bg-slate-900 text-white">
              {/* <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-semibold">Free PDF</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      IELTS Confirm 7+ Score
                      <br />
                      [Guidelines]
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      IELTS এ ভাল স্কোর করার জন্য প্রয়োজনীয়
                      <br />
                      গাইডলাইন পেতে ডাউনলোড করুন।
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700">ফ্রি PDF ডাউনলোড করুন</Button>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=120&width=120&text=PDF+Guide"
                      alt="IELTS PDF Guide"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent> */}
            </Card>

            {/* What you will learn */}
            <div>
              <h2 className="text-xl font-bold mb-4">What you will learn by doing the course</h2>
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">Detailed idea and explanation of each section of the IELTS test</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">Proper schedule and strategy to get a good band score in the IELTS test</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">Time management strategy to get a good band score in the IELTS test</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">Formats and strategies to ace the IELTS test</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">Speaking accurately on any topic in the IELTS speaking test</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm">
                      Through the IELTS Reading and IELTS Listening Mock Tests, you will get a feel for responding and a
                      good band score in the IELTS exam.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Preview */}
            {/* <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-200 rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=Course+Preview"
                    alt="Course preview"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Pricing */}
            <Card>
              {/* <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-bold">৳৩৮৫০</span>
                    <span className="text-lg text-gray-500 line-through">৳৫০০০</span>
                    <Badge variant="destructive">২৩% ছাড়</Badge>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                    Enroll
                  </Button>
                </div>
              </CardContent> */}
            </Card>

            {/* Course Features */}
            <Card>
              {/* <CardContent className="p-6">
                <h3 className="font-bold mb-4">এই কোর্সে যা থাকছে</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">Total Enrolled 23566</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">Time Period 90 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">54 Videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">10 Reading & 10 Listening Mock tests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">35 Lecture Sheets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Headphones className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">25 Video Lectures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">1 Free Hardcopy Book Delivered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Facebook className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">Facebook Support Group</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">Course Validity Lifetime</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-600">কোর্স সম্পর্কে বিস্তারিত জানতে</p>
                  <Button variant="link" className="p-0 h-auto text-green-600">
                    এখানে ক্লিক করুন
                  </Button>
                </div>
              </CardContent> */}
            </Card>
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
