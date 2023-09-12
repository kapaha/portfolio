import Section from 'components/UI/Section';
import personImage from '../assets/images/person.svg';
import owner from '../data/owner.json';

export function About() {
    return (
        <div className="bg-[var(--dark-blue)]">
            <div className="container flex flex-col max-w-screen-xl p-4 mx-auto md:[&>*]:basis-1/2 md:flex-row md:justify-between">
                <Section name="about" headerTitle="About" headerSpan="Me" dark>
                    <p className="text-white">{owner.aboutMe}</p>
                </Section>

                <div className="max-w-[300px] w-3/4 mx-auto">
                    <img
                        src={personImage}
                        alt="A cartoon of a person sitting at there desk, looking at a laptop"
                    />
                </div>
            </div>
        </div>
    );
}
