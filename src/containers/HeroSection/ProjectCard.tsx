import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./hero.module.css";
interface ProjectCardProps {
    image?: any;
    video?: string;
    githubLink: string;
    liveLink: string;
    tags: string[];
    title: string;
    subtitle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    video,
    githubLink,
    liveLink,
    tags,
    title,
    subtitle,
}) => {
    return (
        <Link href={liveLink} className={styles.card}>
            <div className={styles.temporary_text}>
                {/* Placeholder for image or video */}
                {image && (
                    <Image
                        src={image}
                        alt='Card Image'
                        className='rounded-lg object-cover p-2 '
                    />
                )}
            </div>
            <div className={styles.card_content}>
                <span className={styles.card_title}>{title}</span>
                <span className={styles.card_subtitle}>{subtitle}</span>
                <p className={styles.card_description}>
                    {/* Example description */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam condimentum eros nec nisi maximus, quis fermentum dui
                    consequat.
                </p>
                <div className={styles.card_links}>
                    {/* GitHub Link */}
                    {githubLink && (
                        <Link href={githubLink}>
                            <img
                                src='/github-fill.svg'
                                alt='GitHub Link'
                                className={styles.card_icon}
                            />
                        </Link>
                    )}
                    {/* Live Link */}
                    {liveLink && (
                        <Link href={liveLink}>
                            <img
                                src='/links-line.svg'
                                alt='Live Link'
                                className={styles.card_icon}
                            />
                        </Link>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
