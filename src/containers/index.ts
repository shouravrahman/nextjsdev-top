import dynamic from 'next/dynamic'

export const HeroSection = dynamic(() => import('./HeroSection/HeroSection'));
export const HomeArticles = dynamic(() => import('./HomeArticles/HomeArticles'))
export const ArticleDetails = dynamic(() => import('./ArticleDetails/ArticleDetails'), { ssr: false })

