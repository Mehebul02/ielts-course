import { ChevronDown, Menu, Phone, Search, } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from '../ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
  
const MobileMenu = () => {



    return (
         <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="border-b pb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="ক্লাস কোর্স, লিখে স্কুল প্রোগ্রাম সার্চ করুন..."
                        className="pl-10 pr-4 py-2 w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium">
                        Class 6-12
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>Class 6</DropdownMenuItem>
                        <DropdownMenuItem>Class 7</DropdownMenuItem>
                        <DropdownMenuItem>Class 8</DropdownMenuItem>
                        <DropdownMenuItem>Class 9</DropdownMenuItem>
                        <DropdownMenuItem>Class 10</DropdownMenuItem>
                        <DropdownMenuItem>HSC</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium">
                        Skills
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>Programming</DropdownMenuItem>
                        <DropdownMenuItem>Design</DropdownMenuItem>
                        <DropdownMenuItem>Language</DropdownMenuItem>
                        <DropdownMenuItem>Business</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <a href="#" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">
                      Admission
                    </a>

                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium">
                        Online Batch
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>HSC 2025</DropdownMenuItem>
                        <DropdownMenuItem>HSC 2026</DropdownMenuItem>
                        <DropdownMenuItem>SSC 2025</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium">
                        English Centre
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>IELTS</DropdownMenuItem>
                        <DropdownMenuItem>Spoken English</DropdownMenuItem>
                        <DropdownMenuItem>Business English</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-gray-900 font-medium">
                        More
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuItem>About Us</DropdownMenuItem>
                        <DropdownMenuItem>Blog</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="font-medium">16910</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium">
                      লগ-ইন
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
    );
};

export default MobileMenu;