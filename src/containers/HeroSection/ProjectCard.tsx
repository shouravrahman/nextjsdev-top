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
        <Link
            href={liveLink}
            className='relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-3xl bg-orange-500 p-4 text-center'
        >
            {image && (
                <div className=' h-full w-full transition-all '>
                    <Image
                        src={image}
                        alt='Project'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-2xl'
                    />
                </div>
            )}
            {video && (
                <div className='relative h-0 w-full overflow-hidden rounded-2xl pb-[56.25%]'>
                    <video
                        src={video}
                        controls
                        className='absolute inset-0 h-full w-full rounded-2xl object-cover'
                    ></video>
                </div>
            )}
            <section className='flex w-full flex-col  gap-4 bg-transparent  '>
                <h2 className='z-10 text-2xl font-bold text-yellow-200'>
                    {title}
                </h2>
                <div className='flex w-3/4 justify-center gap-10'>
                    <div className='flex justify-center gap-2'>
                        <Link
                            href={githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src='/github-fill.svg'
                                alt='GitHub'
                                className='h-8 w-8 invert'
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link
                            href={liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src='/links-line.svg'
                                alt='Live'
                                className='h-8 w-8 invert'
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                    <div className='z-10 flex flex-wrap justify-center gap-2'>
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className='rounded-2xl bg-emerald-700  px-2 py-1 text-xs font-semibold text-white'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </Link>
    );
};

export default ProjectCard;
