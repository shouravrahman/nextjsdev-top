import React from "react";
import { Spacer } from "@nextui-org/react";

import HtmlIcon from "/public/icons/html.svg";
import CssIcon from "/public/icons/css.svg";
import JavascriptIcon from "/public/icons/javascript.svg";
import NodeIcon from "/public/icons/node.svg";
import ReactIcon from "/public/icons/reactjs.svg";
import NextJsIcon from "/public/icons/nextjs.svg";
import MongoDBIcon from "/public/icons/mongodb.svg";
import TypescriptIcon from "/public/icons/typescript.svg";
import TailwindCssIcon from "/public/icons/tailwindcss.svg";
import SassIcon from "/public/icons/sass.svg";
import GithubIcon from "/public/icons/github.svg";
import DockerIcon from "/public/icons/docker.svg";

import ScrollingBanner from "./scrolling-banner";
import SectionHeader from "@/containers/HeroSection/SectionHeader.tsx";
import Image from "next/image";

const logos = [
    {
        key: "html",
        logo: HtmlIcon,
    },
    {
        key: "css",
        logo: CssIcon,
    },
    {
        key: "javascript",
        logo: JavascriptIcon,
    },
    {
        key: "node",
        logo: NodeIcon,
    },
    {
        key: "react",
        logo: ReactIcon,
    },
    {
        key: "nextjs",
        logo: NextJsIcon,
    },
    {
        key: "mongodb",
        logo: MongoDBIcon,
    },
    {
        key: "typescript",
        logo: TypescriptIcon,
    },

    {
        key: "tailwindcss",
        logo: TailwindCssIcon,
    },
    {
        key: "sass",
        logo: SassIcon,
    },
    {
        key: "github",
        logo: GithubIcon,
    },
    {
        key: "docker",
        logo: DockerIcon,
    },
];

export default function ScrollingSkills() {
    return (
        <section className='mx-auto  max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20'>
            <ScrollingBanner shouldPauseOnHover duration={50} gap='40px'>
                {logos.map(({ key, logo }) => (
                    <div
                        key={key}
                        className='text-foreground flex  items-center justify-center'
                    >
                        <Image className='invert' src={logo} alt={key} />
                    </div>
                ))}
            </ScrollingBanner>
            <Spacer y={12} />
            <ScrollingBanner
                isReverse
                shouldPauseOnHover
                duration={50}
                gap='40px'
            >
                {logos.map(({ key, logo }) => (
                    <div
                        key={key}
                        className='text-foreground flex  items-center justify-center'
                    >
                        <Image className='invert' src={logo} alt={key} />
                    </div>
                ))}
            </ScrollingBanner>
        </section>
    );
}
