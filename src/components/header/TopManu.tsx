"use client"

import { Search, ChevronDown, Phone,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useState } from "react"
import logo from "../../../public/logo/10mslogo-svg (4).svg"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

import dynamic from "next/dynamic"


export default function TopMenu() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
const LanguageButton = dynamic(() => import("@/components/header/LanguageButton"), {
  ssr: false,
})
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
         <MobileMenu/>

          {/* Logo */}
         <Link href="/">
          <div className="flex-shrink-0">
            <Image src={logo} width={100} height={100} alt="Logo"  />
          </div>
         </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="ক্লাস কোর্স, লিখে স্কুল প্রোগ্রাম সার্চ করুন..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">
                Class 6-12
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Class 6</DropdownMenuItem>
                <DropdownMenuItem>Class 7</DropdownMenuItem>
                <DropdownMenuItem>Class 8</DropdownMenuItem>
                <DropdownMenuItem>Class 9</DropdownMenuItem>
                <DropdownMenuItem>Class 10</DropdownMenuItem>
                <DropdownMenuItem>HSC</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">
                Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Programming</DropdownMenuItem>
                <DropdownMenuItem>Design</DropdownMenuItem>
                <DropdownMenuItem>Language</DropdownMenuItem>
                <DropdownMenuItem>Business</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">
              Admission
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">
                Online Batch
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>HSC 2025</DropdownMenuItem>
                <DropdownMenuItem>HSC 2026</DropdownMenuItem>
                <DropdownMenuItem>SSC 2025</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">
                English Centre
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>IELTS</DropdownMenuItem>
                <DropdownMenuItem>Spoken English</DropdownMenuItem>
                <DropdownMenuItem>Business English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 p-4 ">
            {/* Language Selector - Hidden on small screens */}
           <LanguageButton/>

            {/* Phone Number - Hidden on small screens */}
            <div className="hidden sm:flex items-center text-gray-700">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-medium text-sm">16910</span>
            </div>

            {/* Login Button */}
            <Button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-3 sm:px-6 py-2 rounded-md font-medium text-sm">
              লগ-ইন
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="ক্লাস কোর্স, লিখে স্কুল প্রোগ্রাম সার্চ করুন..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
