import Link from "next/link";

export default function HoverLink({ href, text, title, hoverText, activeText, ariaLabel }) {
    return (
        <Link
            href={href}
            title={title}
            data-hover={hoverText}
            data-active={activeText}
            aria-label={ariaLabel}
            className={`inline-block relative mx-2 py-2 text-center text-white text-sm font-semibold flex items-center justify-center`}
        >
            <span >{text}</span>

        </Link>
    );
}