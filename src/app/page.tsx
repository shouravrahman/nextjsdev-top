import { HeroSection, HomeArticles } from "@/containers";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";

import { Metadata } from "next";
import { WEBSITE_NAME, META_DESCRIPTION } from "@/constants/_APP_SETUP";
import SectionHeader from "@/containers/HeroSection/SectionHeader.tsx";

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
                    "font-regular  bg-slate-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-slate-900 dark:text-white md:min-h-screen"
                }
                key={Math.random()}
            >
                <HeroSection />

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
