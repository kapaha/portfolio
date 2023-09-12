import SectionHeader from 'components/UI/SectionHeader';

export default function Section({
    children,
    name,
    headerTitle,
    headerSpan,
    dark,
}) {
    const colorClass = dark ? 'bg-[var(--dark-blue)]' : '';

    return (
        <section id={name} className={colorClass}>
            <div className="container flex flex-col max-w-screen-xl gap-8 p-8 mx-auto">
                <SectionHeader title={headerTitle} span={headerSpan} />
                {children}
            </div>
        </section>
    );
}
