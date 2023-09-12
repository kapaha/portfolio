export default function Button({ value, icon, goTo, className }) {
    return (
        <a
            href={goTo}
            type="button"
            target="_blank"
            rel="noreferrer"
            className={className}
        >
            {icon}
            {value}
        </a>
    );
}
