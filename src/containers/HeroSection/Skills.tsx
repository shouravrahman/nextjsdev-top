import React from "react";
import SectionHeader from "./SectionHeader.tsx";

interface Skill {
    name: string;
    category: string;
    icon: string; // URL or import path for the icon
    highlighted: boolean; // Whether the skill should be highlighted
}
const skills: Skill[] = [
    {
        name: "React.js",
        category: "Frontend",
        icon: "/icons/react-icon.svg",
        highlighted: true,
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: "/icons/node-icon.svg",
        highlighted: false,
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: "/icons/nextjs-icon.svg",
        highlighted: true,
    },
    {
        name: "Express.js",
        category: "Backend",
        icon: "/icons/express-icon.svg",
        highlighted: false,
    },
    {
        name: "WordPress",
        category: "Headless CMS",
        icon: "/icons/wordpress-icon.svg",
        highlighted: false,
    },
    {
        name: "Shopify",
        category: "Headless CMS",
        icon: "/icons/shopify-icon.svg",
        highlighted: true,
    },
    {
        name: "SEO",
        category: "Marketing Tools",
        icon: "/icons/seo-icon.svg",
        highlighted: true,
    },
    {
        name: "Google Analytics",
        category: "Marketing Tools",
        icon: "/icons/ga-icon.svg",
        highlighted: false,
    },
    {
        name: "Figma",
        category: "Design Tools",
        icon: "/icons/figma-icon.svg",
        highlighted: true,
    },
    {
        name: "React.js",
        category: "Frontend",
        icon: "/icons/react-icon.svg",
        highlighted: true,
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: "/icons/node-icon.svg",
        highlighted: false,
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: "/icons/nextjs-icon.svg",
        highlighted: true,
    },
    {
        name: "Express.js",
        category: "Backend",
        icon: "/icons/express-icon.svg",
        highlighted: false,
    },
    {
        name: "WordPress",
        category: "Headless CMS",
        icon: "/icons/wordpress-icon.svg",
        highlighted: false,
    },
    {
        name: "Shopify",
        category: "Headless CMS",
        icon: "/icons/shopify-icon.svg",
        highlighted: true,
    },
    {
        name: "SEO",
        category: "Marketing Tools",
        icon: "/icons/seo-icon.svg",
        highlighted: true,
    },
    {
        name: "Google Analytics",
        category: "Marketing Tools",
        icon: "/icons/ga-icon.svg",
        highlighted: false,
    },
    {
        name: "Figma",
        category: "Design Tools",
        icon: "/icons/figma-icon.svg",
        highlighted: true,
    },
    {
        name: "React.js",
        category: "Frontend",
        icon: "/icons/react-icon.svg",
        highlighted: true,
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: "/icons/node-icon.svg",
        highlighted: false,
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: "/icons/nextjs-icon.svg",
        highlighted: true,
    },
    {
        name: "Express.js",
        category: "Backend",
        icon: "/icons/express-icon.svg",
        highlighted: false,
    },
    {
        name: "WordPress",
        category: "Headless CMS",
        icon: "/icons/wordpress-icon.svg",
        highlighted: false,
    },
    {
        name: "Shopify",
        category: "Headless CMS",
        icon: "/icons/shopify-icon.svg",
        highlighted: true,
    },
    {
        name: "SEO",
        category: "Marketing Tools",
        icon: "/icons/seo-icon.svg",
        highlighted: true,
    },
    {
        name: "Google Analytics",
        category: "Marketing Tools",
        icon: "/icons/ga-icon.svg",
        highlighted: false,
    },
    {
        name: "Figma",
        category: "Design Tools",
        icon: "/icons/figma-icon.svg",
        highlighted: true,
    },
];

const Skills = (props: Props) => {
    return (
        <div className='flex flex-col justify-center self-stretch'>
            <div className='flex w-full flex-col justify-center  max-md:max-w-full'>
                <div className='flex w-full flex-col items-center  px-20 py-16 max-md:max-w-full max-md:px-5'>
                    <SectionHeader
                        title='My Skills'
                        subtitle='Comprehensive Skills Tailored to Your Needs'
                    />
                    <div className=' mt-5  max-w-full px-4 py-7'>
                        <div className='flex flex-wrap gap-5 max-md:flex-col max-md:gap-0'>
                            {/* Mapping over skills array */}
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col max-md:ml-0 max-md:w-full ${
                                        index > 0 ? "ml-5" : "" // Adding margin only after the first item
                                    }`}
                                >
                                    <div className='flex grow flex-col items-start self-stretch py-2.5 pl-10 text-base font-bold text-white max-md:mt-10'>
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className={`h-8 w-8 ${
                                                skill.highlighted
                                                    ? "filter-brightness-110"
                                                    : "filter-grayscale"
                                            }`}
                                        />
                                        <div className='mt-2 leading-[199%]'>
                                            {skill.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
