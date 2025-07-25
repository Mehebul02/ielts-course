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

import Banner from "@/components/banner/CourseBanner"
import CourseBanner from "@/components/banner/CourseBanner"
import { fetchProductData } from "@/lib/api"
import CourseInstructor from "@/components/CourseInstructor/CourseInstructor"
import CoursePage from "@/pages/Courses"


export default async function IELTSCoursePage() {
    const data = await fetchProductData();
  
  return (
    <div>
      <CoursePage data={data} />
    </div>
    // <div className="min-h-screen bg-gray-50">
    //   <CoursePage data={data}/>
    //   {/* Banner */}
    //   <CourseBanner data={data}/>
    

    //   <div className="max-w-6xl mx-auto px-6 py-8">
    //     <div className="grid lg:grid-cols-3 gap-8">
    //       {/* Main Content */}
    //       <div className="lg:col-span-2 space-y-8">
    //         {/* Navigation Tabs */}
    //         <div className="flex gap-6 border-b">
    //           <button className="pb-2 border-b-2 border-blue-500 text-blue-600 font-medium">Course Instruction</button>
    //           <button className="pb-2 text-gray-600">How the course is laid out</button>
    //           <button className="pb-2 text-gray-600">What you will learn by doing the course</button>
    //         </div>

    //         {/* Course Instructor */}
    //        <CourseInstructor data={data}/>

    //         {/* How the course is laid out */}
    //         <div>
    //           <h2 className="text-xl font-bold mb-4">How the course is laid out</h2>
    //           <div className="grid md:grid-cols-2 gap-4">
    //             <Card className="bg-green-50 border-green-200">
    //               <CardContent className="p-4">
    //                 <div className="flex items-center gap-3 mb-2">
    //                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
    //                     <BookOpen className="w-4 h-4 text-white" />
    //                   </div>
    //                   <h3 className="font-semibold">৪৮+ ঘণ্টার লেকচার</h3>
    //                 </div>
    //                 <p className="text-sm text-gray-600">
    //                   IELTS Academic & General Training এর ৪ টি অংশের জন্য বিস্তারিত লেকচার ও অনুশীলন।
    //                 </p>
    //               </CardContent>
    //             </Card>

    //             <Card className="bg-blue-50 border-blue-200">
    //               <CardContent className="p-4">
    //                 <div className="flex items-center gap-3 mb-2">
    //                   <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
    //                     <FileText className="w-4 h-4 text-white" />
    //                   </div>
    //                   <h3 className="font-semibold">৫০+ লেকচার নোট</h3>
    //                 </div>
    //                 <p className="text-sm text-gray-600">
    //                   Speaking, Writing, Listening ও Reading এর জন্য বিস্তারিত নোট এবং টিপস পাবেন।
    //                 </p>
    //               </CardContent>
    //             </Card>

    //             <Card className="bg-orange-50 border-orange-200">
    //               <CardContent className="p-4">
    //                 <div className="flex items-center gap-3 mb-2">
    //                   <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
    //                     <Award className="w-4 h-4 text-white" />
    //                   </div>
    //                   <h3 className="font-semibold">লাইভ ক্লাসের রেকর্ডিং</h3>
    //                 </div>
    //                 <p className="text-sm text-gray-600">
    //                   Speaking ও Writing এর জন্য লাইভ ক্লাসের রেকর্ডিং দেখে অনুশীলন করতে পারবেন।
    //                 </p>
    //               </CardContent>
    //             </Card>

    //             <Card className="bg-purple-50 border-purple-200">
    //               <CardContent className="p-4">
    //                 <div className="flex items-center gap-3 mb-2">
    //                   <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
    //                     <Users className="w-4 h-4 text-white" />
    //                   </div>
    //                   <h3 className="font-semibold">অনলাইন সাপোর্ট গ্রুপ</h3>
    //                 </div>
    //                 <p className="text-sm text-gray-600">কোর্স সংক্রান্ত যেকোনো প্রশ্নের উত্তর পাবেন আমাদের সাপোর্ট গ্রুপে।</p>
    //               </CardContent>
    //             </Card>
    //           </div>
    //         </div>

    //         {/* Free PDF Section */}
    //         <Card className="bg-slate-900 text-white">
    //           <CardContent className="p-6">
    //             <div className="flex items-center gap-4">
    //               <div className="flex-1">
    //                 <div className="flex items-center gap-2 mb-2">
    //                   <Download className="w-5 h-5 text-orange-400" />
    //                   <span className="text-orange-400 font-semibold">Free PDF</span>
    //                 </div>
    //                 <h3 className="text-lg font-bold mb-2">
    //                   IELTS Confirm 7+ Score
    //                   <br />
    //                   [Guidelines]
    //                 </h3>
    //                 <p className="text-sm text-gray-300 mb-4">
    //                   IELTS এ ভাল স্কোর করার জন্য প্রয়োজনীয়
    //                   <br />
    //                   গাইডলাইন পেতে ডাউনলোড করুন।
    //                 </p>
    //                 <Button className="bg-green-600 hover:bg-green-700">ফ্রি PDF ডাউনলোড করুন</Button>
    //               </div>
    //               <div className="flex-shrink-0">
    //                 <Image
    //                   src="/placeholder.svg?height=120&width=120&text=PDF+Guide"
    //                   alt="IELTS PDF Guide"
    //                   width={120}
    //                   height={120}
    //                   className="rounded-lg"
    //                 />
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         {/* What you will learn */}
    //         <div>
    //           <h2 className="text-xl font-bold mb-4">What you will learn by doing the course</h2>
    //           <div className="grid md:grid-cols-2 gap-6">
    //             <div className="space-y-4">
    //               <div className="flex items-start gap-3">
    //                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                 <p className="text-sm">Detailed idea and explanation of each section of the IELTS test</p>
    //               </div>
    //               <div className="flex items-start gap-3">
    //                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                 <p className="text-sm">Proper schedule and strategy to get a good band score in the IELTS test</p>
    //               </div>
    //               <div className="flex items-start gap-3">
    //                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                 <p className="text-sm">Time management strategy to get a good band score in the IELTS test</p>
    //               </div>
    //             </div>
    //             <div className="space-y-4">
    //               <div className="flex items-start gap-3">
    //                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                 <p className="text-sm">Formats and strategies to ace the IELTS test</p>
    //               </div>
    //               <div className="flex items-start gap-3">
    //                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                 <p className="text-sm">Speaking accurately on any topic in the IELTS speaking test</p>
    //               </div>
    //               <div className="flex items-start gap-3">
    //                 <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                 <p className="text-sm">
    //                   Through the IELTS Reading and IELTS Listening Mock Tests, you will get a feel for responding and a
    //                   good band score in the IELTS exam.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Sidebar */}
    //       <div className="space-y-6">
    //         {/* Video Preview */}
    //         <Card>
    //           <CardContent className="p-0">
    //             <div className="relative aspect-video bg-gray-200 rounded-t-lg">
    //               <Image
    //                 src="/placeholder.svg?height=200&width=300&text=Course+Preview"
    //                 alt="Course preview"
    //                 fill
    //                 className="object-cover rounded-t-lg"
    //               />
    //               <div className="absolute inset-0 flex items-center justify-center">
    //                 <Button size="lg" className="rounded-full w-16 h-16">
    //                   <Play className="w-6 h-6" />
    //                 </Button>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         {/* Pricing */}
    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="text-center mb-4">
    //               <div className="flex items-center justify-center gap-2 mb-2">
    //                 <span className="text-2xl font-bold">৳৩৮৫০</span>
    //                 <span className="text-lg text-gray-500 line-through">৳৫০০০</span>
    //                 <Badge variant="destructive">২৩% ছাড়</Badge>
    //               </div>
    //               <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
    //                 Enroll
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         {/* Course Features */}
    //         <Card>
    //           <CardContent className="p-6">
    //             <h3 className="font-bold mb-4">এই কোর্সে যা থাকছে</h3>
    //             <div className="space-y-3">
    //               <div className="flex items-center gap-3">
    //                 <Users className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">Total Enrolled 23566</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <Clock className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">Time Period 90 hours</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <Video className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">54 Videos</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <BookOpen className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">10 Reading & 10 Listening Mock tests</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <FileText className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">35 Lecture Sheets</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <Headphones className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">25 Video Lectures</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <Award className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">1 Free Hardcopy Book Delivered</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <Facebook className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">Facebook Support Group</span>
    //               </div>
    //               <div className="flex items-center gap-3">
    //                 <MessageCircle className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm">Course Validity Lifetime</span>
    //               </div>
    //             </div>
    //             <div className="mt-4 pt-4 border-t">
    //               <p className="text-xs text-gray-600">কোর্স সম্পর্কে বিস্তারিত জানতে</p>
    //               <Button variant="link" className="p-0 h-auto text-green-600">
    //                 এখানে ক্লিক করুন
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
