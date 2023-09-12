export default function SectionHeader({ title, span }) {
    return (
        <h2 className="font-bold section-header__title">
            {title}
            <span className="coloured"> {span}</span>
        </h2>
    );
}
