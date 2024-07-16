import SocialLink from "@/components/SocialLink.tsx";
import React from "react";

const ProfileCard = () => {
    return (
        <div className='flex w-full max-w-[400px] flex-col rounded-[50px] border border-solid border-white bg-orange-500 px-4 py-3 '>
            <div className='flex w-full flex-col  gap-2 rounded-[50px] bg-orange-600  px-4 py-3 max-md:pr-5'>
                <img
                    loading='lazy'
                    srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55e2487e326fb90a08d843b3cb207cd9ed6605c06e0ede58a90085c82d8b5fbb?apiKey=da07e19f41d04fb48b0651b8deb55908&'
                    className='aspect-1 max-w-full rounded-[50px]'
                />
                <div className='mt-10 flex flex-col px-6 '>
                    <div className='text-2xl  text-black underline'>
                        hello@ikonicwebs.co
                    </div>
                    {/* <div className='self-start text-2xl  text-white'>
                        Base in Sylhet, Bangladesh
                    </div> */}
                </div>
                <button className='my-auto flex gap-2.5 self-start px-6'>
                    <div className='flex h-7 w-7 items-center justify-center rounded-md bg-black px-2 py-1.5'>
                        <img
                            loading='lazy'
                            src='https://cdn.builder.io/api/v1/image/assets/TEMP/9790f70dc1a7f94738e791a81ff87f8e3f156545d333d0069c80ea01a7d5a738?apiKey=da07e19f41d04fb48b0651b8deb55908&'
                            className=' w-[20px]'
                        />
                    </div>
                    <div className='text-lg font-semibold leading-7 text-white underline'>
                        Download CV
                    </div>
                </button>
                <div className='mt-10 flex flex-col justify-between gap-6 rounded-[50px] bg-yellow-200  p-6 text-black  '>
                    <div className=' text-center text-base font-extrabold uppercase leading-6'>
                        Contact Me:
                    </div>
                    <SocialLink />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
