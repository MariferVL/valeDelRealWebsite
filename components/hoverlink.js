import Link from "next/link";

export default function HoverLink({ href, text, title, hoverText, activeText }) {
    return (
        <Link
            href={href}
            title={title}
            data-hover={hoverText}
            data-active={activeText}
            className={` inline-block relative m-4 p-2 text-white text-lg font-semibold transition-transform duration-300 ease-in-out hover:scale-95 active:scale-90`}
            >
            <span >{text}</span>

        </Link>
    );
}