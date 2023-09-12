import Section from 'components/UI/Section';
import Project from './Project';
import projects from '../../data/projects.json';

export default function Projects() {
    return (
        <Section name="projects" headerTitle="My" headerSpan="Projects" dark>
            <div className="flex flex-row flex-wrap gap-8 justify-evenly">
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
        </Section>
    );
}
