import skills from '../../data/skills.json';
import SectionHeader from '../UI/SectionHeader';
import Skill from './Skill';

// Iconify icons for Headers
const languagesIcon = 'mingcute:code-fill';

const librariesFrameworksIcon = 'fa-solid:book-reader';
const technologiesIcon = 'mdi:tools';

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="header">
                    <SectionHeader title="My" span="Skills" />
                </div>
                <div className="skills">
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
            </div>
        </section>
    );
}
