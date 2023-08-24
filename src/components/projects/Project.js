import { FaEye, FaCode } from 'react-icons/fa';
import Button from './Button';
import MadeWith from './MadeWith';

export default function Project({
    title,
    description,
    buildDate,
    imageSource,
    madeWithIcons,
    demo,
    code,
}) {
    return (
        <div className="project">
            <div
                className="project-img"
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/${imageSource}')`,
                }}
            />
            <div className="project-text">
                <h2 className="project-header">{title}</h2>
                <p className="description">{description}</p>
                <div className="made-width">
                    <p>Made With:</p>
                    <MadeWith techList={madeWithIcons} />
                </div>
                <p className="build-date">{buildDate}</p>
            </div>
            <div className="project-buttons">
                <Button value="demo" icon={<FaEye />} goTo={demo} />
                <Button value="code" icon={<FaCode />} goTo={code} />
            </div>
        </div>
    );
}
