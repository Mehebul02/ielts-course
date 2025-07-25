/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button } from '../ui/button';

const FDFButton = ({ item }: { item: any }) => {
    return (
        <div>
            <a href={item.cta.clicked_url} target="_blank" rel="noopener noreferrer">
                                      
                                        <Button
                                            className="mt-4 relative group border-none bg-transparent p-0 outline-none cursor-pointer  font-medium uppercase text-base"
                                        >
                                            <span className="absolute top-0 left-0 w-full h-full  bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>

                                            <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>

                                            <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r bg-green-600 gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                                                <span className="select-none">{item.cta.text || 'Download Now'}</span>

                                            </div>
                                        </Button>
                                    </a>
        </div>
    );
};

export default FDFButton;