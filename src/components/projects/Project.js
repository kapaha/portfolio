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
        <div className="bg-[var(--dark-gray)] w-[20rem] overflow-hidden text-center rounded-2xl flex flex-col">
            <div
                className="w-full h-56 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/${imageSource}')`,
                }}
            />

            <div className="flex flex-col items-center justify-center gap-10 p-4">
                <h2 className="text-[var(--text-color)] font-bold text-2xl">
                    {title}
                </h2>

                <p className="text-[var(--gray)]">{description}</p>

                <div className="flex flex-row gap-2">
                    <p className="text-[var(--gray)] font-bold">Made With:</p>
                    <MadeWith techList={madeWithIcons} />
                </div>

                <p className="text-[var(--gray)]">{buildDate}</p>

                <div className="flex gap-4">
                    <Button
                        className="bg-[var(--red)] px-4 py-2 rounded inline-flex items-center gap-2 "
                        value="demo"
                        icon={<FaEye />}
                        goTo={demo}
                    />
                    <Button
                        className="bg-[var(--red)] px-4 py-2 rounded inline-flex items-center gap-2 "
                        value="code"
                        icon={<FaCode />}
                        goTo={code}
                    />
                </div>
            </div>
        </div>
    );
}
