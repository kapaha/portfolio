import SectionHeader from './UI/SectionHeader';
import personImage from '../assets/images/person.svg';
import owner from '../data/owner.json';

export function About() {
    return (
        <section id="about" className="about-container">
            <div className="container">
                <div className="text">
                    <div className="title-container">
                        <div className="header">
                            <SectionHeader title="About" span="Me" />
                        </div>
                    </div>
                    <p className="lead">{owner.aboutMe}</p>
                </div>
                <div className="img-container">
                    <img
                        className="personImage"
                        src={personImage}
                        alt="A cartoon of a person sitting at there desk, looking at a laptop"
                    />
                </div>
            </div>
        </section>
    );
}
