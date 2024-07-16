import React from "react";
import SectionHeader from "./SectionHeader.tsx";

const Services = () => {
    return (
        <div className='container relative mx-auto mt-5 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0'>
            <SectionHeader
                title='What I can do?'
                subtitle='Comprehensive Solutions Tailored to Your Needs'
            />

            <div className='w-full'>
                <div className='mb-10 flex w-full flex-col sm:flex-row'>
                    <div className='mb-10 w-full sm:mb-0 sm:w-1/2'>
                        <div className='relative ml-0 mr-0 h-full sm:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg '></span>
                            <div className='relative h-full rounded-lg border-2  bg-[#fdeeb1] p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-slate-900'>
                                        Next.js & React.js Development
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-slate-900'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    Harness the power of Next.js and React.js to
                                    build dynamic, high-performance web
                                    applications. I create seamless user
                                    experiences with efficient state management
                                    and responsive design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <div className='relative ml-0 h-full md:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-purple-900'></span>
                            <div className='relative h-full rounded-lg border-2  bg-[#fde68a] p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-slate-900'>
                                        SaaS Product Development
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-slate-900'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    Transform your software ideas into reality
                                    with bespoke SaaS solutions. From concept to
                                    deployment, I ensure scalable and secure
                                    applications tailored to your business
                                    needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-5 flex w-full flex-col justify-center gap-10 lg:flex-row   '>
                    <div className='mb-10 w-full sm:mb-0 lg:w-1/2'>
                        <div className='relative ml-0 mr-0 h-full sm:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-white'></span>
                            <div className='relative h-full rounded-lg border-2 border-white bg-[##fcdd63] p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-slate-900'>
                                        AI & LangChain Applications
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-slate-900'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    I specialize in integrating AI APIs and
                                    LangChain to build agents and full-stack
                                    applications that enhance user interactions
                                    and automate complex processes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-10 w-full sm:mb-0 lg:w-1/2'>
                        <div className='relative ml-0 mr-0 h-full sm:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-yellow-200'></span>
                            <div className='relative h-full rounded-lg border-2 border-yellow-200 bg-[#fdeeb1] p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-slate-900'>
                                        Headless CMS Integration
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-slate-900'>
                                    ------------
                                </p>
                                <p className='mb-2 text-slate-900'>
                                    I deliver flexible and scalable content
                                    architectures that allow you to manage and
                                    deliver content across multiple channels
                                    seamlessly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='relative ml-0 h-full md:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-yellow-400'></span>
                            <div className='relative h-full rounded-lg border-2 border-green-500 bg-[#fefae8] p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-slate-900'>
                                        Website & Landing Page Development
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-slate-900'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    I design and develop visually appealing,
                                    user-friendly, and conversion-focused pages
                                    that effectively communicate your brand
                                    message and drive engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
