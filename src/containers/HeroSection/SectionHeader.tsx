import React from "react";

interface ISectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader = ({ title, subtitle }: ISectionHeaderProps) => {
    return (
        <div className='my-10 flex w-[960px] max-w-full flex-col self-center px-10 text-center text-yellow-600 max-md:px-5'>
            <div className='self-center text-2xl font-medium leading-7'>
                {title}
            </div>
            <div className='mt-12 text-7xl font-bold leading-[76px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]'>
                {subtitle}
            </div>
            <hr className='mx-auto my-5 w-[98%] border-separate border-2 border-dashed border-yellow-200' />
        </div>
    );
};

export default SectionHeader;
