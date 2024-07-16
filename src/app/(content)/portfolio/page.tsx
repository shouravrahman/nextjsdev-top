import { type Metadata } from "next";
import Image from "next/image";

import logoAnimaginary from "/images/logos/animaginary.svg";
import logoCosmos from "/images/logos/cosmos.svg";
import logoHelioStream from "/images/logos/helio-stream.svg";
import logoOpenShuttle from "/images/logos/open-shuttle.svg";
import logoPlanetaria from "/images/logos/planetaria.svg";

import { SimpleLayout } from "@/components/Article/SimpleLayout.tsx";
import { Card } from "@/components/Article/Card.tsx";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Project1",
        githubLink: "https://github.com/project1",
        liveLink: "https://project1.live",
        tags: ["React", "Next.js"],
        href: "https://project1.url",
        subtitle: "blah blah blah",
    },
    {
        id: 2,
        title: "Project1",
        githubLink: "https://github.com/project2",
        liveLink: "https://project2.live",
        tags: ["Node.js", "Express"],
        href: "https://project2.url",
        subtitle: "blah blah blah",
    },
    {
        id: 3,
        title: "Project1",
        githubLink: "https://github.com/project3",
        liveLink: "https://project3.live",
        tags: ["GraphQL", "Apollo"],
        href: "https://project3.url",
        subtitle: "blah blah blah",
    },
    {
        id: 4,
        title: "Project1",
        githubLink: "https://github.com/project4",
        liveLink: "https://project4.live",
        tags: ["Tailwind CSS", "UI/UX"],
        href: "https://project4.url",

        subtitle: "blah blah blah",
    },
    {
        id: 5,
        title: "Project1",
        githubLink: "https://github.com/project5",
        liveLink: "https://project5.live",
        tags: ["TypeScript", "Redux"],
        href: "https://project5.url",

        subtitle: "blah blah blah",
    },
    {
        id: 6,
        title: "Project1",
        githubLink: "https://github.com/project6",
        liveLink: "https://project6.live",
        tags: ["Docker", "Kubernetes"],
        href: "https://project6.url",

        subtitle: "blah blah blah",
    },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
            <path
                d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
                fill='currentColor'
            />
        </svg>
    );
}

export const metadata: Metadata = {
    title: "Projects",
    description: "Things I’ve made trying to put my dent in the universe.",
};

export default function Projects() {
    return (
        <SimpleLayout
            title='Things I’ve made trying to put my dent in the universe.'
            intro='I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.'
        >
            <ul
                role='list'
                className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
            >
                {projects.map((project) => (
                    <Card
                        as='li'
                        key={project.id}
                        className='rounded-2xl bg-orange-300 p-5 text-white '
                    >
                        <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                            <Image
                                src='/public/images/logos/cosmos.svg'
                                alt=''
                                width={10}
                                height={10}
                                className='h-8 w-8'
                            />
                        </div>
                        <h2 className='mt-6 text-lg font-semibold text-zinc-800  '>
                            <Card.Link
                                className='hover:text-white'
                                href={`${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${project.title}`}
                            >
                                {project.title}
                            </Card.Link>
                        </h2>
                        <Card.Description>{project.subtitle}</Card.Description>
                        <div className='mt-6 flex gap-6'>
                            {project.githubLink && (
                                <Link href={project.githubLink}>
                                    <img
                                        src='/github-fill.svg'
                                        alt='GitHub Link'
                                        className='h-8 w-8'
                                    />
                                </Link>
                            )}
                            {/* Live Link */}
                            {project.liveLink && (
                                <Link href={project.liveLink}>
                                    <img
                                        src='/links-line.svg'
                                        alt='Live Link'
                                        className='h-8 w-8'
                                    />
                                </Link>
                            )}
                        </div>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    );
}
