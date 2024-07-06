import React from "react";

type Props = {};

const Contact = (props: Props) => {
    return (
        <section className=' rounded-2xl bg-yellow-200 text-slate-800'>
            <div
                className='section container mx-auto flex w-full flex-col px-5 py-12 md:flex-row md:py-24 lg:max-w-5xl'
                id='contact-form'
            >
                <div className='w-full md:w-1/3'>
                    <h1 className='title-font mb-4 text-4xl font-bold text-gray-800 sm:text-4xl'>
                        Contact Us
                    </h1>
                    <p className='text-xl leading-relaxed text-gray-900'>
                        We're here to assist you! If you have any questions or
                        need assistance, please feel free to reach out to us.
                        <br />
                        You can also email us
                        <a
                            href='https://veilmail.io/e/FkKh7o'
                            className='font-medium text-blue-600 hover:underline'
                        >
                            click here to reveal our protected email address
                        </a>
                    </p>
                    <p className='mt-8 text-xl leading-relaxed text-gray-900'>
                        Connect with us on social media:
                    </p>
                    <span className='mt-6 inline-flex justify-center sm:justify-start'>
                        <a
                            className='text-gray-500 hover:text-gray-900'
                            target='_blank'
                            href='https://twitter.com/example'
                        >
                            <svg
                                fill='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='h-6 w-6'
                                viewBox='0 0 24 24'
                            >
                                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                            </svg>
                        </a>
                        <a
                            className='ml-3 text-gray-500 hover:text-gray-900'
                            href='https://www.instagram.com/example/'
                            target='_blank'
                        >
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='h-6 w-6'
                                viewBox='0 0 24 24'
                            >
                                <rect
                                    width='20'
                                    height='20'
                                    x='2'
                                    y='2'
                                    rx='5'
                                    ry='5'
                                ></rect>
                                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                            </svg>
                        </a>
                    </span>
                </div>
                <div className='mt-10 w-full md:mt-0 md:w-2/3 md:pl-28'>
                    <h1 className='title-font mb-4 text-4xl font-bold text-gray-800 sm:text-4xl'>
                        Contact Form
                    </h1>
                    <form action='https://fabform.io/f/{form-id}' method='post'>
                        <div className='w-full p-2'>
                            <div className='relative'>
                                <label
                                    htmlFor='name'
                                    className='py-4 text-lg leading-7 text-gray-900'
                                >
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    className='w-full rounded border border-gray-400 bg-white px-1 py-1 text-base leading-8 text-gray-900 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 '
                                />
                            </div>
                        </div>
                        <div className='w-full p-2'>
                            <div className='relative'>
                                <label
                                    htmlFor='email'
                                    className='py-4 text-lg leading-7 text-gray-900'
                                >
                                    Your Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className='w-full rounded border border-gray-400 bg-white px-1 py-1 text-base leading-8 text-gray-900 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 '
                                />
                            </div>
                        </div>
                        <div className='w-full p-2'>
                            <div className='relative'>
                                <label
                                    htmlFor='message'
                                    className='py-4 text-lg leading-7 text-gray-900'
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    className='h-32 w-full resize-none rounded border border-gray-400 bg-white px-3 py-1 text-base leading-6 text-gray-900 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 '
                                ></textarea>
                            </div>
                        </div>
                        <div className='w-full p-2'>
                            <button
                                type='submit'
                                className='g-recaptcha mx-0 flex flex-col rounded border-0 bg-gray-900 px-6 py-4 text-center text-xl font-bold text-white shadow-lg hover:bg-blue-900 focus:outline-none'
                            >
                                Send Message ✉
                            </button>
                        </div>
                        <p className='mt-8 text-xl leading-relaxed text-gray-900'>
                            We use VeilMail.io to{" "}
                            <a
                                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                                href='https://veilmail.io'
                            >
                                hide email address from spammers
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
