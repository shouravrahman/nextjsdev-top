import ProjectCard from "./ProjectCard.tsx";
import project1 from "../../../public/images/project1.png";
import project2 from "../../../public/images/project2.png";
import project3 from "../../../public/images/project3.png";
import project4 from "../../../public/images/project4.png";
import project5 from "../../../public/images/project5.png";

const projects = [
    {
        id: 1,
        title: "Project1",
        githubLink: "https://github.com/project1",
        liveLink: "https://project1.live",
        tags: ["React", "Next.js"],
        href: "https://project1.url",
        image: project1,
        gridArea: "project1",
        subtitle: "blah blah blah",
    },
    {
        id: 2,
        title: "Project1",
        githubLink: "https://github.com/project2",
        liveLink: "https://project2.live",
        tags: ["Node.js", "Express"],
        href: "https://project2.url",
        image: project2,
        gridArea: "project2",
        subtitle: "blah blah blah",
    },
    {
        id: 3,
        title: "Project1",
        githubLink: "https://github.com/project3",
        liveLink: "https://project3.live",
        tags: ["GraphQL", "Apollo"],
        href: "https://project3.url",
        image: project3,
        gridArea: "project3",
        subtitle: "blah blah blah",
    },
    {
        id: 4,
        title: "Project1",
        githubLink: "https://github.com/project4",
        liveLink: "https://project4.live",
        tags: ["Tailwind CSS", "UI/UX"],
        href: "https://project4.url",
        image: project4,
        gridArea: "project4",
        subtitle: "blah blah blah",
    },
    {
        id: 5,
        title: "Project1",
        githubLink: "https://github.com/project5",
        liveLink: "https://project5.live",
        tags: ["TypeScript", "Redux"],
        href: "https://project5.url",
        image: project5,
        gridArea: "project5",
        subtitle: "blah blah blah",
    },
    {
        id: 6,
        title: "Project1",
        githubLink: "https://github.com/project6",
        liveLink: "https://project6.live",
        tags: ["Docker", "Kubernetes"],
        href: "https://project6.url",
        image: project5,
        gridArea: "project6",
        subtitle: "blah blah blah",
    },
];

const Bento = () => {
    return (
        <div className='bentoContainer'>
            <div className='gridContainer'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            gridArea: project.gridArea,
                            width: "100%",
                        }}
                    >
                        <ProjectCard
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            tags={project.tags}
                            title={project.title}
                            subtitle={project.subtitle}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bento;
