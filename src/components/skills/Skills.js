import Section from 'components/UI/Section';
import skills from '../../data/skills.json';
import Skill from './Skill';

// Iconify icons for Headers
const languagesIcon = 'mingcute:code-fill';

const librariesFrameworksIcon = 'fa-solid:book-reader';
const technologiesIcon = 'mdi:tools';

export default function Skills() {
    return (
        <Section name="skills" headerTitle="My" headerSpan="Skills">
            <div className="flex flex-col gap-4 text-center justify-evenly lg:flex-row">
                <Skill
                    header="Languages"
                    headerIcon={languagesIcon}
                    items={skills.languages}
                />
                <Skill
                    header="Libraries/Frameworks"
                    headerIcon={librariesFrameworksIcon}
                    items={skills.librariesFrameworks}
                />
                <Skill
                    header="Technologies"
                    headerIcon={technologiesIcon}
                    items={skills.technologies}
                />
            </div>
        </Section>
    );
}
