import { Icon } from '@iconify/react';

export default function Skill({ header, headerIcon, items }) {
    return (
        <div className="flex flex-col items-center gap-4 p-8 skill bg-[var(--card-background)] w-[300px] max-w-full mx-auto">
            <Icon
                icon={headerIcon}
                className="text-[4rem]"
                color="hsl(356, 74%, 60%)"
            />

            <h2 className="font-bold">{header}</h2>

            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item.title}
                        className="flex items-center justify-center gap-2 bg-[var(var(--skills-span))"
                    >
                        {item.title}
                        <Icon icon={item.icon} inline="true" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
