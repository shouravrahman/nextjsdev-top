import React from "react";
import { Spacer } from "@nextui-org/react";

import {
    Logo1,
    Logo10,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
} from "./logos";

import ScrollingBanner from "./scrolling-banner";
import SectionHeader from "@/containers/HeroSection/SectionHeader.tsx";

const logos = [
    {
        key: "logo-1",
        logo: Logo1,
    },
    {
        key: "logo-2",
        logo: Logo2,
    },
    {
        key: "logo-3",
        logo: Logo3,
    },
    {
        key: "logo-4",
        logo: Logo4,
    },
    {
        key: "logo-5",
        logo: Logo5,
    },
    {
        key: "logo-6",
        logo: Logo6,
    },
    {
        key: "logo-7",
        logo: Logo7,
    },
    {
        key: "logo-8",
        logo: Logo8,
    },
    {
        key: "logo-9",
        logo: Logo9,
    },
    {
        key: "logo-10",
        logo: Logo10,
    },
];

export default function ScrollingSkills() {
    return (
        <section className='mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20'>
            <ScrollingBanner shouldPauseOnHover duration={50} gap='40px'>
                {logos.map(({ key, logo }) => (
                    <div
                        key={key}
                        className='text-foreground flex items-center justify-center'
                    >
                        {logo}
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
                        className='text-foreground flex items-center justify-center'
                    >
                        {logo}
                    </div>
                ))}
            </ScrollingBanner>
        </section>
    );
}
