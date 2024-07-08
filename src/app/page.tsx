import { HeroSection, HomeArticles } from "@/containers";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";

import { Metadata } from "next";
import { WEBSITE_NAME, META_DESCRIPTION } from "@/constants/_APP_SETUP";
import SectionHeader from "@/containers/HeroSection/SectionHeader.tsx";
import Services from "@/containers/HeroSection/Services.tsx";
import Bento from "@/containers/HeroSection/Bento.tsx";
import ScrollingSkills from "@/components/ScrollingSkills/ScrollingSkills.tsx";
import Contact from "@/containers/HeroSection/Contact.tsx";

export const metadata: Metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: "https://www.shouravrahman.dev",
        siteName: WEBSITE_NAME,
        images: [
            {
                url: "",
                width: 1400,
                height: 700,
            },
            {
                url: "./blog-banner.png",
                width: 1800,
                height: 1600,
                alt: "shouravrahman",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function Home() {
    const articles = await sanityFetch<SanityDocument>({
        query: postsQuery,
    });

    return (
        <>
            <div
                className={
                    "font-regular  bg-emerald-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-slate-900 dark:text-white md:min-h-screen"
                }
                key={Math.random()}
            >
                <HeroSection />
                <Services />
                <div className='flex w-full flex-col items-center  px-20 py-16 max-md:max-w-full max-md:px-5'>
                    <SectionHeader
                        title='My Projects'
                        subtitle='Showcasing Our Latest Work and Innovations'
                    />
                    <Bento />
                </div>

                <div className='flex w-full flex-col items-center  px-20 py-16 max-md:max-w-full max-md:px-5'>
                    <SectionHeader
                        title='My Skills'
                        subtitle='Comprehensive Skills Tailored to Your Needs'
                    />
                    <ScrollingSkills />
                </div>
                <div className='flex w-full flex-col items-center '>
                    <SectionHeader
                        title='Contact Me'
                        subtitle='Comprehensive Skills Tailored to Your Needs'
                    />
                    <Contact />
                </div>

                <Suspense fallback={"Data is Laoding"}>
                    <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                        <div
                            className={
                                "flex flex-col flex-wrap items-center justify-center"
                            }
                        >
                            <SectionHeader
                                title='My Blogs'
                                subtitle='Read My Latet Blogs'
                            />

                            {articles?.length > 0 ? (
                                <HomeArticles
                                    noOfArticle={3}
                                    isArchive={true}
                                    articles={articles}
                                    isSeries={false}
                                    isExternal={false}
                                />
                            ) : (
                                <p>No Article Found</p>
                            )}
                        </div>
                    </div>
                </Suspense>
            </div>
        </>
    );
}
