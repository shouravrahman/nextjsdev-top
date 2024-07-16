import React from "react";
import { ContentsTypeCard, MyInfoCard } from "@/components/index";
import Image from "next/legacy/image";
import Link from "next/link";
import Bento from "./Bento.tsx";
import Services from "./Services.tsx";
import Skills from "./Skills.tsx";
import Contact from "./Contact.tsx";

const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='mt-20 max-md:max-w-full  md:mt-10'>
                    <div className='relative flex gap-5 max-md:flex-col max-md:gap-0'>
                        <div className='flex flex-col '>
                            <img
                                loading='lazy'
                                draggable='false'
                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/b54a9f2db408ee65f7a9d6f2e52c4bb03c25eaa70664945343de55e1f74a4a5a?apiKey=da07e19f41d04fb48b0651b8deb55908&'
                                className='absolute left-0 top-10 opacity-5 md:relative md:mt-0 md:h-full md:w-full md:opacity-100'
                            />
                        </div>
                        <div className='z-100 flex flex-col  max-md:w-full'>
                            <div className='flex grow flex-col items-center p-12 max-md:max-w-full max-md:px-5'>
                                <div className='flex flex-col self-stretch px-10 pt-3.5 max-md:max-w-full max-md:px-5'>
                                    <div className=' text-center text-8xl font-bold  tracking-tighter text-yellow-600 max-md:max-w-full max-md:text-6xl'>
                                        Turning ideas
                                    </div>
                                    <div className='mt-7 flex flex-col gap-4 max-md:max-w-full'>
                                        <div className=' text-center text-8xl font-bold leading-snug tracking-tighter text-yellow-400  max-md:max-w-full  max-md:text-6xl'>
                                            into impactful solutions,
                                        </div>
                                        <div className=' text-center text-8xl font-bold tracking-tighter text-yellow-200  max-md:max-w-full  max-md:text-6xl'>
                                            one project at a time.
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-16 text-center  text-xl text-white max-md:mt-6 max-md:max-w-full'>
                                    Hi, I'm Shourav, specializing in Next.js and
                                    React.js to create amazing web experiences
                                    with years of passion and expertise.
                                </div>
                                <button className='relative mt-10 h-[40px]  w-[250px]'>
                                    <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-orange-400'></span>
                                    <span className='relative inline-block h-full w-full rounded border-2 border-white bg-white px-3 py-1 text-center font-bold  text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900'>
                                        Hire Me
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='ml-5 flex w-[17%] flex-col max-md:ml-0 max-md:w-full'>
                            <img
                                loading='lazy'
                                src='https://cdn.builder.io/api/v1/image/assets/TEMP/a18107712d06e9e72f8bad9935714ac1bcd777c047ba132e2d23a7cd8bc1f58a?apiKey=da07e19f41d04fb48b0651b8deb55908&'
                                className='absolute bottom-0 right-0 opacity-5 md:relative md:mt-0 md:h-full md:w-full md:opacity-100'
                                draggable='false'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
