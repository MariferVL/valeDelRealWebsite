import Link from "next/link";

export default function HoverLink({ href, text, title, hoverText, activeText, ariaLabel }) {
    return (
        <Link
            href={href}
            title={title}
            data-hover={hoverText}
            data-active={activeText}
            aria-label={ariaLabel}
            className="relative inline-block py-2 text-center text-sm font-semibold overflow-hidden group lg:w-32"
        >
            <span className="base-text">{text}</span>
            <span className="hover-text">{hoverText}</span>
        </Link>
    );
}
