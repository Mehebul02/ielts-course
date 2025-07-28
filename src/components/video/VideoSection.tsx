/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Play } from 'lucide-react'
import { Data } from '@/types/product'
import Image from 'next/image'
import CTA from './CTA'
import CourseInfoCard from './Course_Info_Card'

interface VideoProps {
  data: Data
}

export default function VideoSection({ data }: VideoProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  const medias = (data?.media || []).filter(
    (media) => media.name !== 'sqr_img'
  )

  return (
    <div className="bg-white border-t border-gray-200 shadow rounded-xl  px-4 md:px-6 lg:px-2 ">
      {/* Main Swiper */}
      <div className="w-full max-w-md mx-auto mt-3 ">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mainSwiper"
        >
          {medias.map((media, idx) => (
            <SwiperSlide key={idx}>
              {media.resource_type === 'video' ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  {playingVideoId === media.resource_value ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${media.resource_value}?autoplay=1`}
                      className="absolute top-0 left-0 w-full h-full"
                      allowFullScreen
                      allow="autoplay"
                    />
                  ) : (
                    <div
                      className="relative w-full h-0 pb-[56.25%] bg-black/70 cursor-pointer group"
                      onClick={() => setPlayingVideoId(media.resource_value)}
                    >
                      <Image
                        src={
                          media.thumbnail_url ||
                          `https://img.youtube.com/vi/${media.resource_value}/0.jpg`
                        }
                        alt="video thumbnail"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-3 rounded-full shadow-lg group-hover:scale-110 transition duration-200 ease-in-out">
                          <Play className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full flex justify-center">
                  <img
                    src={media.resource_value}
                    alt={`media-${idx}`}
                    className="w-full max-h-[500px] object-contain rounded-lg"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnailSwiper mt-4"
        >
          {medias.map((media, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <div className="w-full h-20 sm:h-24 md:h-28 lg:h-20 xl:h-20 rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={media.thumbnail_url || media.resource_value}
                  alt={`thumb-${idx}`}
                  className="w-full h-full object-cover"
                  width={120}
                  height={80}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*   course info or CTA below */}
     <div>
      <CTA  />
      <CourseInfoCard data={data} />
     </div>
    </div>
  )
}
