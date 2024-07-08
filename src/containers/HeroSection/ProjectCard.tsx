import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    image?: any;
    video?: string;
    githubLink: string;
    liveLink: string;
    tags: string[];
    title: string;
    subtitle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    video,
    githubLink,
    liveLink,
    tags,
    title,
    subtitle,
}) => {
    return (
        <a
            href={liveLink}
            className='group relative block h-64 sm:h-80 lg:h-96'
        >
            <span className='absolute inset-0 rounded-2xl border-2 border-dashed border-yellow-700'></span>

            <div className='relative flex h-full transform items-end rounded-2xl border-2  border-white bg-amber-700 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
                <div className='p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='size-10 sm:size-12'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            className='absolute inset-0 h-[300px] w-[200px] rounded-2xl'
                            layout='fill'
                            objectFit='cover'
                        />
                    )}

                    <h2 className='mt-4 text-xl font-medium sm:text-2xl'>
                        {title}
                    </h2>
                </div>

                <div className='absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
                    <h3 className='my-4 px-4 text-xl font-medium text-white sm:text-2xl'>
                        {title}
                    </h3>

                    <p className='mb-4 max-w-sm px-4 text-sm text-white sm:text-base'>
                        {subtitle}
                    </p>
                    <div className='flex items-center justify-center gap-4'>
                        {tags?.map((tag, idx) => (
                            <div
                                key={idx}
                                className='rounded-[800px] border-2 border-solid border-emerald-400 px-4 py-1.5 text-center text-sm font-semibold leading-6 text-white max-md:max-w-full max-md:px-5'
                            >
                                {tag}
                            </div>
                        ))}
                        {/* <p className='mt-4 px-4 text-sm  text-black'>
                            Tech Stack:{" "}
                            <span className=''>{tags.join(", ")}</span>
                        </p> */}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
