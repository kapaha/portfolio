import SectionHeader from '../UI/SectionHeader';
import Project from './Project';
import projects from '../../data/projects.json';

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="header">
                    <SectionHeader title="My" span="Projects" />
                </div>
                <div className="projects-wrapper">
                    {projects.map((project) => (
                        <Project
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            buildDate={project['build-date']}
                            imageSource={project.image}
                            madeWithIcons={project.madeWithIcons}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
