// import React from "react";
// import SectionHeader from "./SectionHeader.tsx";

// interface Skill {
//     name: string;
//     category: string;
//     icon: string; // URL or import path for the icon
//     highlighted: boolean; // Whether the skill should be highlighted
// }
// const skills: Skill[] = [
//     {
//         name: "HTML",
//         category: "Frontend",
//         icon: "/icons/html.svg",
//         highlighted: true,
//     },
//     {
//         name: "CSS",
//         category: "Frontend",
//         icon: "/icons/css.svg",
//         highlighted: true,
//     },
//     {
//         name: "JavaScript",
//         category: "Frontend",
//         icon: "/icons/javascript.svg",
//         highlighted: true,
//     },
//     {
//         name: "React",
//         category: "Frontend",
//         icon: "/icons/react.svg",
//         highlighted: true,
//     },
//     {
//         name: "Next.js",
//         category: "Frontend",
//         icon: "/icons/nextjs.svg",
//         highlighted: true,
//     },
//     {
//         name: "TypeScript",
//         category: "Frontend",
//         icon: "/icons/typescript.svg",
//         highlighted: true,
//     },
//     {
//         name: "Sass",
//         category: "Frontend",
//         icon: "/icons/sass.svg",
//         highlighted: true,
//     },
//     {
//         name: "GitHub",
//         category: "Development Tools",
//         icon: "/icons/github.svg",
//         highlighted: true,
//     },
//     {
//         name: "Docker",
//         category: "Development Tools",
//         icon: "/icons/docker.svg",
//         highlighted: true,
//     },
//     {
//         name: "Node.js",
//         category: "Backend",
//         icon: "/icons/nodejs.svg",
//         highlighted: true,
//     },
//     {
//         name: "MongoDB",
//         category: "Backend",
//         icon: "/icons/mongodb.svg",
//         highlighted: true,
//     },
//     {
//         name: "Sanity",
//         category: "Backend",
//         icon: "/icons/sanity.svg",
//         highlighted: true,
//     },
//     {
//         name: "Tailwind CSS",
//         category: "Frontend",
//         icon: "/icons/tailwindcss.svg",
//         highlighted: true,
//     },
// ];

// const Skills = (props: Props) => {
//     return (
//         <div className='flex flex-col justify-center self-stretch'>
//             <div className='flex w-full flex-col justify-center  max-md:max-w-full'>
//                 <div className='flex w-full flex-col items-center  px-20 py-16 max-md:max-w-full max-md:px-5'>
//                     <SectionHeader
//                         title='My Skills'
//                         subtitle='Comprehensive Skills Tailored to Your Needs'
//                     />
//                     <div className=' mt-5  max-w-full px-4 py-7'>
//                         <div className='flex flex-wrap gap-5 max-md:flex-col max-md:gap-0'>
//                             {/* Mapping over skills array */}
//                             {skills.map((skill, index) => (
//                                 <div
//                                     key={index}
//                                     className={`flex flex-col max-md:ml-0 max-md:w-full ${
//                                         index > 0 ? "ml-5" : "" // Adding margin only after the first item
//                                     }`}
//                                 >
//                                     <div className='flex grow flex-col items-start self-stretch py-2.5 pl-10 text-base font-bold text-white max-md:mt-10'>
//                                         <img
//                                             src={skill.icon}
//                                             alt={skill.name}
//                                             className={`h-8 w-8 ${
//                                                 skill.highlighted
//                                                     ? "filter-brightness-110"
//                                                     : "filter-grayscale"
//                                             }`}
//                                         />
//                                         <div className='mt-2 leading-[199%]'>
//                                             {skill.name}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;
