import { Icon } from '@iconify/react';

export default function MadeWith({ techList }) {
    const iconList = techList.map((tech) => (
        <li key={tech.title} title={tech.title}>
            <Icon icon={tech.icon} inline="true" />
        </li>
    ));

    return <ul className="icons">{iconList}</ul>;
}
