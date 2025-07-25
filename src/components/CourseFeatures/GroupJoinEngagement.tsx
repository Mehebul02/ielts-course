import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Data } from '@/types/product';
import FDFButton from './FDFButton';

interface CourseFeaturesProps {
    data: Data;
}

const GroupJoinEngagement = ({ data }: CourseFeaturesProps) => {
    const groupSection = data?.sections?.find(
        (section) => section.type === 'group_join_engagement'
    );

    const items = groupSection?.values || [];

    return (
        <div className="mt-6 space-y-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url(${item.background?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Card className="bg-black bg-opacity-60 text-white">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Image
                                            src={item.top_left_icon_img}
                                            alt="Top Icon"
                                            width={204}
                                            height={204}
                                            className="rounded-full"
                                        />

                                    </div>
                                    <h3
                                        className="text-2xl font-bold mb-2"
                                        style={{ color: item.title_color || '#fff' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-sm mb-4"
                                        style={{ color: item.description_color || '#ddd' }}
                                    >
                                        {item.description}
                                    </p>
                                    <FDFButton item={item}/>
                                </div>
                                <div className="flex-shrink-0">
                                    <Image
                                        src={item.thumbnail}
                                        alt="Thumbnail"
                                        width={200}
                                        height={200}
                                        className="rounded-lg w-[350px]"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default GroupJoinEngagement;
