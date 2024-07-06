import React from "react";
import SectionHeader from "./SectionHeader.tsx";

const Services = () => {
    return (
        <div className='container relative mx-auto mt-5 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0'>
            <SectionHeader
                title='Our Services'
                subtitle='Comprehensive Solutions Tailored to Your Needs'
            />

            <div className='w-full'>
                <div className='mb-10 flex w-full flex-col sm:flex-row'>
                    <div className='mb-10 w-full sm:mb-0 sm:w-1/2'>
                        <div className='relative ml-0 mr-0 h-full sm:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-slate-700'></span>
                            <div className='relative h-full rounded-lg border-2 border-slate-700 bg-orange-400 p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                                        DAPP Development
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-indigo-500'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    A decentralized application (dapp) is an
                                    application built on a decentralized network
                                    that combines a smart contract and a
                                    frontend user interface.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <div className='relative ml-0 h-full md:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-purple-900'></span>
                            <div className='relative h-full rounded-lg border-2 border-purple-900 bg-orange-500 p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                                        Web 3.0 Development
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-purple-500'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    Web 3.0 is the third generation of Internet
                                    services that will focus on understanding
                                    and analyzing data to provide a semantic
                                    web.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-5 flex w-full flex-col sm:flex-row'>
                    <div className='mb-10 w-full sm:mb-0 sm:w-1/2'>
                        <div className='relative ml-0 mr-0 h-full sm:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-white'></span>
                            <div className='relative h-full rounded-lg border-2 border-white bg-orange-300 p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                                        Project Audit
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-blue-700'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    A Project Audit is a formal review of a
                                    project, which is intended to assess the
                                    extent up to which project management
                                    standards are being upheld.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-10 w-full sm:mb-0 sm:w-1/2'>
                        <div className='relative ml-0 mr-0 h-full sm:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-yellow-200'></span>
                            <div className='relative h-full rounded-lg border-2 border-yellow-200 bg-yellow-400 p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                                        Hacking / RE
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-white'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    A security hacker is someone who explores
                                    methods for breaching defenses and
                                    exploiting weaknesses in a computer system
                                    or network.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <div className='relative ml-0 h-full md:mr-10'>
                            <span className='absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-red-500'></span>
                            <div className='relative h-full rounded-lg border-2 border-green-500 bg-yellow-200 p-5'>
                                <div className='-mt-1 flex items-center'>
                                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>
                                        Bot/Script Development
                                    </h3>
                                </div>
                                <p className='mb-1 mt-3 text-xs font-medium uppercase text-red-500'>
                                    ------------
                                </p>
                                <p className='mb-2 text-gray-600'>
                                    Bot development frameworks were created as
                                    advanced software tools that eliminate a
                                    large amount of manual work and accelerate
                                    the development process.
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
